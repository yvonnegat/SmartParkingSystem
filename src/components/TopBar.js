// Components/TopBar
import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import logo from '../images/cypakLogo.png';
import { Typography } from '@mui/material';
import { AuthContext } from './AuthContext';

const TopBar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUser = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/signin');
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const getInitials = (user) => {
    if (user && user.firstName && user.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`;
    }
    return '';
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} alt="Cypak" style={{ height: '60px' }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Cypak
        </Typography>
        {user ? (
          <>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleUser}
            >
              <div>{getInitials(user)}</div>
            </IconButton>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </>
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
