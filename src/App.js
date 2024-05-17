// app.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInSide from './components/sign-in-side'; // Ensure the path is correct
import SignUp from './components/signup'; // Ensure the path is correct
import LandingPage from './components/landingpage';
import Parkingmap from './components/parkingmap';
import UserDashboard from './components/UserDashboard';
import RecentBookings from './components/RecentBookings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path = "/" element = {<LandingPage/>} />
        <Route path = "/parkingmap" element = {<Parkingmap/>}/>
        <Route path="/dashboard" element={<UserDashboard />} />
       <Route path='/recent' element = {<RecentBookings/>} />
      </Routes>
    </Router>
  );
}

export default App;