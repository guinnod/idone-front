import styles from './styles/_login-password.module.scss'
export const LoginInput = ({ placeholder }) => {
    return (
        <div className={styles.anchor}>
            <label className={styles.label} htmlFor='email'>{placeholder}</label>
            <input className={styles.input} type="email" name="email" id="email" />
        </div>
    )
} 