// ParkingSpot.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import "../App.css"

const ParkingSpot = ({ spot }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/parking-spot/${spot.id}`);
  };

  return (
    <div className='parkingSpots'>
      <Card variant="outlined" sx={{ minWidth: 275, marginBottom: 2 }} onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {spot.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Availability: {spot.availability}
          </Typography>
          <Typography variant="body2">
            Price: ${spot.price}/hour
          </Typography>
          <Button variant="contained" onClick={(e) => { e.stopPropagation(); navigate('/reservation'); }}>
            Book Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ParkingSpot;
