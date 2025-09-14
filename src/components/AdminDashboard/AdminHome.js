// src/components/AdminDashboard/AdminHome.js
import React from 'react';

const AdminHome = () => {
  // Mock summary data - replace with real API data
  const summary = {
    totalModules: 12,
    totalClasses: 8,
    scheduledDrills: 3,
    activeUsers: 120,
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
      <h1>Admin Dashboard Overview</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {/* Card component style */}
        {Object.entries(summary).map(([key, value]) => (
          <div
            key={key}
            style={{
              flex: '1 1 200px',
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: 8,
              backgroundColor: '#f9f9f9',
              textAlign: 'center',
              boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
            }}
          >
            <h3 style={{ textTransform: 'capitalize' }}>
              {key.replace(/([A-Z])/g, ' $1')}
            </h3>
            <p style={{ fontSize: '2rem', margin: 0, color: '#007bff' }}>{value}</p>
          </div>
        ))}
      </div>

      <section style={{ marginTop: '2rem' }}>
        <h2>Quick Actions</h2>
        <ul>
          <li><a href="/admin/modules">Manage Modules</a></li>
          <li><a href="/admin/drills">Schedule Drills</a></li>
          <li><a href="/admin/progress">View Progress Reports</a></li>
          <li><a href="/admin/settings">Settings</a></li>
        </ul>
      </section>
    </div>
  );
};

export default AdminHome;
