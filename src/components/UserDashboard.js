import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import RecentBookings from '../components/RecentBookings';
import FavoriteSpots from '../components/FavoriteSpots';
import AccountDetails from '../components/AccountDetails';

const UserDashboard = () => {
  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <RecentBookings />
        <FavoriteSpots />
        <AccountDetails />
      </Box>
    </Container>
  );
};

export default UserDashboard;
