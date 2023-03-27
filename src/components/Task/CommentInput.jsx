import styles from './styles/_task-comment.module.scss'
import arrowIcon from '../../assets/icons/fi_arrow-up.svg'
import { UserPhoto } from '../Header/UserPhoto'

export const CommentInput = ({ status }) => {

    return (
        <div className={styles.anchor}>
            <UserPhoto />
            <input type="text" placeholder='Add a comment'/>
            <img src={arrowIcon} alt="" />
        </div>
    )
}