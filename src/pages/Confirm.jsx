import styles from "./styles/_login.module.scss";
import colors from '@styles/colors.json'
import {Logo} from "@ui/Logo";
import {LoginInput} from "@Login/LoginInput";
import {Button} from "@ui/Button";
import {List} from "@ui/List";
import {useState} from "react";
import {post} from "@api/index.js";

export const Confirm = ({isCreating}) => {
    const [isConfirming, setIsConfirming] = useState(true);
    const handleConfirm = () => {
        post({path:'temp'})
            .then(res=>{
                console.log(res.data);
                setIsConfirming(false);
            })
            .catch(error=>console.log(error))
    }
    const submitForm = () => {
        const password = document.getElementById("password");
        const passwordRepeat = document.getElementById("passwordRepeat");
        if (password.value !== passwordRepeat.value) {
            alert("Passwords don’t match")
            return;
        }
    }
    return (
        <div id="confirmForm" className={styles.anchor}>
            <Logo/>
            <h1 className={styles.text}>Create an account</h1>
            <List gap={30}>
                <LoginInput toptext="Confirmation code" id="confirmation" name="confirmation"
                            style={{cursor: !isConfirming ? 'not-allowed' : 'text'}}
                            disabled={!isConfirming}/>
                <Button style={{
                    background: !isConfirming ? colors.gray : colors.main,
                    width: '500px',
                    color: 'white',
                    cursor: !isConfirming ? 'not-allowed' : 'pointer'
                }}
                        onClick={handleConfirm}>
                    Check confirmation code
                </Button>
                <LoginInput toptext="Create password" type="password" id="password" maxLength={"20"} minLength={"8"}
                            style={{cursor: isConfirming ? 'not-allowed' : 'text'}}
                            disabled={isConfirming}/>
                <LoginInput toptext="Repeat password" type="password" id="passwordRepeat" maxLength={"20"}
                            minLength={"8"}
                            style={{cursor: isConfirming ? 'not-allowed' : 'text'}}
                            disabled={isConfirming}/>
                <Button style={{
                    background: isConfirming ? colors.gray : colors.main,
                    width: '500px',
                    color: 'white',
                    cursor: isConfirming ? 'not-allowed' : 'pointer'
                }}
                        onClick={submitForm}>
                    Sign up
                </Button>
            </List>
        </div>
    )
}