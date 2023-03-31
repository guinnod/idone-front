import styles from './styles/_logo.module.scss'
import logoIcon from '@icons/logo_icon.svg'
export const Logo = () => {
    return (
        <div className={styles.anchor}>
            <img src={logoIcon} alt="logo" />
            <div className={styles.text}>On-Time</div>
        </div>
    )
}