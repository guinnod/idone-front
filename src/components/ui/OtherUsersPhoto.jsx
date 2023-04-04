import styles from './styles/_other-users-photo.module.scss'
import addIcon from '@icons/add.svg'
import { useDispatch } from 'react-redux';
import { tasksActions } from '@store/tasks';
export const OtherUsersPhoto = ({ amount, isAdd }) => {
    const dispatch = useDispatch();
    const change = () => {
        dispatch(tasksActions.change("PersonsCard"));
    }

    return (
        <div className={styles.anchor} onClick={(e) => {
            e.stopPropagation()
            if (isAdd) {
                change()
            }
        }}>
            {isAdd ? <img src={addIcon} alt="add" /> : `+${amount}`}
        </div>
    )
}