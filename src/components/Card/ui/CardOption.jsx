import styles from '../../../styles/components/Card/ui/_card-option.module.scss'

export const CardOption = ({ data, svg }) => {
    return (
        <div className={styles.anchor}>
            <div className={styles.data}>{data}</div>
            <img src={svg} />
        </div>
    )
}