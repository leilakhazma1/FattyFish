import React from 'react';
import RecipeList from '../components /RecipeList';
import '../styles/Home.css';

function RecipeIndex() {
  return (
    <div className="RecipeIndex">
      <h2>Recipe Index</h2>
      
      <RecipeList />

      
    </div>
  );
}

export default RecipeIndex;