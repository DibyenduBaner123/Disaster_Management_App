// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './styles/App.css'; // Global styles
import './styles/Navbar.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Register service worker for offline caching and PWA capabilities
serviceWorkerRegistration.register();
