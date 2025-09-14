// src/services/apiClient.js
const API_BASE = process.env.REACT_APP_API_URL || '';

export const apiClient = {
  get: async (endpoint) => {
    const response = await fetch(`${API_BASE}${endpoint}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },
  post: async (endpoint, data) => {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },
  // Similarly, add put, delete, etc.
};
