import { useEffect, useState } from 'react'
import styles from './styles/_task-deadline.module.scss'
export const TaskDeadline = ({ deadline }) => {
    const [datee, setDate] = useState(deadline)
    useEffect(() => {
        const date = new Date(deadline);
        console.log(deadline);
        const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        setDate(formattedDate)
    }, [deadline])
    return (
        <div className={styles.anchor}>
            {datee}
        </div>
    )
}