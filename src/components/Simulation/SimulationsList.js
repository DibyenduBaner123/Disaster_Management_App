// src/components/Simulations/SimulationsList.js
import React from 'react';

const sampleSimulations = [
  {
    id: 1,
    title: 'Flood Evacuation Drill',
    description: 'Simulate evacuation decisions during a flood emergency.',
  },
  {
    id: 2,
    title: 'Earthquake Response Exercise',
    description: 'Practice safety actions during an earthquake.',
  },
  // Add more simulations as needed
];

const SimulationsList = ({ onSelect }) => {
  return (
    <div style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>
      <h1>Available Disaster Simulations</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {sampleSimulations.map(sim => (
          <li
            key={sim.id}
            style={{ marginBottom: '1.5rem', cursor: 'pointer', color: '#007bff' }}
            onClick={() => onSelect(sim.id)}
          >
            <h3>{sim.title}</h3>
            <p>{sim.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimulationsList;
