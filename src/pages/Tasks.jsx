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
import {get, post} from "@api/index.js";
import {useParams} from "react-router-dom";
import { TaskAdd } from '@layouts/TaskAdd'


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
    const [addTask, setAddTask] = useState({
        project_id: id
    });
    const [showAdd, setShowAdd] = useState(false)
    const handleSetAddTask = (status) => {
        if (showAdd) {
            addTask.show = false;
            addTask.status = false 
        } else {
            setShowAdd(true)
            addTask.status = status;
            console.log(status);
        }
        setAddTask(addTask)
    }
    const [showAddGen, setShowAddGen] = useState(false)
    const handleSetAddTaskGen = (status) => {
        setShowAddGen(true)
    }
    useEffect(()=>{
        get({path: `project/${id}`, isAuth: true}).then(res=>setPName(res.data.name))
        sS(st)
        get({path: `task/${id}`, isAuth: true})
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
                        photo: `http://127.0.0.1:8000${option.photo}`
                    })
                })
                setUsers(temp);
                console.log(temp);
            })

    }, [])
    const [project_users, setProjectUsers] = useState([])
    useEffect(() => {
        
        post({ path: 'project-users', data: {project_id: id}, isAuth: true })
            .then(res => {
                const resOptions = res.data;
                const temp = [];

                resOptions.forEach(function (option) {
                    option.photo = `http://127.0.0.1:8000${option.photo}`;
                    temp.push(
                        option
                    )
                })
                setProjectUsers(temp);
                console.log(temp);
            })

    }, [])
    const add_person = () => {
        const data = []
        console.log();
        [...document.getElementsByClassName('add_user_to_project')].forEach(e=>{
            if (e.checked) {
                data.push(e.value)
            }
        })
        console.log(data);
        post({path: 'add-user-project', isAuth: true, data: {project_id: id, users: data}})
        .then(res=>{
            
        })
        .catch(err=>alert(err.response.data))
    }
    const[p_name, setPName] = useState([])
    const[isTaskDetail, setIsTaskDetail] = useState(false);
    const[taskData, setTaskData] = useState({});
    const handleSetTask = (task)=>{
        console.log(task);
        get({path: `task-detail/${id}/${task.id}`, isAuth: true})
        .then(res=>{console.log(res.data); setTaskData(res.data)})
        setIsTaskDetail(true);
    }
    const[isTaskEdit, setIsTaskEdit] = useState(false);
    const openTaskEdit = () => {
        setIsTaskDetail(false);
        setIsTaskEdit(true);
    }
    return (
        <>
            <HeaderExtended name={p_name} setValue={()=>{setIsInvite(true)}} users={project_users.map(e=>e.photo)}/>
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
                                <CardList handleSetTask={handleSetTask} handleSetAddTask={handleSetAddTask} addTask={addTask} color={randomValue} text={e} cards={tasks[e]} />
                            </Box>
                        )
                    })
                }
                <CardListAdd style={{ width: 250 }} handleSetAddTask={handleSetAddTaskGen}>
                    Add new list
                </CardListAdd >
            </section>
            {isTaskEdit ? <TaskEdit project_users={users} closeAction={()=>{setIsTaskEdit(false)}} taskData={taskData}/> : isTaskDetail ? <TaskView editTask={openTaskEdit} p_name={p_name} closeAction={()=>{setIsTaskDetail(false)}} taskData={taskData}/> : isInvite ? 
            <PersonsCard onSubmit={()=>{add_person()}} className={'add_user_to_project'} closeAction={()=>{setIsInvite(false)}} users={users}/> : showAdd ? <TaskAdd closeAction={setShowAdd} addTask={addTask}/> : showAddGen ?
             <TaskAdd isNewStatus addTask={{project_id: id}} closeAction={setShowAddGen}/> : isWindow == "TaskEdit" ? <TaskEdit /> : isWindow == "TaskView" ? <TaskView /> : isWindow == "PersonsCard" ? <PersonsCard /> : <></>}
        </>
    )
}