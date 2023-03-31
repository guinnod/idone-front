import styles from './styles/_task-date.module.scss'
import calendarIcon from '@icons/calendar-tick.svg'
export const TaskDate = ({ date }) => {
    return (
        <div className={styles.anchor}>
            <div className={styles.text}>Due Date</div>
            <div>
                <img src={calendarIcon} alt="calendar" />
                {date}
            </div>
        </div>
    )
} 