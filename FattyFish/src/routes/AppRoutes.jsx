import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import BreakingFish from '../pages/BreakingFish';
import RecipeIndex from '../pages/RecipeIndex';
import NavBar from '../components/NavBar';

function AppRoutes() {
  return (
    <div className="app-container">
      <h1 className="page-title">Fatty Fish</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/breakingfish" element={<BreakingFish />} />
        <Route path="/recipeindex" element={<RecipeIndex />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
