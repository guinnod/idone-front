import styles from './styles/_comment-input.module.scss'
import arrowIcon from '@icons/fi_arrow-up.svg'
import userPhoto from '@images/userPhoto.jpg'
import { UserPhoto } from '@ui/UserPhoto'
import { InputWithIcon } from '@components/ui/InputWithIcon'
import { useState } from 'react'
import { get } from '@/api'

export const CommentInput = ({onClick, id, style, styleIn, isDiv}) => {
    
    const[photo, setPhoto] = useState(userPhoto)
    get({path: 'edit-profile', isAuth:true})
    .then(res => {
        if (res.data.photo !== 'no') {
            setPhoto("http://127.0.0.1:8000"+res.data.photo)
        }
    })
    return (
        <div style={style} className={styles.anchor}>
            <div className={styles.photo}>
                <UserPhoto src={photo}/>
            </div>
            <InputWithIcon isDiv={isDiv} style={styleIn} onClick={onClick} id={id ?? "comment-input"} placeholder='Add a comment' src={arrowIcon} type='text'/>
        </div>
    )
}