import styles from './styles/_task-date.module.scss'
import calendarIcon from '../../assets/icons/calendar-tick.svg'
export const TaskDate = ({ text, color }) => {
    return (
        <div className={styles.anchor}>
            <div>Due date</div>
            <img src={calendarIcon} alt="" />
            <div className={styles.text}>20/03/21</div>
        </div>
    )
} 