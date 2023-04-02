import styles from './styles/_task-check.module.scss'
import userEditIcon from '@icons/user-edit.svg'
import clockIcon from '@icons/clock.svg'
import optionsIcon from '@icons/options.svg'
import { Box } from '@components/ui/Box'
export const TaskCheck = ({ text }) => {
    return (
        <div className={styles.anchor}>
            <Box >
                <Box>
                    <input type="checkbox" name={text} id={text} />
                    <label htmlFor={text}>{text}</label>
                </Box>
                <Box gap={20}>
                    <img src={clockIcon} alt="clock" />
                    <img src={userEditIcon} alt="user edit" />
                    <img src={optionsIcon} alt="options" />
                </Box>
            </Box>
        </div>
    )
}