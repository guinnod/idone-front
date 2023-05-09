import styles from './styles/_window.module.scss'
import closeIcon from '@icons/ic_Close.svg'
import { tasksActions } from '@store/tasks'
import { useDispatch } from 'react-redux'

export const Window = ({ title, children }) => {
    const dispatch = useDispatch();
    const change = () => {
        dispatch(tasksActions.change("RETURN"));
    }
    return (
        <div className={styles.root}>
            <div className={styles.anchor} onClick={(e) => { e.stopPropagation() }}>
                <div className={styles.header} >
                    {title}
                    <img src={closeIcon} alt="close" style={{cursor: 'pointer'}} onClick={change} />
                </div>
                {children}
            </div>
        </div>
    )
}