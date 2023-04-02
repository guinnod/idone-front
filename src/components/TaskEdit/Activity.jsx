import { UserPhoto } from '@components/ui/UserPhoto'
import styles from './styles/_activity.module.scss'
import userPhoto from '@images/userPhoto.jpg'
import { Comment } from '@components/TaskEdit/Comment'
import { List } from '@components/ui/List'

export const Activity = () => {
    return (
        <section className={styles.anchor}>
            <h3>
                Activity
            </h3>
            <List gap={20} style={{ padding: '10px 0' }}>
                <Comment />
                <Comment isAction />
            </List>
            <section>
                <UserPhoto width={40} src={userPhoto} />
                <input type="text" name="" id="" placeholder='Write a comment...' />
            </section>
        </section>
    )
}