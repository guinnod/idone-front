import styles from "./styles/_login.module.scss";
import colors from '@styles/colors.json'
import {Logo} from "@ui/Logo";
import {LoginInput} from "@Login/LoginInput";
import {Button} from "@ui/Button";
import {List} from "@ui/List";
import {useState, useEffect} from "react";
import {post, put} from "@api/index.js";

export const Confirm = () => {
    const [isConfirming, setIsConfirming] = useState(true);
    const [isRedBorderEmail, setIsRedBorderEmail] = useState(false);
    useEffect(() => {
        document.getElementById("email").value = sessionStorage.getItem('email')
    }, [])
    const handleConfirm = () => {
        post({
            path: 'confirm', data: {
                'token': document.getElementById("confirmation").value,
                'email': document.getElementById("email").value
            }
        })
            .then(res => {
                console.log(res.data);
                sessionStorage.setItem('token', res.data.token)
                setIsConfirming(false);
            })
            .catch(error => alert(error.response.data.error))
    }
    const submitForm = () => {
        const password = document.getElementById("password");
        const passwordRepeat = document.getElementById("passwordRepeat");
        if (password.value !== passwordRepeat.value) {
            alert("Passwords don’t match")
            return;
        }
        put({
            path: 'confirm', data: {
                'token': sessionStorage.getItem('token'),
                'email': document.getElementById("email").value,
                'password': password.value
            }
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(error => alert(error.response.data))
    }
    const checkEmailValidation = () => {
        const email = document.getElementById("email");
        setIsRedBorderEmail(!email.validity.valid);
    }
    return (
        <div id="confirmForm" className={styles.anchor}>
            <Logo/>
            <h1 className={styles.text}>Create an account</h1>
            <List gap={30}>
                <LoginInput style={{borderColor: isRedBorderEmail ? colors.red : colors.gray}}
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" onChange={checkEmailValidation}
                            toptext="E-mail" type="email" id="email" name="email" required/>
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