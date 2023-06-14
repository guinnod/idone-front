import {Box} from '@components/ui/Box'
import styles from './styles/_login-options.module.scss'
import { Link } from 'react-router-dom'

export const LoginOptions = () => {
    return (
        <Box className={styles.anchor}>
            <Link to={"/register"}>
                Don’t have an account? Sign Up
            </Link>
            <Link to={"/forgot"}>
                Forgot password?
            </Link>
        </Box>
    )
} 

export const RegisterOptions = () => {
    return (
        <Box className={styles.anchor}>
            <Link to={"/login"}>
                Already have an account? Sign In
            </Link>
        </Box>
    )
} 