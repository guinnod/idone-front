import { Box } from '@components/ui/Box'
import styles from './styles/_content.module.scss'

export const Content = ({ svg, text, selected, onClick }) => {

    return (
        <Box className={styles.anchor + selected} onClick={onClick}>
            <div className={styles.icon}>
                <img src={svg} alt="svg" />
            </div>
            {text}
        </Box>
    ) 
} 