import styles from '../../styles/components/ui/_search-input.module.scss'
export const SearchInput = () => {
    return (
        <div className={styles.anchor}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.66662 14.0003C11.1644 14.0003 13.9999 11.1647 13.9999 7.66692C13.9999 4.16912 11.1644 1.33359 7.66662 1.33359C4.16881 1.33359 1.33328 4.16912 1.33328 7.66692C1.33328 11.1647 4.16881 14.0003 7.66662 14.0003Z" stroke="#181A1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.6666 14.6669L13.3333 13.3336" stroke="#181A1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <input type="search" placeholder='Search...' name="" id="" />
        </div>
    )
}