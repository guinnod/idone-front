import styles from '../../styles/components/ui/_create-button.module.scss'
export const CreateButton = () => {
    return (
        <div className={styles.anchor}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10H15" stroke="#F7F7F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 15V5" stroke="#F7F7F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}