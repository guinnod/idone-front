import { UserPhoto } from '@components/ui/UserPhoto'
import styles from './styles/_activity.module.scss'
import userPhoto from '@images/userPhoto.jpg'
import { Comment } from '@components/TaskEdit/Comment'
import { List } from '@components/ui/List'
import { CommentInput } from './CommentInput'

export const Activity = ({comments, onClick}) => {
    return (
        <section className={styles.anchor} >
            <div>
            <h3>
                Activity
            </h3>
            <List gap={20} style={{ padding: '10px 0', overflowY: 'auto', maxHeight: '550px' }}>
                {comments?comments.map((e, key)=>{
                    return <Comment key={key} description={e.description} user_name={e.user_name} date={e.date} user_photo={e.user_photo}/>
                }):<></>}
            </List>
            </div>
            <section style={{position: 'static', justifySelf: 'flex-end'}}>
                <CommentInput onClick={onClick} id="comment-input2" styleIn={{width: '360px'}} style={{ margin: '0 20px', position: 'relative'}}/>
            </section>
        </section>
    )
}