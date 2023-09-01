import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Firebase from "./Firebase";

Firebase.init();

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
