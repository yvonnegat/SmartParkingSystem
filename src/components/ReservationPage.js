// ReservationPage.js
import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Grid, MenuItem } from '@mui/material';
import Payment from './Payment';
import Summary from './summary';
import TopBar from './TopBar';


const ReservationPage = () => {

  const [reservation, setReservation] = useState({
    name: '',
    email: '',
    phone: '',
    startTime: '',
    endTime: '',
    paymentMethod: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Reservation Details:', reservation);
  };

  const confirm = () => {
    alert(`confirming now...`);
  };

  return (
<div>
    <TopBar/>
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Make a Reservation
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* User Information */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                value={reservation.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                value={reservation.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone"
                name="phone"
                fullWidth
                value={reservation.phone}
                onChange={handleChange}
                required
              />
            </Grid>
            
            {/* Time Selection */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Start Time"
                name="startTime"
                type="datetime-local"
                fullWidth
                value={reservation.startTime}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="End Time"
                name="endTime"
                type="datetime-local"
                fullWidth
                value={reservation.endTime}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            
            {/* Payment Method */}
            <Grid item xs={12}>
              <TextField
                select
                label="Payment Method"
                name="paymentMethod"
                fullWidth
                value={reservation.paymentMethod}
                onChange={handleChange}
                required
              >
                <MenuItem value="creditCard">Credit Card</MenuItem>
                <MenuItem value="paypal">PayPal</MenuItem>
              </TextField>
            </Grid>
            
            {/* Payment Details */}
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
            
            {/* Payment Component */}
            <Grid item xs={12}>
              <Payment reservation={reservation} handleChange={handleChange} />
            </Grid>
            
            {/* Summary */}
            <Grid item xs={12}>
              <Summary reservation={reservation} />
            </Grid>
            
            <Grid item xs={12}>
              <Button type="submit" variant="contained" onClick={confirm} color="primary">
                Confirm Reservation
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
</div>
  );
};

export default ReservationPage;
