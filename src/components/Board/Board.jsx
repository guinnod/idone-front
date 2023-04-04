import { List } from '@components/ui/List'
import styles from './styles/_board.module.scss'
import colors from '@styles/colors.json'
export const Board = ({ text, color }) => {
    return (
        <div className={styles.anchor}>
            <List gap={20} style={{color: colors.dark}}>
                <div className={styles.item} style={{ background: color }}></div>
                {text}
            </List>
        </div>
    )
} 