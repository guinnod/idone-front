import { UserPhoto } from '@ui/UserPhoto'
import userPhoto from '@images/userPhoto.jpg'
import styles from './styles/_select-person.module.scss'
import { Box } from '@components/ui/Box'
export const SelectPerson = ({ name, photo, className, value }) => {

    return (
        <Box style={{ width: 300 }} >
            <Box>
                <UserPhoto src={photo} />
                {name}
            </Box>
            <input value={value} className={`${className} ${styles.radio}`} type="radio"  id={name} />
        </Box>
    )
}