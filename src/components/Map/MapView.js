// src/components/Map/MapView.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const floodZone = [
  [20.3, 78.9],
  [20.35, 79.05],
  [20.4, 78.95],
  [20.38, 78.85],
];

const earthquakeZone = [
  [19.9, 78.7],
  [20.0, 78.8],
  [20.1, 78.7],
  [20.05, 78.6],
];

const fireHazards = [
  { id: 1, position: [20.25, 78.65], description: 'Fire hazard near school' },
  { id: 2, position: [20.2, 78.9], description: 'Forest fire risk area' },
];

const MapView = () => (
  <div style={{ height: '600px', width: '100%', margin: '1rem auto' }}>
    <MapContainer center={[20.3, 78.9]} zoom={10} scrollWheelZoom style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      <LayersControl position="topright">
        <LayersControl.Overlay checked name="Flood Zone">
          <Polygon positions={floodZone} pathOptions={{ color: 'blue', fillOpacity: 0.3 }}>
            <Popup>Flood Hazard Zone</Popup>
          </Polygon>
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Earthquake Zone">
          <Polygon positions={earthquakeZone} pathOptions={{ color: 'red', fillOpacity: 0.3 }}>
            <Popup>Earthquake Hazard Zone</Popup>
          </Polygon>
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Fire Hazard Points">
          <>
            {fireHazards.map(fire => (
              <Marker key={fire.id} position={fire.position}>
                <Popup>{fire.description}</Popup>
              </Marker>
            ))}
          </>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  </div>
);

export default MapView;
