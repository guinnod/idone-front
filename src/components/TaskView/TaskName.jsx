import styles from './styles/_task-name.module.scss'
export const TaskName = ({ name, author, date }) => {

    return (
        <div className={styles.anchor}>
            <h1>{name}</h1>
            <p>Added by {author}, {date}</p>
        </div>
    )
}