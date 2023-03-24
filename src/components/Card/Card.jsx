import styles from '../../styles/components/Card/_card.module.scss'
import { OtherUsers } from '../Header/ui/OtherUsers'
import { CardOption } from './ui/CardOption'
import { CardProgress } from './ui/CardProgress'
import check from '../../assets/icons/fi_check-circle.svg'
export const Card = () => {

    return (
        <div className={styles.anchor}>
            <div className={styles.text}>Name of the task</div>
            <CardProgress value={50} />
            <CardOption data={'1/3'} svg={check}/>
            <OtherUsers />
        </div>
    )
}