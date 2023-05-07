import styles from "./styles/_login.module.scss";
import colors from '@styles/colors.json'
import {Logo} from "@ui/Logo";
import {LoginInput} from "@Login/LoginInput";
import {LoginOptions} from "@Login/LoginOptions";
import {Button} from "@ui/Button";
import {List} from "@ui/List";
import {post} from "@api/index.js";
import {setJwt} from "@utils/localStorageHelper.js";
import {useState} from "react";

export const Login = () => {
    const auth = () => {
        const email = document.getElementById("email");
        if (!email.validity.valid) {
            setIsRedBorder(true);
            return;
        }
        const password = document.getElementById("password");
        const data = {
            email: email.value, password: password.value
        }
        // post({path: 'login', data: data})
        //     .then(res => console.log(res.data))
        //     .catch(error => alert(error.response.data.error))
    }
    const checkEmailValidation = () => {
        const email = document.getElementById("email");
        setIsRedBorder(!email.validity.valid);
    }
    const [isRedBorder, setIsRedBorder] = useState(false);
    return (
        <form id="loginForm" className={styles.anchor}>
            <Logo/>
            <h1 className={styles.text}>Log in</h1>
            <List gap={30}>
                <LoginInput style={{borderColor: isRedBorder ? colors.red : colors.gray }}
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" onChange={checkEmailValidation}
                            toptext="E-mail" type="email" id="email" name="email" required/>
                <LoginInput toptext="Password" type="password" id="password" minLength={8} maxLength={20} required/>
                <LoginOptions isForgot/>
                <Button onClick={auth} style={{background: colors.main, width: '500px', color: 'white'}}>
                    Log in
                </Button>
            </List>
        </form>
    )
}