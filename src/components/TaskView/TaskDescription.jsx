import styles from './styles/_task-description.module.scss'
import descriptionIcon from '@icons/description.svg'
export const TaskDescription = ({description}) => {

    return (
        <div className={styles.anchor}>
            <img src={descriptionIcon} alt="description" />
            <section>
                <div className={styles.text}>Description</div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt qui eligendi, accusamus nemo error at adipisci molestiae quasi temporibus. A corporis eos dolores, magnam maiores nobis fuga sequi doloribus minima.
                <a>View all</a>
            </section>
        </div>
    )
}