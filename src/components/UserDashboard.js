import React from 'react';
import { Box,Button ,Card , CardContent,CardMedia, Typography, Drawer, CssBaseline, Toolbar, AppBar, IconButton } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import RecentBookings from '../components/RecentBookings';
import FavoriteSpots from '../components/FavoriteSpots';
import AccountDetails from '../components/AccountDetails';
import VerticalNavBar from '../components/VerticalnavBar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import "../App.css";

const drawerWidth = 240;

const UserDashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            User Dashboard
          </Typography>
          <div>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <VerticalNavBar />
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<WelcomeMessage />} />
          <Route path="recent" element={<RecentBookings />} />
          <Route path="favorites" element={<FavoriteSpots />} />
          <Route path="account" element={<AccountDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Box>
    </Box>
  );
};

const WelcomeMessage = () => (
  <Card variant="outlined">
    <CardMedia
      component="img"
      height="140"
      image="https://webbylab.com/wp-content/uploads/2023/03/1-1.png" // Replace this with your image URL
      alt="Reservation"
    />
    <CardContent>
      <Typography variant="h4" gutterBottom>
        Need a Reservation
      </Typography>
      <Typography variant="body1">
        It looks like you don't have any upcoming reservations. Book now to secure your spot!
      </Typography>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Book Now
      </Button>
    </CardContent>
  </Card>
);

export default UserDashboard;
