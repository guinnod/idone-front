import styles from "./styles/_login.module.scss";
import colors from '@styles/colors.json'
import {Logo} from "@ui/Logo";
import {FileInput, LoginInput} from "@Login/LoginInput";
import {Button} from "@ui/Button";
import {List} from "@ui/List";
import {post} from "@api/index.js";
import {useState} from "react";

export const Register = () => {

    const getCode = () => {
        post({"nothing": "nothing"})
            .then((res) => {
                console.log(res)
            })
    }
    const [isConfirming, setIsConfirming] = useState(false);
    return (
        <div id="registerForm" className={styles.anchor}>
            <Logo/>
            <h1 className={styles.text}>Create an account</h1>
            <List gap={30}>
                <LoginInput toptext="Full name" id="fullName" name="fullName" type={"text"} disabled={isConfirming}
                            required/>
                <LoginInput toptext='Your Email' type="text" id="username" name={"username"} disabled={isConfirming}
                            required/>
                <FileInput toptext="photo" type="file" id={"photo"} accept={"image/png, image/jpeg, image/jfif"}
                           disabled={isConfirming}/>
                <Button onClick={getCode} style={{background: colors.main, width: '500px', color: 'white'}}>
                    Get confirmation code
                </Button>
            </List>
        </div>
    )
}