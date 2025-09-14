// src/components/Navbar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = ({ isActive }) => ({
    margin: '0 1rem',
    textDecoration: 'none',
    color: isActive ? '#007bff' : '#333',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      padding: '1rem 2rem',
      borderBottom: '1px solid #ddd',
      backgroundColor: '#f8f9fa',
      flexWrap: 'wrap',
    }}>
      <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff', textDecoration: 'none', marginRight: '2rem' }}>
        DisasterPrep
      </Link>
      <NavLink to="/" style={linkStyle} end>
        Home
      </NavLink>
      <NavLink to="/modules" style={linkStyle}>
        Modules
      </NavLink>
      <NavLink to="/map" style={linkStyle}>
        Hazard Map
      </NavLink>
      <NavLink to="/simulations" style={linkStyle}>
        Simulations
      </NavLink>
      <NavLink to="/admin" style={linkStyle}>
        Admin Dashboard
      </NavLink>
    </nav>
  );
};

export default Navbar;
