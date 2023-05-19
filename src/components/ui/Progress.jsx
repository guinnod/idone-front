import calculateProgress from '@utils/calculateProgress'
import styles from './styles/_progress.module.scss'

export const Progress = ({ value, color, background, size }) => {

    return (
        <div className={styles.anchor} style={{ background: background, width: `${size}px` }}>
            <div className={styles.value} style={{ width: `${Math.round((value / 100) * size)}px`, background: color }}></div>
        </div>
    )
}