import styles from './styles/_card-list-add.module.scss'
import add from '@icons/add-gray.svg';
import { Button } from '@components/ui/Button';
import { useDispatch } from 'react-redux';
import { tasksActions } from '@store/tasks';

export const CardListAdd = ({ children, style }) => {

    const dispatch = useDispatch();
    const change = () => {
        if (children == "Add new card") {
            dispatch(tasksActions.change("TaskEdit"));
        }
    }
    return (
        <Button className={styles.anchor} style={style} onClick={change}>
            <img src={add} alt="add" />
            {children}
        </Button>
    )
}