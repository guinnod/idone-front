import { Login } from '../components/Login'

export const SignIn = () => {
    return (
        <Login isForgot placeholder='Enter Password' text='Sign in' />
    )
}
export const SignUp = () => {
    return (
        <Login placeholder='Create Password' text='Sign up' />
    )
}