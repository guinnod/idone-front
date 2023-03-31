import { DescriptionInput } from '@components/Task/DescriptionInput'
import { TaskButton } from '@components/Task/TaskButton'
import { TaskDate } from '@components/Task/TaskDate'
import { AddTaskHeader } from '@Task/AddTaskHeader'
import { OtherUsers } from '@components/Header/OtherUsers'
import styles from './styles/_add-task.module.scss'
import userPhoto from '@images/userPhoto.jpg'
import shareIcon from '@icons/share.svg'
import arrowIcon from '@icons/arrow.svg'
import { UserPhoto } from '@components/Header/UserPhoto'

export const AddTask = () => {
    return (
        <div className={styles.anchor}>
            <AddTaskHeader />
            <section className={styles.content}>
                <section>
                    <div className={styles.hbox}>
                        <TaskButton text='Planning' />
                        <OtherUsers users={[userPhoto, userPhoto]} limit={2} isAdd />
                    </div>
                    <TaskDate date='20/03/2021' />
                    <DescriptionInput />
                    <div className={styles.box}>
                        <img src={arrowIcon} alt="arrow" />
                        <img src={shareIcon} alt="share" />
                    </div>
                </section>
                <section className={styles.activity}>
                    <h3>
                        Activity
                    </h3>
                    <section>
                        <UserPhoto src={userPhoto}/>
                        <input type="text" name="" id="" />
                    </section>
                </section>
            </section>
        </div>
    )
}