import styles from './styles/_login.module.scss'
import { LoginButton } from './LoginButton'
import { LoginInput } from './LoginInput'
import { LoginOptions } from './LoginOptions'

export const Login = ({ text, isForgot, placeholder }) => {
    return (
        <div className={styles.anchor}>
            <Logo />
            <h1 className={styles.text}>{text}</h1>
            <LoginInput placeholder='Your Email / Username' type="email"/>
            <LoginInput placeholder={placeholder} type="password"/>
            <LoginOptions isForgot={isForgot} />
            <LoginButton text={text} />
        </div>
    )
}