import styles from './styles/_user-photo.module.scss'

export const UserPhoto = ({ photoSrc }) => {
    return (
        <div className={styles.anchor} >
            <img src={photoSrc} alt="user" />
        </div>
    )
}