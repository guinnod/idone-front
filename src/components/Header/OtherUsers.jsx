import styles from './styles/_other-users.module.scss'
import { OtherUsersPhoto } from './OtherUsersPhoto'
import { UserPhoto } from './UserPhoto';

export const OtherUsers = ({ users, limit }) => {
    let isLast;
    let amount;
    if (users) {
        isLast = users.length > limit
        amount = users.length - limit
        if (amount == 0) {
            amount = ''
        }
    }
    return (
        <div className={styles.anchor} >
            {users ? users.map((e, key) => {
                return (
                    <UserPhoto photoSrc={e} key={key} />
                );
            }) : <></>}
            {isLast ? <OtherUsersPhoto amount={amount} /> : <></>}
        </div>
    )
}