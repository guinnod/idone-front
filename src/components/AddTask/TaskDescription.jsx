import styles from './styles/_task-date.module.scss'
import calendarIcon from '../../assets/icons/calendar-tick.svg'
export const TaskDescription = ({ text, color }) => {
    return (
        <div className={styles.anchor}>
            <h2>Description</h2>
            <textarea name="" id="" cols="30" rows="10" placeholder='Add a more detail description...'></textarea>
        </div>
    )
} 