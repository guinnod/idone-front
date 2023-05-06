import { Content } from './Content'
import styles from './styles/_menu.module.scss'
import svg1 from '@icons/Group_4.svg'
import svg2 from '@icons/clipboard-tick.svg'
import svg3 from '@icons/Group_3.svg'
import {useEffect, useState} from 'react'
import { List } from '@components/ui/List'
import axios from "axios";
export const Menu = () => {

    const contents = [{ svg: svg1, text: 'Boards' },
    { svg: svg2, text: 'My tasks' }]
    const [workspaces, sW] = useState([{ svg: svg3, text: 'soft enj' }, { svg: svg3, text: 'soft enj' }])
    const headers = {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzMzU1MzE1LCJpYXQiOjE2ODMyNjg5MTUsImp0aSI6ImM3YzRjZjA1ODI1NDRjNGI5YmFhYjAzMTA0NDMyOThjIiwidXNlcl9pZCI6Mn0.ngBGP5cz151hD7K0LQzsPJHCxwfQng2gaYYGFNXoyWw`
    };
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/subject/', {headers})
            .then((res)=>{

                let sbs = res.data
                let works = []
                for(let i = 0; i < sbs.length; i++) {
                    works[i] = {svg: svg3, text: sbs[i].name}
                }
                sW(works)
            })
    },[])
    const [sel, setSel] = useState(0);
    return (
        <List gap={30}>
            <div>
                {contents.map((e, key) => {
                    let s = key === sel ? ' ' + styles.selected : ' '
                    return (
                        <Content onClick={() => { setSel(key) }} selected={s} svg={e.svg} text={e.text} key={key} />
                    )
                })}
            </div>
            <div>
                <div className={styles.text}>Workspaces</div>
                <div>
                    {workspaces.map((e, key) => {
                        let s = key + 2 === sel ? ' ' + styles.selected : ' '
                        return (
                            <Content onClick={() => { setSel(key + 2) }} svg={e.svg} text={e.text} key={key} selected={s} />
                        )
                    })}
                </div>
            </div>
            <div className={styles.add}>
                + Add new workspace
            </div>
        </List>
    )
} 