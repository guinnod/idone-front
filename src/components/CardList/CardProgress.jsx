import calculateProgress from '../../utils/calculateProgress'
import styles from './styles/_card-progress.module.scss'

export const CardProgress = ({ value, color }) => {
    const width = calculateProgress(value, 150);
    return (
        <div className={styles.anchor}>
            <div className={styles.value} style={{ width: `${width}px`, background: color }}></div>
        </div>
    )
}