import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const RecentBookings = () => {
  const bookings = [
    { date: '2024-05-15', location: 'Parking Spot A', status: 'Completed' },
    { date: '2024-05-14', location: 'Parking Spot B', status: 'Cancelled' },
    // Sample data...
  ];

  return (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="h6" gutterBottom>
        Recent Bookings
      </Typography>
      <List>
        {bookings.map((booking, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={booking.location}
              secondary={`Date: ${booking.date} - Status: ${booking.status}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default RecentBookings;
