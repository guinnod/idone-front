import styles from './styles/_search-input.module.scss'
import searchIcon from '@icons/search-normal.svg'
export const SearchInput = () => {
    return (
        <div className={styles.anchor}>
            <img src={searchIcon} alt="search" />
            <input type="search" placeholder='Search...' name="search_header" id="search_header" />
        </div>
    )
}