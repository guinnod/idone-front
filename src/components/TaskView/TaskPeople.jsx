import { OtherUsers } from '@components/ui/OtherUsers'
import { UserPhoto } from '../ui/UserPhoto'
import styles from './styles/_task-people.module.scss'
import userPhoto from '@images/userPhoto.jpg'
import { useEffect } from 'react'
export const TaskPeople = ({ users, onClick }) => {
    const temp = []
        if (users)
            users.forEach(e => { temp.push( `http://127.0.0.1:8000${e}`); })
        
    return (
        <div className={styles.anchor}>
            <OtherUsers onClick={onClick} users={temp} limit={3} isAdd />
        </div>
    )
}