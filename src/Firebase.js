import {initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import * as firebaseui from "firebaseui";
import {apiKey, appId} from "../config.json";

export default class Firebase {

    static firebaseConfig = {
        apiKey: apiKey,
        authDomain: "just-birds-and-more-513cf.firebaseapp.com",
        projectId: "just-birds-and-more-513cf",
        storageBucket: "just-birds-and-more-513cf.appspot.com",
        messagingSenderId: "717059416594",
        appId: appId,
        measurementId: "G-T818WH12XC"
      };

    static app;
    static auth;

    static init() {
        Firebase.app = initializeApp(Firebase.firebaseConfig);
        Firebase.auth = getAuth(Firebase.app);
        Firebase.ui = new firebaseui.auth.AuthUI(Firebase.auth)
        onAuthStateChanged(Firebase.auth, (user) => {
            console.log(user);
        })
    }

}