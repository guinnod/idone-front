import { Content } from './Content'
import styles from './styles/_menu.module.scss'
import svg1 from '../../assets/icons/Group_4.svg'
import svg2 from '../../assets/icons/clipboard-tick.svg'
import svg3 from '../../assets/icons/Group_3.svg'
import { useState } from 'react'
export const Menu = () => {
    const contents = [{ svg: svg1, text: 'Boards' },
    { svg: svg2, text: 'My tasks' }]
    const workspaces = [{ svg: svg3, text: 'soft enj' }]
    const [sel, setSel] = useState(0);
    return (
        <div className={styles.anchor}>
            {contents.map((e, key) => {
                let s = key === sel ? ' ' + styles.selected : ' '
                return (
                    <Content onClick={() => { setSel(key) }} selected={s} svg={e.svg} text={e.text} key={key} />
                )
            })}
            <div className={styles.text}>Workspaces</div>
            {workspaces.map((e, key) => {
                return (
                    <Content svg={e.svg} text={e.text} key={key} selected='' />
                )
            })}
            <div className={styles.add}>
                + Add new workspace
            </div>
        </div>
    )
} 