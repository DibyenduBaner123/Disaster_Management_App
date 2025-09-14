// src/components/Map/HazardMarker.js
import React from 'react';
import { Marker, Popup } from 'react-leaflet';

const HazardMarker = ({ position, description }) => {
  return (
    <Marker position={position}>
      <Popup>{description}</Popup>
    </Marker>
  );
};

export default HazardMarker;

