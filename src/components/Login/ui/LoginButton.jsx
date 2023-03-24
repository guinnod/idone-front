import styles from '../../../styles/components/Login/ui/_login-button.module.scss'
export const LoginButton = ({text}) => {
    return (
        <div className={styles.anchor}>
            <div className={styles.text}>{text}</div>
        </div>
    )
} 