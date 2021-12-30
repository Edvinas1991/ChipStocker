import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import PostAddIcon from '@mui/icons-material/PostAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LanguageSwitcher from "../../languageSwitcher/LanguageSwitcher";
import {NavLink, useNavigate} from "react-router-dom";
import {removeUser} from "../../store/slice/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import {Translation} from "react-i18next";

export default () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector(state => state.user.user);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const onLogout = () => {
        dispatch(removeUser());
        navigate("/");
    }


    return (
        <Translation>
            {(t) =>
                <AppBar
                    position="static"
                    style={{background: 'transparent'}}
                    elevation={0}
                >
                    <Toolbar sx={{flexWrap: 'wrap'}}>
                        <Typography variant="h6" color="Black" noWrap sx={{flexGrow: 1}}>
                        </Typography>
                        <nav>


                            {!user &&
                            <Button component={NavLink} to="/login">{t('login_buttom')}</Button>
                            }


                        </nav>


                        {user
                        &&
                        <>
                            <IconButton onClick={handleClick} size="small" sx={{ml: 2}}>
                                <Avatar sx={{width: 32, height: 32}}>M</Avatar>
                            </IconButton>
                        </>
                        }
                    </Toolbar>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    >

                        {user
                        &&
                        <>
                            <MenuItem>
                                <Avatar/> {user.username}
                            </MenuItem>
                            <Divider/>

                            {
                                user.roles.includes('ADMIN') &&
                                <>
                                    <MenuItem component={NavLink} to="/users/registration">
                                        <ListItemIcon>
                                            <PersonAddIcon fontSize="small"/>
                                        </ListItemIcon>
                                        {t('add_new_user')}
                                    </MenuItem>


                                    <MenuItem component={NavLink} to="/createpost">
                                        <ListItemIcon>
                                            <PostAddIcon fontSize="small"/>
                                        </ListItemIcon>
                                        {t('add_new_post')}
                                    </MenuItem>
                                </>

                            }
                        </>
                        }
                        <MenuItem onClick={onLogout}>
                            <ListItemIcon>
                                <Logout fontSize="small"/>
                            </ListItemIcon>
                            {t('logout')}
                        </MenuItem>

                        <MenuItem sx={{justifyContent: "center"}}>
                            <LanguageSwitcher/>
                        </MenuItem>


                    </Menu>

                </AppBar>
            }
        </Translation>
    )

}