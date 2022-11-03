import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../../Components/Login/Login';
import Dash from '../../Components/Dash/Dash';

const LoginRoutes = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    {/*<Route index element={<App />} />*/}
                    <Route path="/" element={<Login />} />
                    <Route path="mainpage" element={<Dash />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default LoginRoutes;