// src/services/adminApi.js
import { apiClient } from './apiClient';

export const assignModuleToClass = (moduleId, classId) =>
  apiClient.post('/api/admin/assign', { moduleId, classId });

export const scheduleDrill = (payload) =>
  apiClient.post('/api/admin/drills', payload);

export const fetchProgressReports = () =>
  apiClient.get('/api/admin/reports');

export const exportReports = () =>
  apiClient.get('/api/admin/export'); // Could be CSV, PDF etc.
