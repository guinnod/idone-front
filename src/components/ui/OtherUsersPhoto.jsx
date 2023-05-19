import styles from './styles/_other-users-photo.module.scss'
import addIcon from '@icons/add.svg'
import { useDispatch } from 'react-redux';
import { tasksActions } from '@store/tasks';
export const OtherUsersPhoto = ({ amount, isAdd, onClick }) => {
    const dispatch = useDispatch();
    const change = () => {
        dispatch(tasksActions.change("PersonsCard"));
    }

    return (
        <div className={styles.anchor} onClick={onClick}>
            {isAdd ? <img src={addIcon} alt="add" /> : `+${amount}`}
        </div>
    )
}