import styles from './styles/_home.module.scss'
import colors from '@styles/colors.json'
import { Header } from '@Header/index.jsx'
import { Board } from '@Board/Board.jsx'
import { Menu } from '@Menu/Menu.jsx'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {tasksActions} from "@store/tasks.jsx";
import {AddProject} from "@layouts/AddProject";
import {useEffect, useState} from "react";
import {get} from "@api/index.js";
export const Home = () => {
    const dispatch = useDispatch();
    const change = () => {
        setIsAddWindow(true)
        dispatch(tasksActions.change("AddProject"));
    }
    const isWindow = useSelector(state => state.tasks.isWindow)
    const [isAddWindow, setIsAddWindow] = useState(false)
    useEffect(()=>{
        get({path:'project', isAuth: true})
            .then(res=> {
                const list = res.data;
                const arr = []
                list.forEach(list => {
                    let keys = Object.keys(colors);

                    keys = keys.filter(key=> {return key==='main' || key === 'azure' || key === 'red' || key === 'blue_pacific' || key === 'purple' || key === 'dark'})
                    console.log(keys)
                    const randomKey = keys[Math.floor(Math.random() * keys.length)];
                    const randomValue = colors[randomKey];
                    arr.push({name: list.name, color: randomValue, id: list.id})
                })
                setBoards(arr);
            })
            .catch(err=> {
                alert(err.response.data)
            })
    }, [])
    const [boards, setBoards] = useState([{ name: 'Uni project', color: colors.blue_pacific }, { name: 'UI Kit', color: colors.main }, { name: 'Illustration', color: colors.red }, { name: 'Design System', color: colors.purple }]);
    return (
        <>
        <div >
            <Header />
            <div className={styles.content}>
                <Menu />
                <div>
                    <h1 className={styles.text}>My boards</h1>
                    <div className={styles.boards}>
                        {boards.map((e, key) => {
                            return (
                                <Link to={`tasks/${e.id}`}>
                                    <Board key={key} text={e.name} color={e.color} />
                                </Link>
                            )
                        })}
                        <div onClick={change}>Add new project</div>
                    </div>
                </div>
            </div>
        </div>
            {isAddWindow?<AddProject setOpener={setIsAddWindow}/>:<></>}
        </>
    )
}