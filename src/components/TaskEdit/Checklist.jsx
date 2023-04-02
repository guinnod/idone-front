import styles from './styles/_checklist.module.scss'
import arrowCircleIcon from '@icons/arrow-circle.svg'
import trashIcon from '@icons/trash.svg'
import { Progress } from '@components/ui/Progress'
import colors from '@styles/colors.json'
import { Box } from '@components/ui/Box'
export const Checklist = () => {
    return (
        <section className={styles.anchor}>
            <Box style={{ width: '100%' }}>
                <h3>Checklist</h3>
                <Box gap={25}>
                    <Box className={styles.box}>
                        <img src={arrowCircleIcon} alt="arrow" />
                        <span>Hide checked items</span>
                    </Box>
                    <img src={trashIcon} alt="trash" />
                </Box>
            </Box>
            <div className={styles.progress}>
                <Box>
                    0% <Progress background={colors.gray_light} value={50} size={470} color={colors.azure} />
                </Box>
            </div>
        </section>
    )
}