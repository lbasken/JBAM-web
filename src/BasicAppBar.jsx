import React from "react";
import "./BasicAppBar.css"
import {AppBar, Toolbar, Typography, Box} from '@mui/material';
import LoginLogoutButton from "./LoginLogoutButton.jsx";
import AppBarMenu from "./AppBarMenu.jsx";

export default function BasicAppBar() {
    return <Box sx={{flexGrow: 1}}>
        <AppBar>
            <Toolbar id="toolbar">
                <AppBarMenu />
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Just Birds And More
                </Typography>
                <LoginLogoutButton/>
            </Toolbar>
        </AppBar>
    </Box>

}