import {Box} from '@components/ui/Box'
import styles from './styles/_login-options.module.scss'

export const LoginOptions = () => {
    return (
        <Box className={styles.anchor}>
            <a href="http://localhost:5173/register">
                Don’t have an account? Sign Up
            </a>
            <a href="http://localhost:5173/forgot">
                Forgot password?
            </a>
        </Box>
    )
} 