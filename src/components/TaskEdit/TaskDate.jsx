import styles from './styles/_task-date.module.scss'
import calendarIcon from '@icons/calendar-tick.svg'
import ReactDatePicker from 'react-datepicker'
export const TaskDate = ({ selectedDate, handleDateChange }) => {
    return (
        <div className={styles.anchor}>
            <div className={styles.text}>Due Date</div>
            <div>
                <img src={calendarIcon} alt="calendar" onClick={()=>{
                    document.getElementById('datepic').click()
                }}/>
                <ReactDatePicker
                id='datepic'
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                    />
            </div>
        </div>
    )
} 