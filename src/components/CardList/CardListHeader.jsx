import styles from './styles/_card-list-header.module.scss'
import add from '@icons/add-gray.svg';
import options from '@icons/options.svg';
export const CardListHeader = ({ color, text }) => {
    return (
        <div className={styles.anchor}>
            <div className={styles.marker} style={{ background: color }}></div>
            {text}
            <div>
                <img src={add} alt="add" />
                <img src={options} alt="options" />
            </div>
        </div>
    )
}