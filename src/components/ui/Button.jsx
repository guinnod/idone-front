import styles from './styles/_button.module.scss'
export const Button = ({ style, onClick, children, className }) => {
    return (
        <div className={`${styles.anchor} ${className}`} style={style} onClick={onClick}>
            {children}
        </div>
    )
} 