// src/components/Common/Notification.js
import React, { useEffect } from 'react';

const Notification = ({ message, type = 'info', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const backgroundColors = {
    info: '#007bff',
    success: '#28a745',
    error: '#dc3545',
    warning: '#ffc107',
  };

  const bgColor = backgroundColors[type] || backgroundColors.info;

  return (
    <div style={{
      position: 'fixed',
      top: 20,
      right: 20,
      padding: '1rem 1.5rem',
      backgroundColor: bgColor,
      color: '#fff',
      borderRadius: 4,
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
      zIndex: 1000,
    }}>
      {message}
    </div>
  );
};

export default Notification;
