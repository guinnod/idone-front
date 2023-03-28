import styles from './styles/_other-users-photo.module.scss'
export const OtherUsersPhoto = ({ amount }) => {
    return (
        <div className={styles.anchor}>
            <div>
                +{amount}
            </div>
        </div>
    )
}