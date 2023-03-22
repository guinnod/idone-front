import styles from '../../styles/components/ui/_gray-button.module.scss'
export const NotifyButton = () => {
    return (
        <div className={styles.anchor}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0165 2.42499C7.25816 2.42499 5.0165 4.66665 5.0165 7.42499V9.83332C5.0165 10.3417 4.79983 11.1167 4.5415 11.55L3.58316 13.1417C2.9915 14.125 3.39983 15.2167 4.48316 15.5833C8.07483 16.7833 11.9498 16.7833 15.5415 15.5833C16.5498 15.25 16.9915 14.0583 16.4415 13.1417L15.4832 11.55C15.2332 11.1167 15.0165 10.3417 15.0165 9.83332V7.42499C15.0165 4.67499 12.7665 2.42499 10.0165 2.42499Z" stroke="#181A1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M11.5579 2.66667C11.2996 2.59167 11.0329 2.53334 10.7579 2.5C9.95794 2.4 9.19128 2.45834 8.47461 2.66667C8.71628 2.05 9.31628 1.61667 10.0163 1.61667C10.7163 1.61667 11.3163 2.05 11.5579 2.66667Z" stroke="#181A1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.5166 15.8833C12.5166 17.2583 11.3916 18.3833 10.0166 18.3833C9.33327 18.3833 8.69993 18.1 8.24993 17.65C7.79993 17.2 7.5166 16.5667 7.5166 15.8833" stroke="#181A1B" stroke-width="1.5" stroke-miterlimit="10" />
            </svg>
        </div>
    )
}