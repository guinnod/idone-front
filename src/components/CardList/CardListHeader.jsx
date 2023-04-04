import styles from './styles/_card-list-header.module.scss'
import add from '@icons/add-gray.svg';
import options from '@icons/options.svg';
import { Box } from '@components/ui/Box';
import { useDispatch } from 'react-redux';
import { tasksActions } from '@store/tasks';
export const CardListHeader = ({ color, text }) => {
    const dispatch = useDispatch();
    const change = () => {
        dispatch(tasksActions.change("TaskEdit"));
    }

    return (
        <Box className={styles.anchor}>
            <div className={styles.marker} style={{ background: color }}></div>
            {text}
            <Box>
                <img src={add} alt="add" onClick={change} />
                <img src={options} alt="options" />
            </Box>
        </Box>
    )
}