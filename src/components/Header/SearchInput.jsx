import styles from './styles/_search-input.module.scss'
import search from '../../assets/icons/search-normal.svg'
export const SearchInput = () => {
    return (
        <div className={styles.anchor}>
            <img src={search} alt="svg" />
            <input type="search" placeholder='Search...' name="" id="" />
        </div>
    )
}