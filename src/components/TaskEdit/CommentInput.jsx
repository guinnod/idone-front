import styles from './styles/_comment-input.module.scss'
import arrowIcon from '@icons/fi_arrow-up.svg'
import userPhoto from '@images/userPhoto.jpg'
import { UserPhoto } from '@ui/UserPhoto'
import { InputWithIcon } from '@components/ui/InputWithIcon'

export const CommentInput = ({onClick}) => {

    return (
        <div className={styles.anchor}>
            <div className={styles.photo}>
                <UserPhoto src={userPhoto}/>
            </div>
            <InputWithIcon onClick={onClick} id={"comment-input"} placeholder='Add a comment' src={arrowIcon} type='text'/>
        </div>
    )
}