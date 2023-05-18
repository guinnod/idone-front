import { Window } from '@components/ui/Window'
import { CommentInput } from '../components/TaskEdit/CommentInput'
import { TaskComment } from '../components/TaskView/TaskComment'
import { TaskData } from '../components/TaskView/TaskData'
import { TaskDescription } from '../components/TaskView/TaskDescription'
import { TaskMarker } from '../components/TaskView/TaskMarker'
import { TaskName } from '../components/TaskView/TaskName'
import styles from './styles/_task-view.module.scss'
import { get, post } from '@/api'
import { useEffect, useState } from 'react'

export const TaskView = ({taskData, closeAction, p_name}) => {
    const [comments, setComments] = useState([]);
    
useEffect(()=>{
    get({path: `add-comment/${taskData.project}/${taskData.pk}`, isAuth: true})
    .then(res=>{
        setComments(res.data)
    })
}, [taskData])
    const sendComment = () => {
        const commentText = document.getElementById("comment-input").value
        if (commentText.length > 0) {
            post({path: `add-comment/${taskData.project}/${taskData.pk}`, data: {description: commentText}, isAuth: true})
            .then(res=>{
                
            })
        }
    } 
    return (
        <Window title={<TaskMarker />} closeAction={closeAction}>
            <section className={styles.anchor} onClick={(e) => { e.stopPropagation() }}>
                <TaskName date={taskData.date} name={taskData.name} author={taskData.author}/>
                <TaskData date={taskData.date} status={taskData.status} users={taskData.users}/>
                <TaskDescription description={taskData.description}/>
                <div>
                    <h4>Comments ({comments.length??0})</h4>
                    {comments.length>0?<TaskComment project={p_name} author={comments[0].user} currentDate={comments[0].date} description={comments[0].description}/>:<></>}

                </div>
                <CommentInput onClick={sendComment}/>
            </section>
        </Window>
    )
}