import {Box} from '@components/ui/Box'
import styles from './styles/_login-options.module.scss'

export const LoginOptions = () => {
    return (
        <Box className={styles.anchor}>
            <a href="https://on-time-front.vercel.app/register">
                Don’t have an account? Sign Up
            </a>
            <a href="https://on-time-front.vercel.app/forgot">
                Forgot password?
            </a>
        </Box>
    )
} 