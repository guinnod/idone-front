import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@pages/Home";
import { Tasks } from "@pages/Tasks";
import { Workspace } from "@pages/Workspace";
import Protected from "./Protected";
import {Login} from "@pages/Login.jsx";
import {Register} from "@pages/Register";
import {Confirm} from "@pages/Confirm";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="confirm" element={<Confirm />} />
                <Route path="/" element={<Protected isAuthorized />}>
                    <Route index element={<Home />} />
                    <Route path="tasks" element={<Tasks />} />
                    <Route path="workspace" element={<Workspace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}