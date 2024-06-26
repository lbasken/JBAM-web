import React, {useEffect, useState} from "react";
import Firebase from "../../Firebase.js";
import {GoogleAuthProvider, EmailAuthProvider} from "firebase/auth";
import ChickadeeImage from "/src/assets/images/chickadee.svg";
import "./SignInPage.css";
import "firebaseui/dist/firebaseui.css";

export default function SignInPage() {

    const [container, setContainer] = useState();

    useEffect(() => {
        if (!container) { return; }
        Firebase.ui.start(container, {
            signInOptions: [
                {provider: GoogleAuthProvider.PROVIDER_ID, customParameters: {prompt: "select_account"}},
                {provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true, buttonColor: "olive"}
            ],
            signInFlow: "popup",
            callbacks: {
                signInSuccessWithAuthResult: onFirebaseSignInSuccess
            }
        });
    }, [container]);

    function onFirebaseSignInSuccess() {
        return false;
    }

    return <div className="sign-in-page">
        <img
            className="chickadee-logo"
            src={ChickadeeImage}
            alt="chickadee logo"
        />
        <h1>Just Birds And More</h1>
        <h2>New England Nature Database</h2>
        <div ref={ref => setContainer(ref)} />
    </div>

}