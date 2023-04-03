import styles from './styles/_card.module.scss'
import { OtherUsers } from '@ui/OtherUsers'
import { CardOption } from './CardOption'
import { Progress } from '@ui/Progress'
import checkIcon from '@icons/fi_check-circle.svg'
import messageIcon from '@icons/message.svg'
import paperclipIcon from '@icons/paperclip.svg'

export const Card = ({ color, name, value, users, comments, steps, paperclip }) => {
    const commentsSize = comments ? comments.length : 0;
    return (
        <div className={styles.anchor}>
            {name}
            <Progress value={value} size={150} color={color} />
            <div className={styles.options}>
                <CardOption data={commentsSize} svg={messageIcon} />
                {steps ? <CardOption data={`${steps.current}/${steps.max}`} svg={checkIcon} /> : <></>}
                {paperclip ? <CardOption data={paperclip} svg={paperclipIcon} /> : <></>}
            </div>
            {users ? <OtherUsers users={users} /> : <></>}
        </div>
    )
}