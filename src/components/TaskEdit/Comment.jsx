import { List } from '@components/ui/List'
import { UserPhoto } from '@components/ui/UserPhoto'
import userPhoto from '@images/userPhoto.jpg'
import styles from './styles/_comment.module.scss'

export const Comment = ({ isAction, user_name, date, description, user_photo }) => {
    let style = {}
    if (isAction) {
        style = {
            flexDirection: 'column', alignItems: 'flex-start'
        }
    }
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        const formattedDate = date.toLocaleString('en-US', options).replace(/,/g, '');
        const period = date.getHours() >= 12 ? 'PM' : 'AM';
      
        return formattedDate;
      }
      
      
    return (
        <section className={styles.anchor}>
            <UserPhoto src={`http://127.0.0.1:8000${user_photo}`} width='40px'/>
            <List>
                <div className={styles.header} style={style}>
                    <h4>{user_name}</h4>
                    <span>{formatDate(date)}</span>
                </div>
                {!isAction ?
                    <div className={styles.content}>
                        {description}
                         </div>
                    : <></>}
            </List>
        </section>
    )
}