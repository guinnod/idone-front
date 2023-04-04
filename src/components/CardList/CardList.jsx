import styles from './styles/_card-list.module.scss'
import colors from '@styles/colors.json'
import { Card } from './Card';
import { CardListAdd } from './CardListAdd'
import { CardListHeader } from './CardListHeader'
import { List } from '@components/ui/List';

export const CardList = ({ color, text, cards }) => {
    return (
        <List className={styles.anchor}>
            <CardListHeader color={color} text={text} />
            {cards ? cards.map((e, key) => {
                return (<Card key={key} name={e.name} color={e.color} value={e.value} comments={e.comments} users={e.users} />)
            }) : <></>}
            <CardListAdd style={{ color: colors.dark }}>
                Add new card
            </CardListAdd>
        </List>
    )
}