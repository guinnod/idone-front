import calculateProgress from '@utils/calculateProgress'
import styles from './styles/_progress.module.scss'

export const Progress = ({ value, color, background, size }) => {
    const width = calculateProgress(value, size);
    return (
        <div className={styles.anchor} style={{background: background, width: size}}>
            <div className={styles.value} style={{ width: `${width}px`, background: color }}></div>
        </div>
    )
}