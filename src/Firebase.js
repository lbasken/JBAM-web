import {initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import * as firebaseui from "firebaseui";

export default class Firebase {

    static firebaseConfig = {
        apiKey: "AIzaSyBgqQM8zcbZhXJX2_xeLQi549G3uN-PZ0w",
        authDomain: "just-birds-and-more-513cf.firebaseapp.com",
        projectId: "just-birds-and-more-513cf",
        storageBucket: "just-birds-and-more-513cf.appspot.com",
        messagingSenderId: "717059416594",
        appId: "1:717059416594:web:31d7fe40d8ba8662056ecb",
        measurementId: "G-T818WH12XC"
      };

    static app;
    static auth;
    static db;

    static init() {
        Firebase.app = initializeApp(Firebase.firebaseConfig);
        Firebase.auth = getAuth(Firebase.app);
        Firebase.db = getFirestore(Firebase.app);
        Firebase.ui = new firebaseui.auth.AuthUI(Firebase.auth)
        onAuthStateChanged(Firebase.auth, (user) => {
            console.log(user);
        })
    }

}