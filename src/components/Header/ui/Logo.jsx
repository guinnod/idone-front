import styles from '../../../styles/components/Header/ui/_logo.module.scss'
export const Logo = () => {
    return (
        <div className={styles.anchor}>
            <div className={styles.item}>
                <div>
                    <div>
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 1.25L5.875 10.875L1.5 6.5" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={styles.text}>IDone</div>
        </div>
    )
}