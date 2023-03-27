import { CommentInput } from '../components/Task/CommentInput'
import { TaskComment } from '../components/Task/TaskComment'
import { TaskData } from '../components/Task/TaskData'
import { TaskDescription } from '../components/Task/TaskDescription'
import { TaskHeader } from '../components/Task/TaskHeader'
import { TaskName } from '../components/Task/TaskName'
import styles from './styles/_task-view.module.scss'

export const TaskView = () => {
    const comments = [1];
    return (
        <div className={styles.anchor}>
            <TaskHeader />
            <section>
                <TaskName />
                <TaskData />
                <TaskDescription />
                <div>
                    <h4>Comments (1)</h4>
                    {comments.map((e, key) => {
                        return (<TaskComment key={key} />)
                    })}
                </div>
                <CommentInput />
            </section>
        </div>
    )
}