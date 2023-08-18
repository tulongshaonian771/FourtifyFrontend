import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetUserLocation() {
  const [realLocation, setRealLocation] = useState(null);

  // Fetch the location and send to backend when the component mounts
  useEffect(() => {
    getLocationAndSend();
  }, []);

  async function getLocationAndSend() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  async function onLocationSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const timeStamp = position.timestamp;

    // Update the realLocation state with the received location data
    setRealLocation({ latitude, longitude, timeStamp });

    try {
      // Send the latitude and longitude to the Spring Boot backend using axios.post
      const data = { latitude, longitude, timeStamp };
      await axios.post('http://localhost:9090/api/saveLocation', data);
    } catch (error) {
      console.error('Error while fetching or sending location data:', error);
    }
  }

  function onLocationError(error) {
    console.error('Error while getting user location:', error);
  }

  return (
    <div>
    
      {/* Remove the "Get Location" button */}
      {/* {realLocation && (
        <div style={{ color: '#ffffff', textAlign: 'center', marginBottom: '100px' }}>
          <h2 style={{ color: '#ffffff' }}>Real Location:</h2>
          <p style={{ color: '#ffffff' }}>Latitude: {realLocation.latitude}</p>
          <p style={{ color: '#ffffff' }}>Longitude: {realLocation.longitude}</p>
          <p style={{ color: '#ffffff' }}>TimeStamp: {realLocation.timeStamp}</p>
        </div>
      )} */}
    </div>
  );
}
