import styles from './styles/_login.module.scss'
import colors from '@styles/colors.json'
import { Button } from '@ui/Button'
import { LoginInput, FileInput } from './LoginInput'
import { LoginOptions } from './LoginOptions'
import { Logo } from '@components/ui/Logo'
import {Link, useNavigate} from 'react-router-dom'

import { List } from '@components/ui/List'
import axios from "axios";
import {useState} from "react"
import {post} from "@/api/index.js";

export const SignUp = ({  }) => {
    const headers = {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzMzU1MzE1LCJpYXQiOjE2ODMyNjg5MTUsImp0aSI6ImM3YzRjZjA1ODI1NDRjNGI5YmFhYjAzMTA0NDMyOThjIiwidXNlcl9pZCI6Mn0.ngBGP5cz151hD7K0LQzsPJHCxwfQng2gaYYGFNXoyWw`
    };
    const navigate = useNavigate();

    const getCode = () => {
        post({"nothing":"nothing"})
            .then((res)=>{
                console.log(res)
                navigate("/confirm")
            })

    }
    const [isConfirming, setIsConfirming] = useState(false);
    return (
        <form method="POST" id="authForm" className={styles.anchor}>
            <Logo />
            <h1 className={styles.text}>Create an account</h1>
            <List gap={30}>
                <LoginInput toptext="Full name" id="fullName" name="fullName" type={"text"} disabled={isConfirming} required/>
                <LoginInput toptext='Your Email' type="text" id="username" name={"username"} disabled={isConfirming} required/>
                <FileInput toptext="photo" type="file" id={"photo"} accept={"image/png, image/jpeg, image/jfif"} disabled={isConfirming}/>
                <Button onClick={getCode} style={{ background: colors.main, width: '500px', color: 'white' }}>
                    Get confirmation code
                </Button>
            </List>
        </form>
    )
}