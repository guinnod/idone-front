import { Box } from '@components/ui/Box'
import styles from './styles/_login-options.module.scss'

export const LoginOptions = ({ isForgot }) => {
    return (
        <Box className={styles.anchor}>
            <div>
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor='remember'>Remember me</label>
            </div>
            {isForgot ?
                <a>
                    Forgot password?
                </a>
                : <></>}
        </Box>
    )
} 