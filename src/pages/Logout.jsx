import {Navigate} from "react-router-dom";
import {useEffect} from "react";

export const Logout = () => {
    useEffect(()=>{
        localStorage.setItem("jwt", "");
    }, [])
    return <Navigate to="/login" replace />
};