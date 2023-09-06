import React from "react";
import './App.css'
import BasicAppBar from "./BasicAppBar";
import HomePage from "./pages/HomePage/HomePage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import useAuth from "./hooks/useAuth.js";
import SignInPage from "./pages/SignInPage/SignInPage.jsx";
import BirdDBPage from "./pages/BirdDBPage/BirdDBPage.jsx";
import AndMoreDBPage from "./pages/AndMoreDBPage/AndMoreDBPage.jsx";

export default function App() {

    const {user} = useAuth();

    if(!user) {
        return <SignInPage />
    }

    return <BrowserRouter>
        <BasicAppBar/>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/birds" element={<BirdDBPage />}/>
            <Route path="/andmore" element={<AndMoreDBPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
    </BrowserRouter>
}