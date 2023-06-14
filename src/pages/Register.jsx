import styles from "./styles/_login.module.scss";
import colors from '@styles/colors.json'
import {Logo} from "@ui/Logo";
import {FileInput, LoginInput} from "@Login/LoginInput";
import {Button} from "@ui/Button";
import {List} from "@ui/List";
import {post} from "@api/index.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { RegisterOptions } from "@components/Login/LoginOptions";

export const Register = () => {
    const [isRedBorderEmail, setIsRedBorderEmail] = useState(false);
    const [isRedBorderName, setIsRedBorderName] = useState(false);
    const navigate = useNavigate();
    const getCode = () => {
        const email = document.getElementById("email");
        setIsRedBorderEmail(!email.validity.valid);
        const fullName = document.getElementById("fullName");
        setIsRedBorderName(!fullName.validity.valid);
        if (!fullName.validity.valid || !email.validity.valid) {
            alert("Please, enter all data");
            return;
        }
        const formData = new FormData();
        const photo = document.getElementById("photo").files
        if (photo.length > 0) {
            formData.append('photo', photo[0]);
        }
        formData.append('email', email.value)
        formData.append('fullName', fullName.value)
        post({path: 'register', data:formData, headers: {
            'Content-Type': 'multipart/form-data'
        }})
            .then((res) => {
                console.log(res);
                sessionStorage.setItem('email', email.value)
                navigate("/confirm/")
            })
            .catch(error => alert(error.response.data))
    }
    const checkEmailValidation = () => {
        const email = document.getElementById("email");
        setIsRedBorderEmail(!email.validity.valid);
    }
    const checkNameValidation = () => {
        const fullName = document.getElementById("fullName");
        setIsRedBorderName(!fullName.validity.valid);
    }
    return (
        <div id="registerForm" className={styles.anchor}>
            <Logo/>
            <h1 className={styles.text}>Create an account</h1>
            <List gap={30}>
                <LoginInput style={{borderColor: isRedBorderName ? colors.red : colors.gray}}
                            pattern="^[a-zA-Z-]+\s[a-zA-Z-]+$" onChange={checkNameValidation}
                            toptext="Full name" id="fullName" name="fullName" type="text"
                            required/>
                <LoginInput style={{borderColor: isRedBorderEmail ? colors.red : colors.gray}}
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" onChange={checkEmailValidation}
                            toptext='E-mail' type="email" id="email" name="email"
                            required/>
                <FileInput toptext="Avatar" type="file" id="photo" accept={"image/png, image/jpeg, image/jfif"}/>
                <Button onClick={getCode} style={{background: colors.main, width: '500px', color: 'white'}}>
                    Get confirmation code
                </Button>
                <RegisterOptions />
            </List>
        </div>
    )
}