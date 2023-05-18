import styles from './styles/_task-comment.module.scss'
import messagesIcon from '@icons/messages.svg'
import optionsIcon from '@icons/options.svg'
import { useEffect, useState } from 'react'
export const TaskComment = ({comment, author, project, description, currentDate}) => {
    const[date, setDate] = useState([])
    
    useEffect(() => {
        currentDate = new Date(currentDate) ?? new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        let month = currentDate.toLocaleString('en-US', { month: 'long' });
        const year = currentDate.getFullYear();
        month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
        setDate(`${month}, ${day}, ${year}`);
    }, [currentDate])
    return (
        <div className={styles.anchor}>
            <div className={styles.icon}>
                <img src={messagesIcon} alt="description" />
            </div>
            <div className={styles.header}>
                <p>{author}, {project}</p>
                <div>
                    <span>{date}</span>
                    <img src={optionsIcon} alt="options" />
                </div>
            </div>
            {description}
            </div>
    )
}