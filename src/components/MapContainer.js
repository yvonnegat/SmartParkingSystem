//MapContainer.js
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS for styles
import React from 'react';
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';

const MapContainer = () => {
  return (
    <LeafletMap center={[-1.286389, 36.817223]} zoom={13} style={{ width: '100%', height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </LeafletMap>
  );
};

export default MapContainer;
