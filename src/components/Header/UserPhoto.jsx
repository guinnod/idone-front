import styles from './styles/_user-photo.module.scss'

export const UserPhoto = ({ src }) => {
    return (
        <div className={styles.anchor} >
            <img src={src} alt="user" />
        </div>
    )
}