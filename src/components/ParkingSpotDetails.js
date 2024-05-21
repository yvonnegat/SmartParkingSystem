// ParkingSpotDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Button, Card, CardMedia } from '@mui/material';
import TopBar from './TopBar';
import BottomTopBar from './BottomTopBar';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';



// Mock data for demonstration purposes
const mockParkingSpots = [
  { id: '1', name: 'Spot 1', availability: 'Available', price: 5, image: 'https://example.com/image1.jpg' },
  { id: '2', name: 'Spot 2', availability: 'Unavailable', price: 7, image: 'https://example.com/image2.jpg' },
  { id: '3', name: 'Spot 3', availability: 'Available', price: 6, image: 'https://example.com/image3.jpg' },
];

const ParkingSpotDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Find the parking spot by id
  const spot = mockParkingSpots.find(spot => spot.id === id);

  if (!spot) {
    return <div>Parking spot not found</div>;
  }

  return (
    <div>
      {/* Top Bar */}
      <TopBar />
      <BottomTopBar />

      {/* Main Content */}
      <Container maxWidth="md" sx={{ marginTop: 2, marginBottom: 2 }}>
        {/* Parking Spot Image */}
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={spot.image}
            alt="Parking Spot"
          />
        </Card>

        {/* Availability Status Section */}
        <section>
          <h2>{spot.name}</h2>
          <p>Status: <span style={{ color: spot.availability === 'Available' ? 'green' : 'red' }}>{spot.availability}</span></p>
          <p>Price: ${spot.price}/hour</p>
        </section>

        {/* Make Reservation Button */}
        <section>
          <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>Check Availability</Button>
          <Button variant="contained" onClick={() => navigate('/reservation')}  color="primary">Book Now</Button>
        </section>

        {/* Bottom Bar */}
      </Container>
      <Footer/>
    </div>
  );
};

export default ParkingSpotDetails;
