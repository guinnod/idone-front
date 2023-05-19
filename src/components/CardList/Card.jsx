import styles from './styles/_card.module.scss'
import { OtherUsers } from '@ui/OtherUsers'
import { CardOption } from './CardOption'
import { Progress } from '@ui/Progress'
import checkIcon from '@icons/fi_check-circle.svg'
import messageIcon from '@icons/message.svg'
import paperclipIcon from '@icons/paperclip.svg'
import { useDispatch } from 'react-redux'
import { tasksActions } from '@store/tasks'
import colors from "@styles/colors.json";

export const Card = ({ color, name, value, users, comments, steps, paperclip, onClick }) => {
    console.log(users)
    const dispatch = useDispatch();
    const change = () => {
        dispatch(tasksActions.change("TaskView"));
    }
    let keys = Object.keys(colors);
    keys = keys.filter(key=> {return key==='main' || key === 'azure' || key === 'red' || key === 'blue_pacific' || key === 'purple' || key === 'dark'})
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomValue = colors[randomKey];
    const commentsSize = comments ? comments.length : 0;
    return (
        <div className={styles.anchor} onClick={ onClick}>
            {name}
            <Progress value={value} size={220} color={randomValue} />
            <div className={styles.options}>
                <CardOption data={comments} svg={messageIcon} />
                {steps ? <CardOption data={`${steps.current}/${steps.max}`} svg={checkIcon} /> : <></>}
                {paperclip ? <CardOption data={paperclip} svg={paperclipIcon} /> : <></>}
            </div>
            <OtherUsers users={users ? users : []} limit={2} isAdd/>
        </div>
    )
}