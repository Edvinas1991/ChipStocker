import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import * as React from "react";
import {NavLink} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import LanguageSwitcher from "../../languageSwitcher/LanguageSwitcher";

export default ()=>{
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
       <AppBar
           position="static"
           style={{background : '#ffffff'}}
           elevation={0}
       >
          <Toolbar sx={{ flexWrap: 'wrap' }}>
             <Typography variant="h6" color="Black" noWrap sx={{ flexGrow: 1 }}>
                Company name
             </Typography>
             <nav>
                <Link
                    variant="button"
                    color="text.primary"
                    to="/"
                    component={NavLink}
                    sx={{ my: 1, mx: 1.5 }}
                >
                   Home
                </Link>
                <Link
                    variant="button"
                    color="text.primary"
                    to="/products/create"
                   component={NavLink}
                    sx={{ my: 1, mx: 1.5 }}
                >
                   Create new Product
                </Link>
                <Link
                    variant="button"
                    color="text.primary"
                    href="#"
                    sx={{ my: 1, mx: 1.5 }}
                >
                   Contact
                </Link>
             </nav>
             <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
             </IconButton>
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
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >

             <MenuItem>
                <Avatar /> My account
             </MenuItem>

             <MenuItem>
                <ListItemIcon>
                   <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
             </MenuItem>
             <Divider />
             <MenuItem>
                <ListItemIcon>
                   <Logout fontSize="small" />
                </ListItemIcon>
                Logout
             </MenuItem>
             <LanguageSwitcher/>
          </Menu>

       </AppBar>

   )

}