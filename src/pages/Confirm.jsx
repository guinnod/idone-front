import styles from "./styles/_login.module.scss";
import colors from '@styles/colors.json'
import {Logo} from "@ui/Logo";
import {LoginInput} from "@Login/LoginInput";
import {Button} from "@ui/Button";
import {List} from "@ui/List";
import {useState} from "react";
import {LoginOptions} from "@Login/LoginOptions.jsx";

export const Confirm = ({isCreating}) => {

    const [isConfirming, setIsConfirming] = useState(true);
    const [isFromLink, setIsFromLink] = useState(false);
    const [isPasswordSame, setIsPasswordSame] = useState(true);
    const handlePasswordSame = () => {
        const passInput = document.getElementById("password");
        const passRepInput = document.getElementById("passwordRepeat");
        setIsPasswordSame(passInput.value === passRepInput.value)
    }
    return (
        <div id="confirmForm" className={styles.anchor}>
            <Logo/>
            <h1 className={styles.text}>{isCreating ? "Create an account" : "Reset password"}</h1>
            <List gap={30}>
                {!isFromLink ? <>
                    <LoginInput toptext="Confirmation code" id="confirmation" name="confirmation"
                                disabled={isConfirming}/>
                    <Button style={{background: colors.main, width: '500px', color: 'white'}}>
                        Check confirmation code
                    </Button>
                </> : <></>}
                <LoginInput toptext="Create password" type="password" id="password" maxlength={"20"} minlength={"8"}/>
                <LoginInput toptext="Repeat password" type="password" id="passwordRepeat" maxlength={"20"}
                            minlength={"8"} style={{borderColor: isPasswordSame ? colors.gray : colors.red}}/>
                <LoginOptions/>
                <Button onClick={handlePasswordSame}
                        style={{background: isConfirming ? colors.gray : colors.main, width: '500px', color: 'white'}}>
                    Sign in
                </Button>
            </List>
        </div>
    )
}