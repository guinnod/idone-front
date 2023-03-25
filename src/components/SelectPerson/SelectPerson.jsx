import { UserPhoto } from '../Header/UserPhoto'
import styles from './styles/_select-person.module.scss'
export const SelectPerson = ({ name, photo }) => {

    return (
        <div className={styles.anchor}>
            <div className={styles.text}>
                <UserPhoto />
                <div>{name}</div>
            </div>
            <input type="radio" name="name" id="" />
        </div>
    )
}