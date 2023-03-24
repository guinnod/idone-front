import styles from './styles/_board.module.scss'
export const Board = ({ text, color }) => {
    return (
        <div className={styles.anchor}>
            <div className={styles.item} style={{ background: color }}></div>
            <div className={styles.text}>{text}</div>
        </div>
    )
} 