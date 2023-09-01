import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import { Menu } from "@mui/icons-material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Firebase from "./Firebase";

const provider = new GoogleAuthProvider();

export default function BasicAppBar() {
  function signInWithGoogle() {
    signInWithPopup(Firebase.auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
      }).catch((error) => {
        console.log(error);
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
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Just Birds And More
        </Typography>
        <Button onClick={signInWithGoogle} color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
}