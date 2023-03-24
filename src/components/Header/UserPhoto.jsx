import styles from './styles/_user-photo.module.scss'
import userPhoto from '../../assets/images/userPhoto.jpg'
export const UserPhoto = () => {
    return (
        <div className={styles.anchor} >
            <img src={userPhoto} alt="user" />
        </div>
    )
}