// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInSide from './components/sign-in-side';
import SignUp from './components/signup';
import LandingPage from './components/landingpage';
import Parkingmap from './components/parkingmap';
import UserDashboard from './components/UserDashboard';
import ReservationPage from './components/ReservationPage';
import ParkingSpotDetails from './components/ParkingSpotDetails';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/parkingmap" element={<Parkingmap />} />
        <Route path="/dashboard/*" element={<UserDashboard />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path = '/details' element = {<ParkingSpotDetails/>} />
        <Route path="/admin" element={<Dashboard />} />
        
      </Routes>
    </Router>
  );
}

export default App;
