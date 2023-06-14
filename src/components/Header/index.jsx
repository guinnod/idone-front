import styles from './styles/_header.module.scss'
import { OtherUsers } from '@ui/OtherUsers'
import { CircleButton } from "@ui/CircleButton"
import { InviteButton } from './InviteButton'
import { Logo } from "@ui/Logo"
import { SearchInput } from "./SearchInput"
import { UserPhoto } from "@ui/UserPhoto"
import menuIcon from '@icons/menu.svg'
import menuWhiteIcon from '@icons/menu_white.svg'
import homeIcon from '@icons/home.svg'
import addIcon from '@icons/add.svg'
import notifyIcon from '@icons/notify.svg'
import userPhoto from '@images/userPhoto.jpg'
import colors from '@styles/colors.json'
import { useDispatch, useSelector } from 'react-redux'
import { tasksActions } from '@store/tasks'
import { Profile } from '@layouts/Profile'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { get } from '@/api'

export const Header = ({ pluseAction, menuAction, menu }) => {
    const [isProfile, setIsProfile] = useState(false)
    useEffect(() => {
        get({ path: 'edit-profile', isAuth: true })
            .then(res => {
                if (res.data.photo !== 'no') {
                    setPhoto(`${import.meta.env.VITE_BACKEND_API}` + res.data.photo)
                }
            })
    }, [])
    const [photo, setPhoto] = useState(userPhoto)
    return (
        <>
            <div className={styles.anchor} >
                <div>

                    <CircleButton onClick={menuAction} svg={!menu ? menuIcon: menuWhiteIcon} color={!menu ? colors.gray_mid : colors.main} />
                    <Link to='/'>
                        <CircleButton svg={homeIcon} color={colors.gray_mid} />
                    </Link>
                    <CircleButton onClick={pluseAction} svg={addIcon} color={colors.main} />
                </div>
                <Logo />
                <div>
                    <SearchInput />
                    <CircleButton svg={notifyIcon} color={colors.gray_mid} />
                    <UserPhoto src={photo} onClick={() => { setIsProfile(true) }} />
                </div>
            </div>
            {isProfile ? <Profile closeAction={() => { setIsProfile(false) }} /> : <></>}
        </>
    )
}
export const HeaderExtended = ({ setValue, users, name }) => {
    return (
        <section>
            <Header />
            <div className={styles.anchor}>
                <div>
                    <div className={styles.text}>
                        {name}
                    </div>
                    <div className={styles.line}></div>
                </div>

                <div>
                    <OtherUsers users={users} limit={4} />
                    <InviteButton onClick={setValue} />
                </div>
            </div>
        </section>
    )
} 