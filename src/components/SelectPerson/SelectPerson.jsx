import { UserPhoto } from '@ui/UserPhoto'
import userPhoto from '@images/userPhoto.jpg'
import styles from './styles/_select-person.module.scss'
import { Box } from '@components/ui/Box'
export const SelectPerson = ({ name, photo }) => {

    return (
        <Box style={{ width: 300 }} >
            <Box>
                <UserPhoto src={userPhoto} />
                {name}
            </Box>
            <input className={styles.radio} type="radio" name="selectPerson" id={name} />
        </Box>
    )
}