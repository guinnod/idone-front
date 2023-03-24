import styles from '../../styles/components/CardList/_card-list.module.scss'
import { Card } from '../Card/Card';
import { CardListAdd } from './CardListAdd'
import { CardListHeader } from './CardListHeader'


export const CardList = () => {
    const cards = [1];
    return (
        <div className={styles.anchor}>
            <CardListHeader color={'blue'} text='Planning'/>
            {cards.map((e, key) => {
                return (<Card key={key} />)
            })}
            <CardListAdd />
        </div>
    )
}