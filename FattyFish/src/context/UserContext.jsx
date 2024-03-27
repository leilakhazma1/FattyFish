// UserContext.jsx
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userComments, setUserComments] = useState([]);

  return (
    <UserContext.Provider value={{ userComments, setUserComments }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
