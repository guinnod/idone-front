import closeIcon from '../../assets/icons/ic_Close.svg'
import { LoginButton } from '../Login/LoginButton'
import { SelectPerson } from './SelectPerson'
import styles from './styles/_persons-card.module.scss'
export const PersonsCard = () => {
    const persons = [{ name: 'John Jones' }, { name: 'Alex Alex' }, { name: 'Luck luck' }]
    return (
        <div className={styles.anchor}>
            <img className={styles.icon} src={closeIcon} alt="close" />
            <div className={styles.text}>Assign developer</div>
            <form name="" id="">
                {persons.map((e, key) => {
                    return (
                        <SelectPerson name={e.name} key={key} />
                    )
                })}
            </form>
            <div className={styles.buttons}>
                <div>
                    Cancel
                </div>
                <LoginButton text='Add' />
            </div>
        </div>
    )
}