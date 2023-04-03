import { Box } from '@components/ui/Box'
import styles from './styles/_card-option.module.scss'

export const CardOption = ({ data, svg }) => {
    return (
        <Box className={styles.anchor}>
            <div className={styles.data}>{data}</div>
            <img src={svg} />
        </Box>
    )
}