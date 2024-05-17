// parkingmap.js
import React, { useState, useEffect } from 'react';
import MapContainer from './MapContainer';
import ParkingSpot from './ParkingSpot';
import TopBar from './TopBar';
import BottomNavbar from './BottomNavbar';
import Button from '@mui/material/Button';
import BottomTopBar from './BottomTopBar';
import '../App.css'; // Import CSS file for styling

const Parkingmap = () => {
  const [parkingSpots, setParkingSpots] = useState([]);

  useEffect(() => {
    const fetchParkingSpots = async () => {
      try {
        // Simulating fetching data from an API
        const response = await fetchDummyData();
        // Assuming response is an array of parking spots
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
          { id: 1, name: 'Parking Spot 1', availability: 'Available', price: 10 },
          { id: 2, name: 'Parking Spot 2', availability: 'Unavailable', price: 15 },
          { id: 3, name: 'Parking Spot 3', availability: 'Available', price: 12 },
          // Adding more dummy data...
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

  return (
    <div className="app">
      <TopBar />
      <BottomTopBar/>
      <br/>
      <div className="main-content">
        <div className="left-side">
            <div className='sort-buttons'>
                <Button variant="contained" onClick={handleSortByCheapest}>Sort by Cheapest</Button>
                <br></br>
                <Button variant="contained" onClick={handleSortByNearest}>Sort by Nearest</Button>
            </div>
            <div className="parking-spot-list">
                {parkingSpots.map(spot => (
                    <ParkingSpot key={spot.id} spot={spot} />
                ))}
            </div>
        </div>
        <MapContainer parkingSpots={parkingSpots} />
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Parkingmap;