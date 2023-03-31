import styles from './styles/_comment-input.module.scss'
import arrowIcon from '@icons/fi_arrow-up.svg'
import { UserPhoto } from '../ui/UserPhoto'

export const CommentInput = () => {

    return (
        <div className={styles.anchor}>
            <div className={styles.photo}>
                <UserPhoto />
            </div>
            <div className={styles.area}>
                <input type="text" placeholder='Add a comment' />
                <img src={arrowIcon} alt="arrow" />
            </div>
        </div>
    )
}