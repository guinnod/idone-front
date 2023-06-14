import styles from './styles/_home.module.scss'
import colors from '@styles/colors.json'
import { Header } from '@Header/index.jsx'
import { Board } from '@Board/Board.jsx'
import { Menu } from '@Menu/Menu.jsx'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "@store/tasks.jsx";
import { AddProject } from "@layouts/AddProject";
import { useEffect, useState } from "react";
import { get } from "@api/index.js";
import { Button } from '@components/ui/Button'
import add_styles from '@components/CardList/styles/_card-list-add.module.scss'

export const Project = () => {
    const { name } = useParams()
    const change = () => {
        setIsAddWindow(true)
    }
    const isWindow = useSelector(state => state.tasks.isWindow)
    const [isAddWindow, setIsAddWindow] = useState(false)
    useEffect(() => {
        get({ path: `users-project/${name}`, isAuth: true })
            .then(res => {
                const list = res.data;
                const arr = []
                list.forEach(list => {
                    let keys = Object.keys(colors);

                    keys = keys.filter(key => { return key === 'main' || key === 'azure' || key === 'red' || key === 'blue_pacific' || key === 'purple' || key === 'dark' })
                    const randomKey = keys[Math.floor(Math.random() * keys.length)];
                    const randomValue = colors[randomKey];
                    arr.push({ name: list.name, color: randomValue, id: list.id })
                })
                setBoards(arr);
            })
            .catch(err => {
                alert(err.response.data)
            })
    }, [])
    const [boards, setBoards] = useState([]);
    const [menu, setMenu] = useState(true);
    return (
        <>
            <div >
                <Header menu={menu} menuAction={() => { setMenu(prev => !prev) }} pluseAction={change} />
                <div className={styles.content}>
                    {
                        menu ? <Menu /> : <></>
                    }
                    <div>
                        <h1 className={styles.text}>My boards</h1>
                        <div className={styles.boards}>
                            {boards.map((e, key) => {
                                return (
                                    <Link onClick={() => { window.location.href = `/tasks/${e.id}` }} key={key} to={`tasks/${e.id}`}>
                                        <Board key={key} text={e.name} color={e.color} />
                                    </Link>
                                )
                            })}
                            <div style={{ height: '110px', paddingTop: '12.5px' }}>
                                <Button className={add_styles.anchor} style={{ padding: ' 0 20px' }}>
                                    <div onClick={change}> + Add new project</div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isAddWindow ? <AddProject setOpener={setIsAddWindow} /> : <></>}
        </>
    )
}