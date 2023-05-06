import styles from './styles/_login.module.scss'
import colors from '@styles/colors.json'
import { Button } from '@ui/Button'
import { LoginInput } from './LoginInput'
import { LoginOptions } from './LoginOptions'
import { Logo } from '@components/ui/Logo'
import { Link } from 'react-router-dom'
import { List } from '@components/ui/List'
import axios from "axios";


export const Login = ({ text, isForgot, placeholder }) => {
    const headers = {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzMzU1MzE1LCJpYXQiOjE2ODMyNjg5MTUsImp0aSI6ImM3YzRjZjA1ODI1NDRjNGI5YmFhYjAzMTA0NDMyOThjIiwidXNlcl9pZCI6Mn0.ngBGP5cz151hD7K0LQzsPJHCxwfQng2gaYYGFNXoyWw`
    };
    return (
        <form method="POST" id="authForm" className={styles.anchor}>
            <Logo />
            <h1 className={styles.text}>{text}</h1>
            <List gap={30}>
                <LoginInput placeholder='Your Email / Username' type="text" id="username" name={"username"}/>
                <LoginInput placeholder={placeholder} type="password" id="password"/>
                <LoginOptions isForgot={isForgot} />
                <Button onClick={()=>{
                    axios.post("http://127.0.0.1:8000/api/token/", {username:document.getElementById("username").value, password: document.getElementById("password").value}, {headers}).then((res)=>{
                        console.log(res.data)
                        localStorage.setItem("jwt", res.data.access)
                        window.location.href = "http://localhost:5173/"
                    })
                }} style={{ background: colors.main, width: '500px', color: 'white' }}>
                    {text}
                </Button>
            </List>
        </form>
    )
}