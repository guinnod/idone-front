import styles from './styles/_login.module.scss'
import colors from '@styles/colors.json'
import { Button } from '@ui/Button'
import { LoginInput } from './LoginInput'
import { LoginOptions } from './LoginOptions'
import { Logo } from '@components/ui/Logo'
import { Link } from 'react-router-dom'
import { List } from '@components/ui/List'


export const Login = ({ text, isForgot, placeholder }) => {
    return (
        <div className={styles.anchor}>
            <Logo />
            <h1 className={styles.text}>{text}</h1>
            <List gap={30}>
                <LoginInput placeholder='Your Email / Username' type="email" />
                <LoginInput placeholder={placeholder} type="password" />
                <LoginOptions isForgot={isForgot} />
                <Button style={{ background: colors.main, width: '500px', color: 'white' }}>
                    <Link to='/'>
                        {text}
                    </Link>
                </Button>
            </List>
        </div>
    )
}