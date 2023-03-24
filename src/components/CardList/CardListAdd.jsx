import styles from '../../styles/components/CardList/_card-list-add.module.scss'
import add from '../../assets/icons/add-gray.svg';

export const CardListAdd = () => {
    return (
        <div className={styles.anchor}>
            <div>
                <img src={add} alt="add" />
                <div className={styles.text}>
                    Add new card
                </div>
            </div>
        </div>
    )
}