import styles from './styles/_tasks.module.scss'
import { CardList } from '../components/CardList/CardList'
import { HeaderExtended } from '../components/Header'
import { lists } from '../store/lists'
import { Menu } from '../components/Menu/Menu'
import { TaskView } from '../layouts/TaskView'


export const Tasks = () => {
    return (
        <>
            <HeaderExtended />
            <section className={styles.anchor}>
                <Menu />
                <div className={styles.lists}>
                    {lists ? lists.map((e, key) => {
                        return (
                            <CardList key={key} color={e.color} text={e.text} cards={e.cards} />
                        )
                    }) : <></>}
                </div>
            </section>
        </>
    )
}