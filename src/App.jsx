import React from "react";
import './App.css'
import BasicAppBar from "./BasicAppBar";
import HomePage from "./pages/HomePage/HomePage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import useAuth from "./hooks/useAuth.js";
import SignInPage from "./pages/SignInPage/SignInPage.jsx";

export default function App() {

    const {user} = useAuth();

    if(!user) {
        return <SignInPage />
    }

    return <BrowserRouter>
        <BasicAppBar/>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
    </BrowserRouter>
}