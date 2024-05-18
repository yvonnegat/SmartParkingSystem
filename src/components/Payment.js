// Payment.js
import React from 'react';
import { Grid, TextField,  } from '@mui/material';

const Payment = ({ reservation, handleChange }) => {
  return (
    <Grid container spacing={2}>
      {reservation.paymentMethod === 'creditCard' && (
        <>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Card Number"
              name="cardNumber"
              fullWidth
              value={reservation.cardNumber}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="Expiration Date"
              name="expirationDate"
              type="month"
              fullWidth
              value={reservation.expirationDate}
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="CVV"
              name="cvv"
              fullWidth
              value={reservation.cvv}
              onChange={handleChange}
              required
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Payment;
