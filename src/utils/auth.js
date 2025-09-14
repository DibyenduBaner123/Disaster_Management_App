// src/utils/auth.js

// Store token securely (localStorage used here for demo)
const TOKEN_KEY = 'dp_auth_token';

// Save JWT token to localStorage
export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// Get JWT token from localStorage
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// Remove token (logout)
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

// Decode JWT payload (basic)
export const parseJwt = (token) => {
  if (!token) return null;
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join(''));
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
};

// Check if user has specific role in JWT token payload
export const hasRole = (token, roleName) => {
  const payload = parseJwt(token);
  if (!payload || !payload.roles) return false;
  return payload.roles.includes(roleName);
};
