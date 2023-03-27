import styles from './styles/_task-description.module.scss'
import descriptionIcon from '../../assets/icons/description.svg'
export const TaskDescription = () => {

    return (
        <div className={styles.anchor}>
            <img src={descriptionIcon} alt="description" />
            <section>
                <div className={styles.text}>Description</div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt qui eligendi, accusamus nemo error at adipisci molestiae quasi temporibus. A corporis eos dolores, magnam maiores nobis fuga sequi doloribus minima.
                </div>
                <a>View all</a>
            </section>
        </div>
    )
}