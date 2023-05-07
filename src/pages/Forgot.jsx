import styles from "./styles/_login.module.scss";
import colors from '@styles/colors.json'
import {Logo} from "@ui/Logo";
import {LoginInput} from "@Login/LoginInput";
import {Button} from "@ui/Button";
import {List} from "@ui/List";
import {post} from "@api/index.js";
import {useState} from "react";

export const Forgot = () => {
    const [isRedBorderEmail, setIsRedBorderEmail] = useState(false);
    const getCode = () => {
        const email = document.getElementById("email");
        setIsRedBorderEmail(!email.validity.valid);
        if (!email.validity.valid) {
            alert("Please, enter all data");
            return;
        }
        post({path: 'temp'})
            .then((res) => {
                console.log(res)
            })
    }
    const checkEmailValidation = () => {
        const email = document.getElementById("email");
        setIsRedBorderEmail(!email.validity.valid);
    }
    return (
        <div id="forgotForm" className={styles.anchor}>
            <Logo/>
            <h1 className={styles.text}>Reset password</h1>
            <List gap={30}>
                <LoginInput style={{borderColor: isRedBorderEmail ? colors.red : colors.gray}}
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" onChange={checkEmailValidation}
                            toptext='E-mail' type="email" id="email" name="email"
                            required/>
                <Button onClick={getCode} style={{background: colors.main, width: '500px', color: 'white'}}>
                    Reset password
                </Button>
            </List>
        </div>
    )
}