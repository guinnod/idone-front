import styles from './styles/_task-header.module.scss'
import closeIcon from '@icons/ic_Close.svg'
import { TaskMarker } from './TaskMarker'
export const TaskHeader = ({ status }) => {

    return (
        <div className={styles.anchor}>
            <TaskMarker />
            <img src={closeIcon} alt="close" />
        </div>
    )
}