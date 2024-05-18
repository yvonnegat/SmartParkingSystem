import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import nearparkinganimationData from '../nearbyparking.json';
import paymentanimationData from '../payment.json';
import reservationanimationData from '../reservation.json';
import { useNavigate } from 'react-router-dom';

import "../App.css";

const defaultOptions = (animationData) => ({
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
});



const LandingPage = () => {
  const navigate = useNavigate();
  const handleFindParking = () => {
    navigate('/parkingmap');
  }
  return (
    <div className='landingpage'>
      {/* Background video */}
      <video autoPlay loop muted className='background-video'>
        <source src='https://videos.pexels.com/video-files/5607782/5607782-uhd_3840_2160_30fps.mp4' type='video/mp4' />
      </video>

      {/* Content */}
      <div className='content'>
        <AppBar position="static" className='appbar'>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Park n Go
            </Typography>
            <Button color="inherit" component={Link} to="/signin">Sign In</Button>
            <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Box className='header'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '80vh',
              textAlign: 'center',
              color: 'white',
              padding: '0 20px',
            }}
          >
            <Typography variant="h3" gutterBottom>
              Welcome to Park n Go
            </Typography>
            <Typography variant="h5" align="center" gutterBottom>
              Easily find and book parking spots in your city with our smart parking system.
            </Typography>
            <TextField
              id="search-bar"
              label="Search for parking"
              variant="outlined"
              fullWidth
              sx={{ maxWidth: 600, backgroundColor: 'white', borderRadius: 1, marginBottom: 2 }}
            />
            <Button variant="contained" onClick={handleFindParking} color="primary">
              Find Parking
            </Button>
          </Box>
        </Container>
      </div>
      {/* Two-column layout */}
      <Container>
        <Grid container spacing={3} sx={{ marginTop: 4 }}>
          {/* Column with picture */}
          <Grid item xs={12} md={6}>
            <div>
              <Lottie
                options={{ animationData: nearparkinganimationData}}
                height={300} // Adjusted height
                width={300} // Adjusted width
              />
            </div>
          </Grid>
          {/* Column with description */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                padding: '20px',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
              }}
            >
              <Typography className='headings' variant="h4" gutterBottom>
                Discover Amazing Parking Spaces
              </Typography>
              <Typography  className='subheading'variant="body1" paragraph>
                Find parking anywhere, whether you're planning for now or for later. With our comprehensive database, you're never far from a convenient parking spot.
              </Typography>
              <Typography variant="body1" paragraph>
                Compare prices across different locations and pick the place that’s best for you. Our system provides real-time availability and pricing information.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ marginTop: 4 }}>
          {/* Column with description */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                padding: '20px',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
              }}
            >
              <Typography className='headings' variant="h4" gutterBottom>
                Book a Parking Spot
              </Typography>
              <Typography  className='subheading'variant="body1" paragraph>
                Book a space in just a few easy clicks.
              </Typography>
              <Typography variant="body1" paragraph>
                Enjoy the peace of mind knowing you have a reserved spot waiting for you. No more driving around in circles looking for parking.
              </Typography>
              <Typography variant="body1" paragraph>
                Our smart parking system integrates with navigation apps to provide seamless directions right to your spot.
              </Typography>
            </Box>
          </Grid>
          {/* Column with image */}
          <Grid item xs={12} md={6}>
            <div>
              <Lottie
                options={defaultOptions(reservationanimationData)}
                height={300} // Adjusted height
                width={300} // Adjusted width
              />
            </div>
          </Grid>
        </Grid>
        {/* Two-column layout */}
        <Grid container spacing={3} sx={{ marginTop: 4 }}>
          {/* Column with picture */}
          <Grid item xs={12} md={6}>
            <div>
              <Lottie
                options={defaultOptions(paymentanimationData)}
                height={300} // Adjusted height
                width={300} // Adjusted width
              />
            </div>
          </Grid>
          {/* Column with description */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                padding: '20px',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
              }}
            >
              <Typography className='headings' variant="h4" gutterBottom>
                Make Payment
              </Typography>
              <Typography className='subheading' variant="body1" paragraph>
                Save up to 50% off standard rates.
              </Typography>
              <Typography variant="body1" paragraph>
                Experience the convenience of cashless payments and exclusive discounts when you book through our platform.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LandingPage;
