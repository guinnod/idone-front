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
import {useEffect, useState} from "react";
import colors from "@styles/colors.json";

export const Tasks = () => {

    const isWindow = useSelector(state => state.tasks.isWindow);
    let st = {
        todo:[], other:[]
    }
    for (let i = 0; i < lists.length; i++) {
        if (lists[i].status == "todo") {
            console.log(lists[i])
            st.todo.push(lists[i])
        } else {
            st.other.push(lists[i])
        }
    }
    const [sts, sS] = useState({
        todo:[], other:[]
    });
    useEffect(()=>{

        sS(st)
    },[])

    return (
        <>
            <HeaderExtended />
            <section className={styles.anchor}>
                <Box className={styles.lists}>
                    <CardList  color={colors.azure} text={"To-do"} cards={sts.todo} />
                </Box>
                <Box className={styles.lists}>
                    <CardList color={colors.green} text={"Completed"} cards={sts.other} />
                </Box>
                <CardListAdd style={{ width: 250 }}>
                    Add new list
                </CardListAdd>
            </section>
            {isWindow == "TaskEdit" ? <TaskEdit /> : isWindow == "TaskView" ? <TaskView /> : isWindow == "PersonsCard" ? <PersonsCard /> : <></>}
        </>
    )
}