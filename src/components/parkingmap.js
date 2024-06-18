import React, { useState, useEffect } from 'react';
import MapContainer from './MapContainer';
import ParkingSpot from './ParkingSpot';
import TopBar from './TopBar';
import Button from '@mui/material/Button';
import BottomTopBar from './BottomTopBar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import '../App.css';
import Footer from './Footer';

const Parkingmap = () => {
  const [parkingSpots, setParkingSpots] = useState([]);
  const [routeStart, setRouteStart] = useState(null);
  const [routeEnd, setRouteEnd] = useState(null);

  useEffect(() => {
    const fetchParkingSpots = async () => {
      try {
        const response = await fetchDummyData();
        setParkingSpots(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchParkingSpots();
  }, []);

  const fetchDummyData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = [
          { id: 1, name: 'Parking Spot 1', availability: 'Available', price: 10, latitude: -1.286389, longitude: 36.817223 },
          { id: 2, name: 'Parking Spot 2', availability: 'Unavailable', price: 15, latitude: -1.28645, longitude: 36.81728 },
          { id: 3, name: 'Parking Spot 3', availability: 'Available', price: 12, latitude: -1.287, longitude: 36.818 },
        ];
        resolve(data);
      }, 1000);
    });
  };

  const handleSortByCheapest = () => {
    // Logic to sort parking spots by cheapest
  };

  const handleSortByNearest = () => {
    // Logic to sort parking spots by nearest
  };

  const handleSetStart = (latitude, longitude) => {
    setRouteStart([latitude, longitude]);
  };

  const handleSetEnd = (latitude, longitude) => {
    setRouteEnd([latitude, longitude]);
  };

  return (
    <div className="app">
      <TopBar />
      <BottomTopBar />
      <Container className="main-content">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} className="left-side">
            <Box className="sort-buttons">
              <Button variant="contained" onClick={handleSortByCheapest} fullWidth>Sort by Cheapest</Button>
              <Button variant="contained" onClick={handleSortByNearest} fullWidth>Sort by Nearest</Button>
            </Box>
            <Box className="parking-spot-list">
              {parkingSpots.map(spot => (
                <ParkingSpot 
                  key={spot.id} 
                  spot={spot} 
                  setStart={handleSetStart} 
                  setEnd={handleSetEnd} 
                />
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <MapContainer 
              parkingSpots={parkingSpots} 
              routeStart={routeStart} 
              routeEnd={routeEnd} 
            />
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
};

export default Parkingmap;
