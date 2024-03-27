import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { UserProvider } from './context/UserContext'; 
import './styles/Home.css';


function App() {
  return (
    <UserProvider>
      <div>
        <AppRoutes />
      </div>
    </UserProvider>
  );
}

export default App;
