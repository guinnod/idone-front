import styles from './styles/_loader.module.scss'
import coolGuy from '@icons/CoolGuy.svg'
import { Logo } from '../components/ui/Logo'
export const Loader = () => {
    return (
        <div className={styles.anchor}>
            <Logo />
            <h1 className={styles.text}>Welcome to IDone!</h1>
            <img className={styles.icon} src={coolGuy} alt="cool guy" />
        </div>
    )
}