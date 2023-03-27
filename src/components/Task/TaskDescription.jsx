import styles from './styles/_task-header.module.scss'
import descriptionIcon from '../../assets/icons/description.svg'
export const TaskDescription = ({ status }) => {

    return (
        <div className={styles.anchor}>

            <img src={descriptionIcon} alt="description" />
            <p>Description</p>

            <div className={styles.content}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt qui eligendi, accusamus nemo error at adipisci molestiae quasi temporibus. A corporis eos dolores, magnam maiores nobis fuga sequi doloribus minima.
            </div>
            <a>View all</a>
        </div>
    )
}