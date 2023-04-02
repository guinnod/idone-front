import { UserPhoto } from '../ui/UserPhoto'
import styles from './styles/_task-people.module.scss'
import userPhoto from '@images/userPhoto.jpg'
export const TaskPeople = () => {

    return (
        <div className={styles.anchor}>
            <UserPhoto src={userPhoto}/>
            <UserPhoto src={userPhoto}/>
            <UserPhoto src={userPhoto} />
        </div>
    )
}