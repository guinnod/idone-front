import styles from './styles/_button.module.scss'
export const Button = ({ style, onClick, children }) => {
    return (
        <div className={styles.anchor} style={style} onClick={onClick}>
            {children}
        </div>
    )
} 