import styles from '../styles/components/_other-users.module.scss'
import { OtherUsersPhoto } from './ui/OtherUsersPhoto'
import userPhoto from '../assets/images/userPhoto.jpg'
import { UserPhoto } from './ui/UserPhoto';

export const OtherUsers = () => {
    const users = [userPhoto, userPhoto, userPhoto];
    return (
        <div className={styles.anchor} >
            {users.map((e, key) => {
                return (
                    <UserPhoto key={key}/>
                );
            })}
            <OtherUsersPhoto />
        </div>
    )
}