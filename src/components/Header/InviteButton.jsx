import styles from './styles/_invite-button.module.scss'
import inviteIcon from '@icons/user-circle-add.svg'
export const InviteButton = ({onClick}) => {
    return (
        <div className={styles.anchor} onClick={onClick}>
            <img src={inviteIcon} alt="invite icon" />
            <div className={styles.text}>
                Invite
            </div>
        </div>
    )
}