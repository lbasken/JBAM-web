import React from "react";
import {AppBar, Toolbar, IconButton, Typography, Button, Box} from '@mui/material';
import {Menu} from "@mui/icons-material";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export default function BasicAppBar() {
  function signInWithGoogle () {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
    }
    return <Box sx={{ flexGrow: 1 }}>
  <AppBar>
    <Toolbar>
      <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2}}
      >
        <Menu />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
        Just Birds And More
      </Typography>
      <Button onClick={signInWithGoogle} color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
  </Box>
}