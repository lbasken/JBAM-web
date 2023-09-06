import React from "react";
import {AppBar, Toolbar, IconButton, Typography, Box} from '@mui/material';
import {Menu} from "@mui/icons-material";
import LoginLogoutButton from "./LoginLogoutButton.jsx";
import AppBarMenu from "./AppBarMenu.jsx";

export default function BasicAppBar() {
    return <Box sx={{flexGrow: 1}}>
        <AppBar>
            <Toolbar>
                <AppBarMenu />
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Just Birds And More
                </Typography>
                <LoginLogoutButton/>
            </Toolbar>
        </AppBar>
    </Box>

}