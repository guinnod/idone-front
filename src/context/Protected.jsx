import { Navigate, Outlet } from "react-router-dom";
import {useEffect, useState} from "react";
import {get} from "@api/index.js";
import {Loader} from "@pages/Loader";
const Protected = () => {
    const [isAuth, setIsAuth] = useState(0);
    useEffect(() => {
        get({path: "check-auth", isAuth: true})
            .then(res => {
                setIsAuth(res.data.authenticated ? 1 : -1)
            })
            .catch(e => {
                console.log(e)
                setIsAuth(-1)
            });
    }, [])
    if (isAuth === 0)
        return <div></div>
    if (isAuth === -1) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
};
export default Protected;