import styles from "./styles/_login.module.scss";
import colors from '@styles/colors.json'
import {Logo} from "@ui/Logo";
import {LoginInput} from "@Login/LoginInput";
import {Button} from "@ui/Button";
import {List} from "@ui/List";
import {post} from "@api/index.js";
import {useNavigate} from "react-router-dom";

export const ChangePassword = () => {
    const navigate = useNavigate();
    const submitForm = () => {
        const password = document.getElementById("password");
        const passwordRepeat = document.getElementById("passwordRepeat");

        if (password.value !== passwordRepeat.value) {
            alert("Passwords don’t match")
            return;
        }
        if (!password.validity.valid) {
            alert("Incorrect format!")
            return;
        }
        const data = {
            'password': document.getElementById("currentPassword").value,
            'newPassword': password.value
        }
        post({path:'change-password', data: data, isAuth: true})
            .then(res=>{
                alert(res.data)
                navigate('../login')
            })
            .catch(error=>{
                alert(error.response.data)
            })
    }
    return (
        <div id="changeForm" className={styles.anchor}>
            <Logo/>
            <h1 className={styles.text}>Change password</h1>
            <List gap={30}>
                <LoginInput toptext="Current password" type="password" id="currentPassword" maxLength={"20"} minLength={"8"}
                            style={{cursor: 'text'}}/>
                <LoginInput toptext="New password" type="password" id="password" maxLength={"20"} minLength={"8"}
                            style={{cursor: 'text'}}/>
                <LoginInput toptext="Repeat password" type="password" id="passwordRepeat" maxLength={"20"} minLength={"8"}
                            style={{cursor: 'text'}}/>
                <Button style={{
                    background: colors.main,
                    width: '500px',
                    color: 'white',
                }} onClick={submitForm}>
                    Change password
                </Button>
            </List>
        </div>
    )
}