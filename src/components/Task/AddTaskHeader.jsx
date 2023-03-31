import styles from './styles/_add-task-header.module.scss'
import closeIcon from '@icons/ic_Close.svg'
import userIcon from '@icons/user-add.svg'
import calendarIcon from '@icons/calendar.svg'
import timerIcon from '@icons/timer.svg'

export const AddTaskHeader = () => {
    return (
        <section className={styles.anchor}>
            <h2>Name of the task</h2>
            <div>
                <div>
                    <img src={userIcon} alt="add person" />
                    <img src={timerIcon} alt="timer" />
                    <img src={calendarIcon} alt="calendar" />
                </div>
                <img src={closeIcon} alt="close" />
            </div>
        </section>
    )
}