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
import { useEffect, useState } from 'react'
import { get, post } from '@/api'

export const TaskEdit = ({ taskData, closeAction }) => {
    const boxStyle = {
        position: 'absolute',
        top: 20,
        left: '50%'
    }

    const [comments, setComments] = useState([]);

    useEffect(() => {
        get({ path: `add-comment/${taskData.project}/${taskData.pk}`, isAuth: true })
            .then(res => {
                setComments(res.data)
            })
    }, [taskData])
    const sendComment = () => {
        const commentText = document.getElementById("comment-input2").value
        if (commentText.length > 0) {
            post({ path: `add-comment/${taskData.project}/${taskData.pk}`, data: { description: commentText }, isAuth: true })
                .then(res => {
                    document.getElementById("comment-input2").value = ""
                    get({ path: `add-comment/${taskData.project}/${taskData.pk}`, isAuth: true })
                        .then(ress => {
                            setComments(ress.data)
                        })
                })
        }
    }
    const [subCount, setSubCount] = useState({
        all: taskData.subtask_set.length
    });
    useEffect(() => {
        let count = 0;
        taskData.subtask_set.forEach(e => {
            if (e.is_done) {
                count++;
            }
        })
        subCount.done = count;
        setSubCount(subCount);
        console.log(subCount);
    }, [])
    return (
        <Window title='Name of the task' closeAction={()=>{closeAction(); location.reload()}}>
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
                    <DescriptionInput id={"desc"} value={taskData.description} />
                    <Checklist subCount={subCount} />
                    {taskData.subtask_set ? taskData.subtask_set.map((e, key) => {
                        return (<TaskCheck onChange={() => {
                            post({ path: `set-subtask/${taskData.project}/${taskData.pk}`, data: { pk: e.pk, is_done: document.getElementById(`sub-input${key}`).checked}, isAuth: true })
                                .then(res => {
                                    
                                })
                        }} id={`sub-input${key}`} isDone={e.is_done} key={key} text={e.name} />)
                    }) : <></>}
                    <div className={styles.box}>
                        <Box>
                            <img src={arrowIcon} alt="arrow" />
                            <img src={shareIcon} alt="share" />
                        </Box>
                    </div>
                </section>
                <Activity onClick={sendComment} comments={comments} />
            </section>
        </Window>
    )
}