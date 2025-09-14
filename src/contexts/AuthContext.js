// src/contexts/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Initial value can include more fields as needed
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Example state: you may want to persist this in localStorage/cookies
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
    role: null, // e.g., "admin", "teacher", "student"
  });

  const login = (userInfo) => {
    setAuth({
      isAuthenticated: true,
      user: userInfo.user,
      role: userInfo.role,
    });
  };

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      user: null,
      role: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for consuming context
export const useAuth = () => useContext(AuthContext);
