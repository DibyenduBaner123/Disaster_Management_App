// src/components/AdminDashboard/ProgressMonitor.js
import React from 'react';

const mockProgressReports = [
  { className: 'Class 5A', module: 'Flood Preparedness', completionRate: 75, averageScore: 82 },
  { className: 'Class 6B', module: 'Earthquake Response', completionRate: 60, averageScore: 70 },
  { className: 'Class 7C', module: 'Fire Safety', completionRate: 90, averageScore: 88 },
  { className: 'Class 5A', module: 'Fire Safety', completionRate: 80, averageScore: 85 },
];

const ProgressMonitor = () => {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem' }}>
      <h1>Progress Monitoring</h1>
      {mockProgressReports.length === 0 ? (
        <p>No progress data available.</p>
      ) : (
        <table
          style={{ borderCollapse: 'collapse', width: '100%' }}
          border="1"
          cellPadding="8"
        >
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th>Class</th>
              <th>Module</th>
              <th>Completion Rate (%)</th>
              <th>Average Score (%)</th>
            </tr>
          </thead>
          <tbody>
            {mockProgressReports.map((report, index) => (
              <tr key={index}>
                <td>{report.className}</td>
                <td>{report.module}</td>
                <td>{report.completionRate}</td>
                <td>{report.averageScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProgressMonitor;
