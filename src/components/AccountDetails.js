//components/AccountDetails.js
import React, { useState, useContext, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { AuthContext } from './AuthContext';
import axios from 'axios';

const AccountDetails = () => {
  const { user, setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        password: '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      const response = await axios.put('/api/auth/update', formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include token in Authorization header
        },
      });
      setUser(response.data.user);
      setMessage('Account updated successfully');
    } catch (error) {
      setMessage('Error updating account');
      console.error('Error updating account:', error);
    }
  };
  
  
  if (!user) {
    return <Typography>Loading user data...</Typography>;
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Update Account Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="New Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Update
        </Button>
      </form>
      {message && <Typography>{message}</Typography>}
    </Box>
  );
};

export default AccountDetails;
