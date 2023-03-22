import styles from '../../styles/components/ui/_gray-button.module.scss'
export const SideButton = () => {
    return (
        <div className={styles.anchor}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 5.83334H17.5" stroke="#181A1B" stroke-width="1.5" stroke-linecap="round" />
                <path d="M2.5 10H17.5" stroke="#181A1B" stroke-width="1.5" stroke-linecap="round" />
                <path d="M2.5 14.1667H17.5" stroke="#181A1B" stroke-width="1.5" stroke-linecap="round" />
            </svg>
        </div>
    )
}