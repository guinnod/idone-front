import styles from './styles/_tasks.module.scss'
import { CardList } from '../components/CardList/CardList'
import { HeaderExtended } from '../components/Header'
import { lists } from '../store/lists'
import { Box } from '@components/ui/Box'
import { CardListAdd } from '@components/CardList/CardListAdd'
import { useSelector } from 'react-redux'
import { TaskEdit } from '@layouts/TaskEdit'
import { TaskView } from '@layouts/TaskView'
import { PersonsCard } from '@layouts/PersonsCard'


export const Tasks = () => {

    const isWindow = useSelector(state => state.tasks.isWindow);

    return (
        <>
            <HeaderExtended />
            <section className={styles.anchor}>
                <Box className={styles.lists}>
                    {lists ? lists.map((e, key) => {
                        return (
                            <CardList key={key} color={e.color} text={e.text} cards={e.cards} />
                        )
                    }) : <></>}
                    <CardListAdd style={{ width: 250 }}>
                        Add new list
                    </CardListAdd>
                </Box>
            </section>
            {isWindow == "TaskEdit" ? <TaskEdit /> : isWindow == "TaskView" ? <TaskView /> : isWindow == "PersonsCard" ? <PersonsCard /> : <></>}
        </>
    )
}