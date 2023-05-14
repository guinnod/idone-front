import styles from './styles/_card-list.module.scss'
import colors from '@styles/colors.json'
import { Card } from './Card';
import { CardListAdd } from './CardListAdd'
import { CardListHeader } from './CardListHeader'
import { List } from '@components/ui/List';
import calculateProgress from "@utils/calculateProgress.js";

export const CardList = ({ color, text, cards }) => {
    return (
        <List className={styles.anchor}>
            <CardListHeader color={color} text={text} />
            {cards ? cards.map((e, key) => {
                return (<Card key={key} name={e.name} value={calculateProgress(e.all_done_subtasks, e.all_subtasks)} comments={e.comments} users={e.project_users} />)
            }) : <></>}
            <CardListAdd style={{ color: colors.dark }}>
                Add new card
            </CardListAdd>
        </List>
    )
}