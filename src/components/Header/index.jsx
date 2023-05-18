import styles from './styles/_header.module.scss'
import { OtherUsers } from '@ui/OtherUsers'
import { CircleButton } from "@ui/CircleButton"
import { InviteButton } from './InviteButton'
import { Logo } from "@ui/Logo"
import { SearchInput } from "./SearchInput"
import { UserPhoto } from "@ui/UserPhoto"
import menuIcon from '@icons/menu.svg'
import homeIcon from '@icons/home.svg'
import addIcon from '@icons/add.svg'
import notifyIcon from '@icons/notify.svg'
import userPhoto from '@images/userPhoto.jpg'
import colors from '@styles/colors.json'
import { useDispatch, useSelector } from 'react-redux'
import { tasksActions } from '@store/tasks'
import { Profile } from '@layouts/Profile'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Header = () => {
    const [isProfile, setIsProfile] = useState(false)

    return (
        <>
            <div className={styles.anchor} >
                <div>

                    <CircleButton svg={menuIcon} color={colors.gray_mid} />
                    <Link to='/'>
                        <CircleButton svg={homeIcon} color={colors.gray_mid} />
                    </Link>
                    <CircleButton svg={addIcon} color={colors.main} />
                </div>
                <Logo />
                <div>
                    <SearchInput />
                    <CircleButton svg={notifyIcon} color={colors.gray_mid} />
                    <UserPhoto src={userPhoto} onClick={()=>{setIsProfile(true)}} />
                </div>
            </div>
            {isProfile ? <Profile closeAction={()=>{setIsProfile(false)}}/> : <></>}
        </>
    )
}
export const HeaderExtended = ({setValue, users, name}) => {
    return (
        <section>
            <Header />
            <div className={styles.anchor}>
                <div>
                    <div className={styles.text}>
                       { name}
                    </div>
                    <div className={styles.line}></div>
                </div>

                <div>
                    <OtherUsers users={users} limit={4} />
                    <InviteButton onClick={setValue}/>
                </div>
            </div>
        </section>
    )
} 