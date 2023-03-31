import styles from './styles/_checklist.module.scss'
import arrowCircleIcon from '@icons/arrow-circle.svg'
import trashIcon from '@icons/trash.svg'
import { Progress } from '@components/ui/Progress'

export const Checklist = () => {
    return (
        <section className={styles.anchor}>
            <section>
                <h3>Checklist</h3>
                <div>
                    <div className={styles.box}>
                        <img src={arrowCircleIcon} alt="arrow" />
                        Hide checked items
                    </div>
                    <img src={trashIcon} alt="trash" />
                </div>
            </section>
            <section className={styles.progress}>
                0% <Progress value={50} color='blue'/>
            </section>
        </section>
    )
}