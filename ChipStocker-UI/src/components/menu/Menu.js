import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import Divider from "@mui/material/Divider";
import HomeIcon from '@mui/icons-material/Home';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import {NavLink} from "react-router-dom";
import FlightIcon from '@mui/icons-material/Flight';
import CableIcon from '@mui/icons-material/Cable';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
export default function NestedList() {

    const mainTextStyle = {
        color: "white",
        textAlign: 'center',
        fontWeight: "bold"
    };

    const secondTextStyle = {
        color: "white",

    };

    return (
        <>
            <List
                sx={{width: '100%', maxWidth: 360, bgcolor: '#8a91d5', marginTop: '150px'}}
                component="nav">
                <ListItemText primaryTypographyProps={{ style: mainTextStyle}} >
                       Menu
                </ListItemText>
                <Divider />

                <ListItemButton component={NavLink} to="/">
                    <ListItemIcon>
                        <HomeIcon style={{ color: "white" }}/>
                    </ListItemIcon>
                    <ListItemText primary="Home" primaryTypographyProps={{ style: secondTextStyle}}/>
                </ListItemButton>

                <ListItemButton component={NavLink} to="/about">
                    <ListItemIcon>
                        <SendIcon style={{ color: "white" }}/>
                    </ListItemIcon>
                    <ListItemText primary="About" primaryTypographyProps={{ style: secondTextStyle}}/>
                </ListItemButton>
                <ListItemButton component={NavLink} to="/contact">
                    <ListItemIcon style={{ color: "white" }}>
                        <AccountBalanceIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Contact" primaryTypographyProps={{ style: secondTextStyle}}/>
                </ListItemButton>
            </List>
            <List
                sx={{width: '100%', maxWidth: 360, bgcolor: '#8a91d5', marginTop: '10px'}}
                component="nav">
                <ListItemText primaryTypographyProps={{ style: mainTextStyle}} >
                    Topics
                </ListItemText>
                <Divider />
                <ListItemButton>
                    <ListItemIcon>
                        <CableIcon style={{ color: "white" }}/>
                    </ListItemIcon>
                    <ListItemText primary="Electronics" primaryTypographyProps={{ style: secondTextStyle}}/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <FlightIcon style={{ color: "white" }}/>
                    </ListItemIcon>
                    <ListItemText primary="Travel" primaryTypographyProps={{ style: secondTextStyle}}/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <SportsHandballIcon style={{ color: "white" }}/>
                    </ListItemIcon>
                    <ListItemText primary="Sport" primaryTypographyProps={{ style: secondTextStyle}}/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <WorkspacesIcon style={{ color: "white" }}/>
                    </ListItemIcon>
                    <ListItemText primary="Others" primaryTypographyProps={{ style: secondTextStyle}}/>
                </ListItemButton>
                <Divider sx={{mt: "20px"}}/>
            </List>
        </>
    );
}
