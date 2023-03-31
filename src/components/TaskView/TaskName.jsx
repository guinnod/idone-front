import styles from './styles/_task-name.module.scss'
export const TaskName = ({ status }) => {

    return (
        <div className={styles.anchor}>
            <h1>Name of task</h1>
            <p>Added by Ulday Turganbayeva, 22 hours ago</p>
        </div>
    )
}