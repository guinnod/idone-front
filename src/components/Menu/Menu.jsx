import { Content } from './Content'
import styles from './styles/_menu.module.scss'
import svg1 from '@icons/Group_4.svg'
import svg2 from '@icons/clipboard-tick.svg'
import svg3 from '@icons/Group_3.svg'
import {useEffect, useState} from 'react'
import { List } from '@components/ui/List'
import axios from "axios";
import {get} from "@api/index.js";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import colors from '@styles/colors.json'
export const Menu = () => {
    let navigate = useNavigate();
    const contents = [{ svg: svg1, text: 'Boards', href: '/' },
    { svg: svg2, text: 'My tasks', href: '/tasks' }]
    const [workspaces, sW] = useState([])
    useEffect(()=>{
        get({path: 'subject', isAuth: true})
            .then((res)=>{
                let sbs = res.data
                let works = []
                for(let i = 0; i < sbs.length; i++) {
                    works[i] = {svg: svg3, text: sbs[i].name}
                }
                sW(works)
            })
    },[])
    const location = useLocation()
    useEffect(()=> {
        
        if (location.pathname.includes('project')) {
            for (let i = 0; i < workspaces.length; i++) {
                if (location.pathname.replace('%20', ' ').includes(workspaces[i].text)) {
                    setSel(2+i);
                    return;
                }
            }
            return;
        }
        setSel(location.pathname.includes('tasks') ? 1 :  0);
    }, [workspaces])
    const [sel, setSel] = useState(0);
    return (
        <List gap={30}>
            <div>
                {contents.map((e, key) => {
                    let s = key === sel ? ' ' + styles.selected : ' '
                    return (
                        <Content onClick={() => { setSel(key); navigate(`${e.href}`);}} selected={s} svg={e.svg} text={e.text} key={key} />
                    )
                })}
            </div>
            <div>
                <div className={styles.text}>Workspaces</div>
                <div>
                    {workspaces.map((e, key) => {
                        let s = key + 2 === sel ? ' ' + styles.selected : ' '
                        return (
                            <Content onClick={() => { setSel(key + 2); window.location.href = `/project/${e.text}`}} svg={e.svg} text={e.text} key={key} selected={s} />
                        )
                    })}
                </div>
            </div>
            <div className={styles.add}>
                <Link style={{color: colors.gray_dark, fontSize: '18px'}} to={"/logout"}>Log out</Link>
            </div>
        </List>
    )
} 