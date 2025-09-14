// src/components/Common/LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <div className="spinner" style={{
        width: '40px',
        height: '40px',
        margin: 'auto',
        border: '5px solid #ccc',
        borderTop: '5px solid #007bff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
