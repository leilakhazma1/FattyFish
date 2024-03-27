import React, { createContext, useState, useContext } from 'react';

// Create a new context object called UserContext
const UserContext = createContext();

// Functional component called UserProvider to manage userComments state
export const UserProvider = ({ children }) => {
  // State variable userComments and a function setUserComments to update it
  const [userComments, setUserComments] = useState([]);

  // Return the UserContext.Provider component with value set to userComments and setUserComments
  return (
    <UserContext.Provider value={{ userComments, setUserComments }}>
      {children}
    </UserContext.Provider>
  );
};

// Define a custom hook useUserContext to consume UserContext and return its value
export const useUserContext = () => useContext(UserContext);

