// src/components/AdminDashboard/ReportExporter.js
import React from 'react';

const mockReportData = [
  { className: 'Class 5A', module: 'Flood Preparedness', completionRate: 75, averageScore: 82 },
  { className: 'Class 6B', module: 'Earthquake Response', completionRate: 60, averageScore: 70 },
  { className: 'Class 7C', module: 'Fire Safety', completionRate: 90, averageScore: 88 },
];

const ReportExporter = () => {
  // Convert JSON data to CSV string
  const convertToCSV = (data) => {
    const header = Object.keys(data[0]).join(',');
    const rows = data.map(row => 
      Object.values(row).map(val => `"${val}"`).join(',')
    );
    return [header, ...rows].join('\n');
  };

  const downloadCSV = () => {
    if (mockReportData.length === 0) {
      alert('No data to export');
      return;
    }
    const csv = convertToCSV(mockReportData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'readiness_report.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
      <h1>Report Exporter</h1>
      <p>This tool allows exporting readiness reports as CSV files.</p>
      <button onClick={downloadCSV} style={{ padding: '10px 20px', fontSize: '1rem' }}>
        Export Readiness Report CSV
      </button>
      <h2 style={{ marginTop: '2rem' }}>Preview</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th>Class</th>
            <th>Module</th>
            <th>Completion Rate (%)</th>
            <th>Average Score (%)</th>
          </tr>
        </thead>
        <tbody>
          {mockReportData.map((report, idx) => (
            <tr key={idx}>
              <td>{report.className}</td>
              <td>{report.module}</td>
              <td>{report.completionRate}</td>
              <td>{report.averageScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportExporter;
