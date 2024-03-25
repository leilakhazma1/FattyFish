import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import BreakingFish from '../pages/BreakingFish';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/" element={<BreakingFish />} />
    </Routes>
  );
}

export default AppRoutes;
