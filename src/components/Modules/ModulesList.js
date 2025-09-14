// src/components/Modules/ModulesList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ModulesList = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    fetch('/api/modules')
      .then(res => {
        if (!res.ok) throw new Error('Network response not ok');
        return res.json();
      })
      .then(data => {
        setModules(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading modules...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Disaster Preparedness Modules</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {modules.map(module => (
          <li key={module.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '0.5rem' }}>
            <Link to={`/modules/${module.id}`} style={{ fontSize: '1.2rem', color: '#007bff', textDecoration: 'none' }}>
              {module.title}
            </Link>
            <p>{module.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModulesList;
