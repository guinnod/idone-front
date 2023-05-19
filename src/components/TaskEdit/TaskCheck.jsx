import styles from './styles/_task-check.module.scss'
import userEditIcon from '@icons/user-edit.svg'
import clockIcon from '@icons/clock.svg'
import optionsIcon from '@icons/options.svg'
import { Box } from '@components/ui/Box'
export const TaskCheck = ({ text, isDone, id, onChange }) => {
    return (
        <div className={styles.anchor}>
            <Box >
                <Box>
                    <input onChange={onChange} defaultChecked={isDone} type="checkbox" name={text} id={id} />
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