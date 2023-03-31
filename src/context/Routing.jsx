import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "../pages/Auth";
import { Home } from "../pages/Home";
import { Tasks } from "../pages/Tasks";
import { Workspace } from "../pages/Workspace";
import Protected from "./Protected";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="/" element={<Protected isAuthorized />}>
                    <Route index element={<Home />} />
                    <Route path="tasks" element={<Tasks />} />
                    <Route path="workspace" element={<Workspace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}