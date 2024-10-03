// src/context/AuthContext.jsx
import React, { createContext, useState } from 'react';

export const  MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Logic for logging in (e.g., API call)
    setUser(userData);
  };

  const logout = () => {
    // Logic for logging out
    setUser(null);
  };

  return (
    <MyContext.Provider value={{ user, login, logout }}>
      {children}
    </MyContext.Provider>
  );
};
