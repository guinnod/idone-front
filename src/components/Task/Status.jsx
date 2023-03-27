import styles from './styles/_status.module.scss'
export const Status = ({ status }) => {

    return (
        <div className={styles.anchor}>
            <div>
                STATUS
            </div>
            <div>
                {status}
            </div>
        </div>
    )
}