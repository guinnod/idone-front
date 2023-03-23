import styles from '../../styles/components/Header/_header.module.scss'
import { OtherUsers } from './ui/OtherUsers'
import { CreateButton } from "./ui/CreateButton"
import { HomeButton } from "./ui/HomeButton"
import { InviteButton } from './ui/InviteButton'
import { Logo } from "./ui/Logo"
import { NotifyButton } from "./ui/NotifyButton"
import { SearchInput } from "./ui/SearchInput"
import { SideButton } from "./ui/SideButton"
import { UserPhoto } from "./ui/UserPhoto"
export const Header = () => {
    return (
        <>
            <div className={styles.anchor} >
                <div>
                    <SideButton />
                    <HomeButton />
                    <CreateButton />
                </div>
                <div>
                    <Logo />

                </div>
                <div>

                    <SearchInput />
                    <NotifyButton />
                    <UserPhoto />
                </div>
            </div>
            <div className={styles.anchor}>
                <div>
                    Brackets
                </div>
                <div>
                    <OtherUsers />
                    <InviteButton />
                </div>
            </div>
        </>
    )
}