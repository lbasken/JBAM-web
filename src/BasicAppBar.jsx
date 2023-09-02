import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { Menu } from "@mui/icons-material";
import LoginLogoutButton from "./LoginLogoutButton.jsx";
export default function BasicAppBar() {


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
        <LoginLogoutButton />
      </Toolbar>
    </AppBar>
  </Box>

}