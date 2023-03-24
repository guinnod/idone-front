import styles from './styles/_login-button.module.scss'
export const LoginButton = ({text}) => {
    return (
        <div className={styles.anchor}>
            <div className={styles.text}>{text}</div>
        </div>
    )
} 