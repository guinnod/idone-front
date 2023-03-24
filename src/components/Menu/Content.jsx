import styles from './styles/_content.module.scss'
export const Content = ({ svg, text, selected, onClick }) => {
    
    return (
        <div className={styles.anchor + selected} onClick={onClick}>
            <div className={styles.icon}>
                <img src={svg} alt="svg" />
            </div>
            <div className={styles.text + selected}>{text}</div>
        </div>
    )
} 