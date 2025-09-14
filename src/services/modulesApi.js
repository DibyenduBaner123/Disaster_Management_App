// src/services/modulesApi.js
import { apiClient } from './apiClient';

export const fetchModules = () => apiClient.get('/api/modules');

export const fetchModuleById = (id) => apiClient.get(`/api/modules/${id}`);

// Add create, update, delete if needed
