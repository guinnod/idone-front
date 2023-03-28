import styles from './styles/_card-list.module.scss'
import { Card } from './Card';
import { CardListAdd } from './CardListAdd'
import { CardListHeader } from './CardListHeader'


export const CardList = ({ color, text, cards }) => {
    return (
        <div className={styles.anchor}>
            <CardListHeader color={color} text={text} />
            {cards ? cards.map((e, key) => {
                return (<Card key={key} name={e.name} color={e.color} value={e.value} comments={e.comments} />)
            }) : <></>}
            <CardListAdd text='Add new card' />
        </div>
    )
}