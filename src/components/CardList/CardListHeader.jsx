import styles from './styles/_card-list-header.module.scss'
import add from '../../assets/icons/add-gray.svg';
import options from '../../assets/icons/options.svg';
export const CardListHeader = ({ color, text }) => {
    return (
        <div className={styles.anchor}>
            <div className={styles.marker} style={{background: color}}></div>
            <div className={styles.text}>
                {text}
            </div>
            <div>
                <img src={add} alt="add" />
                <img src={options} alt="options" />
            </div>
        </div>
    )
}