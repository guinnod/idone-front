import styles from './styles/_task-marker.module.scss'
import checkIcon from '@icons/ic_Check.svg'
export const TaskMarker = () => {
    return (
        <div className={styles.anchor}>
            <img src={checkIcon} alt="icon" />
            Mark Complete
        </div>
    )
}