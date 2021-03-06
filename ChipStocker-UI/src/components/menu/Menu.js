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
import {Translation} from "react-i18next";

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

        <Translation>
            {(t) =>

        <>
            <List
                sx={{width: '100%', maxWidth: 360, bgcolor: '#8a91d5', marginTop: '150px'}}
                component="nav">
                <ListItemText primaryTypographyProps={{ style: mainTextStyle}} >
                    {t('menu')}
                </ListItemText>
                <Divider />

                <ListItemButton component={NavLink} to="/">
                    <ListItemIcon>
                        <HomeIcon style={{ color: "white" }}/>
                    </ListItemIcon>
                    <ListItemText primary= {t('home')} primaryTypographyProps={{ style: secondTextStyle}}/>
                </ListItemButton>

                <ListItemButton component={NavLink} to="/about">
                    <ListItemIcon>
                        <SendIcon style={{ color: "white" }}/>
                    </ListItemIcon>
                    <ListItemText primary= {t('about')} primaryTypographyProps={{ style: secondTextStyle}}/>
                </ListItemButton>
                <ListItemButton component={NavLink} to="/contact">
                    <ListItemIcon style={{ color: "white" }}>
                        <AccountBalanceIcon/>
                    </ListItemIcon>
                    <ListItemText primary= {t('contact')} primaryTypographyProps={{ style: secondTextStyle}}/>
                </ListItemButton>
            </List>
            <List
                sx={{width: '100%', maxWidth: 360, bgcolor: '#8a91d5', marginTop: '10px'}}
                component="nav">
                <ListItemText primaryTypographyProps={{ style: mainTextStyle}} >
                    {t('topics')}
                </ListItemText>
                <Divider />
                <ListItemButton component={NavLink} to="/electronics">
                    <ListItemIcon>
                        <CableIcon style={{ color: "white" }}/>
                    </ListItemIcon>
                    <ListItemText primary= {t('electronics')} primaryTypographyProps={{ style: secondTextStyle}}/>
                </ListItemButton>
                <ListItemButton component={NavLink} to="/travels">
                    <ListItemIcon>
                        <FlightIcon style={{ color: "white" }}/>
                    </ListItemIcon>
                    <ListItemText primary= {t('travels')} primaryTypographyProps={{ style: secondTextStyle}}/>
                </ListItemButton>
                <ListItemButton component={NavLink} to="/sports">
                    <ListItemIcon>
                        <SportsHandballIcon style={{ color: "white" }}/>
                    </ListItemIcon>
                    <ListItemText primary= {t('sports')} primaryTypographyProps={{ style: secondTextStyle}}/>
                </ListItemButton>
                <ListItemButton component={NavLink} to="/others">
                    <ListItemIcon >
                        <WorkspacesIcon style={{ color: "white" }}/>
                    </ListItemIcon>
                    <ListItemText primary={t('others')} primaryTypographyProps={{ style: secondTextStyle}}/>
                </ListItemButton>
                <Divider sx={{mt: "20px"}}/>
            </List>
        </>
            }
        </Translation>
    );
}
