import styles from './styles/_task-check.module.scss'
import userEditIcon from '@icons/user-edit.svg'
import clockIcon from '@icons/clock.svg'
import optionsIcon from '@icons/options.svg'
export const TaskCheck = ({ text }) => {
    return (
        <div className={styles.anchor}>
            <div>
                <input type="checkbox" name={text} id={text} />
                {text}
            </div>
            <div>
                <img src={clockIcon} alt="clock" />
                <img src={userEditIcon} alt="user edit" />
                <img src={optionsIcon} alt="options" />
            </div>
        </div>
    )
}