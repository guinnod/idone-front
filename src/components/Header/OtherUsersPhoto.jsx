import styles from './styles/_other-users-photo.module.scss'
import addIcon from '@icons/add.svg'
export const OtherUsersPhoto = ({ amount, isAdd }) => {
    return (
        <div className={styles.anchor}>
            {isAdd ? <img src={addIcon} alt="add" /> : `+${amount}`}
        </div>
    )
}