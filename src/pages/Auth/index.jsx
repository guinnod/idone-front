import { Auth } from "./Auth"

export const SignIn = () => {
    return (
        <Auth isForgot placeholder='Enter Password' text='Sign in' />
    )
}
export const SignUp = () => {
    return (
        <Auth placeholder='Create Password' text='Sign up' />
    )
}