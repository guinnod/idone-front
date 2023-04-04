import styles from './styles/_home.module.scss'
import colors from '@styles/colors.json'
import { Header } from '../components/Header'
import { Board } from '../components/Board/Board'
import { Menu } from '../components/Menu/Menu'
import { Link } from 'react-router-dom'
export const Home = () => {
    const boards = [{ name: 'Uni project', color: colors.blue_pacific }, { name: 'UI Kit', color: colors.main }, { name: 'Illustration', color: colors.red }, { name: 'Design System', color: colors.purple }]
    return (
        <div className={styles.anchor}>
            <Header />
            <div className={styles.content}>
                <Menu />
                <div>
                    <h1 className={styles.text}>My boards</h1>
                    <div className={styles.boards}>
                        {boards.map((e, key) => {
                            return (
                                <Link to='tasks'>
                                    <Board key={key} text={e.name} color={e.color} />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}