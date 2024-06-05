import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import logo from '../images/cypakLogo.png'; 
import { Typography } from '@mui/material';

const TopBar = ({ user }) => {
  const navigate = useNavigate();

  const handleUser = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      // Handle login redirection
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} alt="Cypak" style={{ height: '60px' }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Cypak
        </Typography>
        {user ? (
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={handleUser}
          >
            {user.initials ? (
              <div>{user.initials}</div>
            ) : (
              <AccountCircle />
            )}
          </IconButton>
        ) : (
          <Button color="inherit" onClick={handleUser}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;