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
import {get} from "@api/index.js";
import {useParams} from "react-router-dom";

export const Tasks = () => {
    const { id } = useParams();
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
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{

        sS(st)
        get({path: `task/${id}`, isAuth: true})
            .then(res=>{
                const groupedData = res.data.reduce((acc, obj) => {
                    const key = Object.keys(obj)[0]; // Get the key of the object
                    const value = obj[key]; // Get the value of the object
                    if (acc[key]) {
                        acc[key].push(value);
                    } else {
                        acc[key] = [value];
                    }
                    return acc;
                }, {});
                console.log(groupedData)
                setTasks(groupedData)
            })
    },[])

    return (
        <>
            <HeaderExtended />
            <section className={styles.anchor}>
                {
                    Object.keys(tasks).map((e, key) => {
                        let keys = Object.keys(colors);
                        keys = keys.filter(key=> {return key==='main' || key === 'azure' || key === 'red' || key === 'blue_pacific' || key === 'purple' || key === 'dark'})
                        console.log(keys)
                        const randomKey = keys[Math.floor(Math.random() * keys.length)];
                        const randomValue = colors[randomKey];
                        return(
                            <Box className={styles.lists} key={key}>
                                <CardList  color={randomValue} text={e} cards={tasks[e]} />
                            </Box>
                        )
                    })
                }
                <CardListAdd style={{ width: 250 }}>
                    Add new list
                </CardListAdd>
            </section>
            {isWindow == "TaskEdit" ? <TaskEdit /> : isWindow == "TaskView" ? <TaskView /> : isWindow == "PersonsCard" ? <PersonsCard /> : <></>}
        </>
    )
}