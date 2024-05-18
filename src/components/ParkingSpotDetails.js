import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, Card, CardMedia } from '@mui/material';
import TopBar from './TopBar';
import BottomTopBar from './BottomTopBar';

const ParkingSpotDetails = () => {
  return (
    <div>
      {/* Top Bar */}
      <TopBar />
      <BottomTopBar />

      {/* Main Content */}
      <Container maxWidth="md" sx={{ marginTop: 2, marginBottom: 2  }}>
        {/* Parking Spot Image */}
        <Card>
          <CardMedia
            component="img"
            height="300"
            image="https://lh3.googleusercontent.com/Jn1yVrH9H0QZJDLb-tCb9cidX3GgE9osNq9e9gNBKP3rKLFUbuhEhOeOve2PaItB2akYwMdG3w2JvvV-ONrh1ydelbY"
            alt="Parking Spot"
          />
        </Card>

        {/* Availability Status Section */}
        <section>
          <h2>Availability</h2>
          <p>Status: <span style={{ color: 'green' }}>Available</span></p>
        </section>

        {/* Make Reservation Button */}
        <section>
          <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>Check Availability</Button>
          <Button variant="contained" color="primary">Book Now</Button>
        </section>

        {/* Bottom Bar */}
        
      </Container>
      <AppBar position="static" sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
              &copy; 2024 Smart Parking System. All rights reserved.
            </Typography>
          </Toolbar>
        </AppBar>
    </div>
  );
};

export default ParkingSpotDetails;
