import styles from './styles/_task-status.module.scss'
export const TaskStatus = ({ status }) => {

    return (
        <div className={styles.anchor} style={{ background: 'rgba(89, 162, 45, 0.1)', color: '#59A22D' }}>
            {status}
        </div>
    )
}