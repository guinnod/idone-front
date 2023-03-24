import styles from './styles/_header.module.scss'
import { OtherUsers } from './OtherUsers'
import { CircleButton } from "./CircleButton"
import { InviteButton } from './InviteButton'
import { Logo } from "./Logo"
import { SearchInput } from "./SearchInput"
import { UserPhoto } from "./UserPhoto"
import menuIcon from '../../assets/icons/menu.svg'
import homeIcon from '../../assets/icons/home.svg'
import addIcon from '../../assets/icons/add.svg'
import notifyIcon from '../../assets/icons/notify.svg'
import colors from '../../assets/styles/colors.json'
export const Header = () => {
    return (
        <>
            <div className={styles.anchor} >
                <div>
                    <CircleButton svg={menuIcon} color={colors.gray} />
                    <CircleButton svg={homeIcon} color={colors.gray} />
                    <CircleButton svg={addIcon} color={colors.main} />
                </div>
                <div>
                    <Logo />
                </div>
                <div>
                    <SearchInput />
                    <CircleButton svg={notifyIcon} color={colors.gray} />
                    <UserPhoto />
                </div>
            </div>
            <div className={styles.anchor}>
                <div>
                    <div className={styles.text}>
                        Brackets
                    </div>
                    <div className={styles.line}></div>
                </div>

                <div>
                    <OtherUsers />
                    <InviteButton />
                </div>
            </div>
        </>
    )
}