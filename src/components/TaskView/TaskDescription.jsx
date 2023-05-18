import styles from './styles/_task-description.module.scss'
import descriptionIcon from '@icons/description.svg'
export const TaskDescription = ({description, editTask}) => {

    return (
        <div className={styles.anchor}>
            <img src={descriptionIcon} alt="description" />
            <section>
                <div className={styles.text}>Description</div>
                {description}<a onClick={editTask}>View all</a>
            </section>
        </div>
    )
}