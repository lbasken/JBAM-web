import React from "react";
import {AppBar, Toolbar, IconButton, Typography, Button, Box} from '@mui/material';
import {Menu} from "@mui/icons-material";
import { getAuth, signOut } from "firebase/auth";

export default function BasicAppBarLogout() {
    function googleSignOut() {
        const auth = getAuth();
        signOut(auth).then(() => {
        }).catch((error) => {
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
        Your Account
      </Typography>
      <Button onClick={googleSignOut} color="inherit">Logout</Button>
    </Toolbar>
  </AppBar>
  </Box>
}