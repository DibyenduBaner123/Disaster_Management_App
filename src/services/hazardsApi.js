// src/services/hazardsApi.js
import { apiClient } from './apiClient';

export const fetchHazards = () => apiClient.get('/api/hazards');

// Add create, update, delete, or filters as needed
