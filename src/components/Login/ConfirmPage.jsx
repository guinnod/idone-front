import styles from './styles/_login.module.scss'
import colors from '@styles/colors.json'
import { Button } from '@ui/Button'
import { LoginInput, FileInput } from './LoginInput'
import { LoginOptions } from './LoginOptions'
import { Logo } from '@components/ui/Logo'
import { Link } from 'react-router-dom'
import { List } from '@components/ui/List'
import axios from "axios";
import {useState} from "react"

export const ConfirmPage = ({  }) => {
    const headers = {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzMzU1MzE1LCJpYXQiOjE2ODMyNjg5MTUsImp0aSI6ImM3YzRjZjA1ODI1NDRjNGI5YmFhYjAzMTA0NDMyOThjIiwidXNlcl9pZCI6Mn0.ngBGP5cz151hD7K0LQzsPJHCxwfQng2gaYYGFNXoyWw`
    };
    const [isConfirming, setIsConfirming] = useState(true);
    const [isPasswordSame, setIsPasswordSame] = useState(true);
    const handlePasswordSame = () => {
        const passInput = document.getElementById("password");
        const passRepInput = document.getElementById("passwordRepeat");
        setIsPasswordSame(passInput.value === passRepInput.value)

    }
    return (
        <form method="POST" id="authForm" className={styles.anchor}>
            <Logo />
            <h1 className={styles.text}>Create an account</h1>
            <List gap={30}>
                <LoginInput toptext="Confirmation code" id="confirmation" name="confirmation" disabled={isConfirming}/>
                <Button onClick={()=>{
                    axios.post("http://127.0.0.1:8000/api/token/", {username:document.getElementById("username").value, password: document.getElementById("password").value}, {headers}).then((res)=>{
                        console.log(res.data)
                        localStorage.setItem("jwt", res.data.access)
                        window.location.href = "http://localhost:5173/"
                    })
                }} style={{ background: colors.main, width: '500px', color: 'white' }}>
                    Check confirmation code
                </Button>
                <LoginInput toptext="Create password" type="password" id="password" maxlength={"20"} minlength={"8"} onChange={()=>{}}/>
                <LoginInput toptext="Repeat password" type="password" id="passwordRepeat" maxlength={"20"} minlength={"8"} style={{borderColor:isPasswordSame ? colors.gray : colors.red}}/>
                <LoginOptions />
                <Button onClick={()=>{
                    handlePasswordSame()
                    console.log(isPasswordSame)
                    // axios.post("http://127.0.0.1:8000/api/token/", {username:document.getElementById("username").value, password: document.getElementById("password").value}, {headers}).then((res)=>{
                    //     console.log(res.data)
                    //     localStorage.setItem("jwt", res.data.access)
                    //     window.location.href = "http://localhost:5173/"
                    // })
                }} style={{ background: isConfirming ? colors.gray : colors.main, width: '500px', color: 'white' }}>
                    Sign in
                </Button>
            </List>
        </form>
    )
}