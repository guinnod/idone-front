import styles from './styles/_invite-button.module.scss'
import invite from '../../assets/icons/user-circle-add.svg'
export const InviteButton = () => {
    return (
        <div className={styles.anchor}>
            <img src={invite} alt="svg" />
            <div className={styles.text}>
                Invite
            </div>
        </div>
    )
}