import {Box} from '@components/ui/Box'
import styles from './styles/_login-options.module.scss'

export const LoginOptions = () => {
    return (
        <Box className={styles.anchor}>
            <a href="">
                Don’t have an account? Sign Up
            </a>
            <a href="">
                Forgot password?
            </a>
        </Box>
    )
} 