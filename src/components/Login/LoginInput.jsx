import styles from './styles/_login-input.module.scss'
export const LoginInput = ({ placeholder, type }) => {
    return (
        <div className={styles.anchor}>
            <label className={styles.label} htmlFor={type}>{placeholder}</label>
            <input className={styles.input} type={type} name={type} id={type} />
        </div>
    )
} 