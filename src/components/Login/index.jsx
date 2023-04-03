import styles from './styles/_login.module.scss'
import { Button } from '@ui/Button'
import { LoginInput } from './LoginInput'
import { LoginOptions } from './LoginOptions'
import { Logo } from '@components/ui/Logo'


export const Login = ({ text, isForgot, placeholder }) => {
    return (
        <div className={styles.anchor}>
            <Logo />
            <h1 className={styles.text}>{text}</h1>
            <LoginInput placeholder='Your Email / Username' type="email"/>
            <LoginInput placeholder={placeholder} type="password"/>
            <LoginOptions isForgot={isForgot} />
            <Button>
                {text}
            </Button>
        </div>
    )
}