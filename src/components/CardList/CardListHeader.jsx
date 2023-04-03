import styles from './styles/_card-list-header.module.scss'
import add from '@icons/add-gray.svg';
import options from '@icons/options.svg';
import { Box } from '@components/ui/Box';
export const CardListHeader = ({ color, text }) => {
    return (
        <Box className={styles.anchor}>
            <div className={styles.marker} style={{ background: color }}></div>
            {text}
            <Box>
                <img src={add} alt="add" />
                <img src={options} alt="options" />
            </Box>
        </Box>
    )
}