import styles from './styles/_card-list-add.module.scss'
import add from '../../assets/icons/add-gray.svg';

export const CardListAdd = ({text}) => {
    return (
        <div className={styles.anchor}>
            <div>
                <img src={add} alt="add" />
                <div className={styles.text}>
                    {text}
                </div>
            </div>
        </div>
    )
}