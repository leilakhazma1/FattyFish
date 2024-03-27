import React from 'react';
import '../styles/RecipeIndex.css'; 
import RecipeList from '../components /RecipeList';

function RecipeIndex() {
  return (
    <div className="RecipeIndex">
      <h1>Recipe Index</h1>
      <RecipeList />

      
    </div>
  );
}

export default RecipeIndex;