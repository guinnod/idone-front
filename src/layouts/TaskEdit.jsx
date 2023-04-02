import styles from './styles/_task-edit.module.scss'
import userPhoto from '@images/userPhoto.jpg'
import shareIcon from '@icons/share.svg'
import arrowIcon from '@icons/arrow.svg'
import userIcon from '@icons/user-add.svg'
import calendarIcon from '@icons/calendar.svg'
import timerIcon from '@icons/timer.svg'
import { DescriptionInput } from '@components/TaskEdit/DescriptionInput'
import { TaskButton } from '@components/TaskEdit/TaskButton'
import { TaskDate } from '@components/TaskEdit/TaskDate'
import { OtherUsers } from '@ui/OtherUsers'
import { Box } from '@ui/Box'
import { Checklist } from '@components/TaskEdit/Checklist'
import { TaskCheck } from '@components/TaskEdit/TaskCheck'
import { Activity } from '@components/TaskEdit/Activity'
import { Window } from '@components/ui/Window'

export const TaskEdit = () => {
    const boxStyle = {
        position: 'absolute',
        top: 20,
        left: '50%'
    }
    return (
        <Window title='Name of the task'>
            <Box gap={20} style={boxStyle}>
                <img src={userIcon} alt="add person" />
                <img src={timerIcon} alt="timer" />
                <img src={calendarIcon} alt="calendar" />
            </Box>
            <section className={styles.anchor}>
                <section>
                    <Box gap={40}>
                        <TaskButton text='Planning' />
                        <OtherUsers users={[userPhoto, userPhoto]} limit={2} isAdd />
                    </Box>
                    <TaskDate date='20/03/2021' />
                    <DescriptionInput />
                    <Checklist />
                    <TaskCheck text='Set new password' />
                    <div className={styles.box}>
                        <Box>
                            <img src={arrowIcon} alt="arrow" />
                            <img src={shareIcon} alt="share" />
                        </Box>
                    </div>
                </section>
                <Activity />
            </section>
        </Window>
    )
}