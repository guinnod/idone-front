import styles from './_loader.module.scss'
import coolGuy from '../../assets/icons/CoolGuy.svg'
import { Logo } from '../../components/Header/Logo'
export const Loader = () => {
    return (
        <div className={styles.anchor}>
            <Logo />
            <h1 className={styles.text}>Welcome to IDone!</h1>
            <img className={styles.icon} src={coolGuy} alt="cool guy" />
        </div>
    )
}