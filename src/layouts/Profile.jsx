import styles from './styles/_profile.module.scss'
import userPhoto from '@images/userPhoto.jpg'
import editIcon from '@icons/edit.svg'
import editGrayIcon from '@icons/edit_gray.svg'
import colors from '@styles/colors.json'
import {UserPhoto} from '@components/ui/UserPhoto'
import {Window} from '@components/ui/Window'
import {CircleButton} from '@components/ui/CircleButton'
import {List} from '@components/ui/List'
import {Button} from '@components/ui/Button'
import {InputWithIcon} from '@components/ui/InputWithIcon'
import {useState} from "react";

export const Profile = () => {
    const inputs = [
        {placeholder: 'Full name', type: 'text'},
        {placeholder: 'Email', type: 'email'},
        {placeholder: 'Password', type: 'password'}
    ]
    const style = {
        'padding': '12px 18px',
        'width': '400px',
        'borderRadius': '5px'
    }
    const [photo, setPhoto] = useState(userPhoto)
    const handlePhotoUpload = () => {
        const avatarPhoto = document.getElementById("avatarPhoto");
        console.log(avatarPhoto.files)
        if (avatarPhoto.files[0]) {
            setPhoto(URL.createObjectURL(avatarPhoto.files[0]))
        } else {
            setPhoto(userPhoto)
        }
    }
    return (
        <Window title='Account'>
            <div className={styles.anchor}>
                <List gap={20}>
                    <div className={styles.avatar}>
                        <UserPhoto src={photo} width='150px'/>
                        <span style={{cursor: "pointer"}}>
                            <div style={{position: "relative", cursor: "pointer"}} >
                            <input type={"file"} id="avatarPhoto" accept="image/png, image/jpg"
                                   style={{opacity: 0, position: "absolute", width: '100%', height: '100%', cursor: "pointer"}} onChange={handlePhotoUpload}/>
                            <CircleButton svg={editIcon} color={colors.main}/>
                                </div>
                        </span>
                    </div>
                    <List>
                        {inputs.map((e, key) => {
                            return (
                                <InputWithIcon key={key} placeholder={e.placeholder} type={e.type} src={editGrayIcon}
                                               style={style}/>
                            )
                        })}
                    </List>
                    <Button style={{width: '400px', borderRadius: '5px', background: colors.main}}>
                        Save
                    </Button>
                </List>
            </div>
        </Window>
    )
}