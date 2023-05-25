import styles from './styles/_tasks.module.scss'
import { CardList } from '../components/CardList/CardList'
import { Header } from '../components/Header'
import { lists } from '../store/lists'
import { Box } from '@components/ui/Box'
import { CardListAdd } from '@components/CardList/CardListAdd'
import { useSelector } from 'react-redux'
import { TaskEdit } from '@layouts/TaskEdit'
import { TaskView } from '@layouts/TaskView'
import { PersonsCard } from '@layouts/PersonsCard'
import {useEffect, useState} from "react";
import colors from "@styles/colors.json";
import {get, post} from "@api/index.js";
import {useParams} from "react-router-dom";
import { TaskAdd } from '@layouts/TaskAdd'


export const AllTasks = () => {
    
    const isWindow = useSelector(state => state.tasks.isWindow);
    const [tasks, setTasks] = useState([]);
    
    
    const handleSetAddTaskGen = (status) => {
        setShowAddGen(true)
    }
    useEffect(()=>{
        get({path: `all-tasks`, isAuth: true})
            .then(res=>{
                const groupedData = res.data.reduce((acc, obj) => {
                    const key = Object.keys(obj)[0]; 
                    const value = obj[key]; 
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
    const [isInvite, setIsInvite] = useState(false);
    const[users, setUsers] = useState([]);
    useEffect(() => {
        get({ path: 'students', isAuth: true })
            .then(res => {
                const resOptions = res.data;
                const temp = [];

                resOptions.forEach(function (option) {
                    console.log(option)
                    temp.push({
                        value: option.email,
                        label: option.first_name + " " + option.last_name,
                        photo: `https://guinnodsdu.pythonanywhere.com${option.photo}`
                    })
                })
                setUsers(temp);
                console.log(temp);
            })

    }, [])
    
    
    return (
        <>
            <Header />
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
                                <CardList color={randomValue} text={e} cards={tasks[e]} />
                            </Box>
                        )
                    })
                }
            </section>
            { isWindow == "TaskEdit" ? <TaskEdit /> : isWindow == "TaskView" ? <TaskView /> : isWindow == "PersonsCard" ? <PersonsCard /> : <></>}
        </>
    )
}