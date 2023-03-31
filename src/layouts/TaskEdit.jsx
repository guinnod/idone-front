import styles from './styles/_task-edit.module.scss'
import { DescriptionInput } from '@components/TaskEdit/DescriptionInput'
import { TaskButton } from '@components/TaskEdit/TaskButton'
import { TaskDate } from '@components/TaskEdit/TaskDate'
import { TaskEditHeader } from '@components/TaskEdit/TaskEditHeader'
import { OtherUsers } from '@ui/OtherUsers'
import userPhoto from '@images/userPhoto.jpg'
import shareIcon from '@icons/share.svg'
import arrowIcon from '@icons/arrow.svg'
import { UserPhoto } from '@ui/UserPhoto'
import { Checklist } from '@components/TaskEdit/Checklist'
import { TaskCheck } from '@components/TaskEdit/TaskCheck'

export const TaskEdit = () => {
    return (
        <div className={styles.anchor}>
            <TaskEditHeader />
            <section className={styles.content}>
                <section>
                    <div className={styles.hbox}>
                        <TaskButton text='Planning' />
                        <OtherUsers users={[userPhoto, userPhoto]} limit={2} isAdd />
                    </div>
                    <TaskDate date='20/03/2021' />
                    <DescriptionInput />
                    <Checklist />
                    <TaskCheck text='Set new password' />
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