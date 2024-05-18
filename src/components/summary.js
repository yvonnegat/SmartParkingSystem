// Summary.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Summary = ({ reservation }) => {
  const { name, email, phone, startTime, endTime, paymentMethod, cardNumber } = reservation;

  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h6" gutterBottom>
        Reservation Summary
      </Typography>
      <Typography>Name: {name}</Typography>
      <Typography>Email: {email}</Typography>
      <Typography>Phone: {phone}</Typography>
      <Typography>Start Time: {new Date(startTime).toLocaleString()}</Typography>
      <Typography>End Time: {new Date(endTime).toLocaleString()}</Typography>
      <Typography>Payment Method: {paymentMethod}</Typography>
      {paymentMethod === 'creditCard' && <Typography>Card Number: **** **** **** {cardNumber.slice(-4)}</Typography>}
    </Box>
  );
};

export default Summary;
