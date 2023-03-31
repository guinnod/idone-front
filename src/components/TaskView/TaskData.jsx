import styles from './styles/_task-data.module.scss'
import { TaskDeadline } from './TaskDeadline';
import { TaskPeople } from './TaskPeople';
import { TaskStatus } from './TaskStatus'

export const TaskData = ({ status }) => {
    const data = [
        {
            name: 'Assigned to',
            component: <TaskPeople />
        }, {
            name: 'Deadline',
            component: <TaskDeadline />
        }, {
            name: 'Status',
            component: <TaskStatus status='Done' />
        },
    ];
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