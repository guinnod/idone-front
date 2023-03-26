import styles from './_home.module.scss'
import colors from '../../assets/styles/colors.json'
import { Header } from '../../components/Header/Header'
import { Board } from '../../components/Board/Board'
import { Menu } from '../../components/Menu/Menu'
export const Home = () => {
    const boards = [{ name: 'Uni project', color: colors.pacific_blue }, { name: 'UI Kit', color: colors.main }, { name: 'Illustration', color: colors.camine }, { name: 'Design System', color: colors.purple }]
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
                                <Board key={key} text={e.name} color={e.color} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}