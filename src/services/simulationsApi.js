// src/services/simulationsApi.js
import { apiClient } from './apiClient';

export const fetchSimulations = () => apiClient.get('/api/simulations');
export const fetchSimulationById = (id) => apiClient.get(`/api/simulations/${id}`);
// Add POST for simulation result submissions if desired
