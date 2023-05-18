import { useEffect, useState } from 'react';
import styles from './styles/_task-data.module.scss'
import { TaskDeadline } from './TaskDeadline';
import { TaskPeople } from './TaskPeople';
import { TaskStatus } from './TaskStatus'

export const TaskData = ({ status, date, users }) => {
    const data = [
        {
            name: 'Assigned to',
            component: <TaskPeople users={users}/>
        }, {
            name: 'Deadline',
            component: <TaskDeadline deadline={date}/>
        }, {
            name: 'Status',
            component: <TaskStatus status={status} />
        },
    ]
    
    return (
        <div className={styles.anchor}>
            {data.map((e, key) => {
                return (
                    <div key={key}>
                        <p className={styles.gray_text}>{e.name}</p>
                        {e.component}
                    </div>
                )
            })}
        </div>
    )
}