import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import logo from '../images/cypakLogo.png'; // Update this path to the actual path of your logo file
import { Typography } from '@mui/material';

const TopBar = () => {
  const navigate = useNavigate();

  const handleUser = () => {
    navigate('/dashboard'); 
  };

  return (
    <AppBar position="static" >
      <Toolbar>
        <img src={logo} alt="Cypak" style={{ height: '60px', }} />
        <Typography sx={{fontSize:'20px'}}>
          Cypak
        </Typography>
        <div style={{ flexGrow: 1 }}></div>
        <div>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={handleUser}
          >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
