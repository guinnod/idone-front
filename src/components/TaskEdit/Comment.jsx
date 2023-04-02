import { List } from '@components/ui/List'
import { UserPhoto } from '@components/ui/UserPhoto'
import userPhoto from '@images/userPhoto.jpg'
import styles from './styles/_comment.module.scss'

export const Comment = ({ isAction }) => {
    let style = {}
    if (isAction) {
        style = {
            flexDirection: 'column', alignItems: 'flex-start'
        }
    }
    return (
        <section className={styles.anchor}>
            <UserPhoto src={userPhoto} width='40px'/>
            <List>
                <div className={styles.header} style={style}>
                    <h4>Emmanuel Rodes</h4>
                    <span>20 Mar 2021 at 05:15 PM</span>
                </div>
                {!isAction ?
                    <div className={styles.content}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore iste enim ex, quia molestiae aspernatur aliquam ad repellat maiores quam deleniti doloribus suscipit corrupti doloremque modi sed expedita quisquam.
                    </div>
                    : <></>}
            </List>
        </section>
    )
}