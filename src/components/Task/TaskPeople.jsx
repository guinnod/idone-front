import { UserPhoto } from '../Header/UserPhoto'
import styles from './styles/_task-people.module.scss'

export const TaskPeople = () => {

    return (
        <div className={styles.anchor}>
            <UserPhoto />
            <UserPhoto />
            <UserPhoto />
        </div>
    )
}