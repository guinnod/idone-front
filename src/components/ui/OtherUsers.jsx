import styles from './styles/_other-users.module.scss'
import { OtherUsersPhoto } from './OtherUsersPhoto'
import { UserPhoto } from './UserPhoto';

export const OtherUsers = ({ users, limit, isAdd, onClick }) => {
    let isLast;
    let amount;
    if (users) {
        isLast = users.length > limit
        amount = users.length - limit
        if (isLast) {
            users = users.slice(0, limit)
        }
    }
    return (
        <div className={styles.anchor} >
            {users ? users.map((e, key) => {
                return (
                    <UserPhoto src={e} key={key} />
                );
            }) : <></>}
            {isLast ? <OtherUsersPhoto onClick={onClick} amount={amount} isAdd={isAdd}/> : isAdd ? <OtherUsersPhoto onClick={onClick} isAdd={true}/> : <></>}
        </div>
    )
}