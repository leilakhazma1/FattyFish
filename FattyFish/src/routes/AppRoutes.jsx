import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import BreakingFish from '../pages/BreakingFish';
import RecipeIndex from '../pages/RecipeIndex';


function AppRoutes() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/breakingfish" element={<BreakingFish />} />
        <Route path="/recipeindex" element={<RecipeIndex />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
