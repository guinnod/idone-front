import styles from './styles/_task-button.module.scss'
import arrowIcon from '@icons/Arrow-Down.svg'
export const TaskButton = ({ text }) => {
    return (
        <div className={styles.anchor}>
            {text}
            <div>
                <img src={arrowIcon} alt="arrow" />
            </div>
        </div>
    )
}