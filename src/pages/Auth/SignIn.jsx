import styles from './_auth.module.scss'
import { Logo } from '../../components/Header/Logo'
import { LoginButton } from '../../components/Login/LoginButton'
import { LoginInput } from '../../components/Login/LoginInput'
import { LoginOptions } from '../../components/Login/LoginOptions'
import { LoginPassword } from '../../components/Login/LoginPassword'
export const SignIn = () => {
    return (
        <div className={styles.anchor}>
            <Logo />
            <h1 className={styles.text}>Sign in</h1>
            <LoginInput placeholder='Your Email / Username' />
            <LoginPassword placeholder='Enter password' />
            <LoginOptions />
            <LoginButton text='Sign in' />
        </div>
    )
}