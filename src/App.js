// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import ModulesList from './components/Modules/ModulesList';
import ModuleDetail from './components/Modules/ModuleDetail';
import MapView from './components/Map/MapView';
import SimulationsPage from './components/Simulations/SimulationsPage'; // Combine List + Exercise
import AdminDashboard from './components/AdminDashboard/AdminHome';

import { AuthProvider } from './contexts/AuthContext';
import { LocaleProvider } from './i18n/localeContext';

function App() {
  return (
    <AuthProvider>
      <LocaleProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modules" element={<ModulesList />} />
            <Route path="/modules/:id" element={<ModuleDetail />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/simulations" element={<SimulationsPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            {/* Add more routes as needed */}
          </Routes>
        </Router>
      </LocaleProvider>
    </AuthProvider>
  );
}

export default App;
