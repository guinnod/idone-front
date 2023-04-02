import styles from './styles/_window.module.scss'
import closeIcon from '@icons/ic_Close.svg'

export const Window = ({ title, children }) => {
    return (
        <div className={styles.anchor}>
            <div className={styles.header}>
                {title}
                <img src={closeIcon} alt="close" />
            </div>
            {children}
        </div>
    )
}