import React from 'react';
import RecipeList from '../components/RecipeList';
import '../styles/Home.css';

function RecipeIndex() {
  return (
    <div className="RecipeIndex">
      <h1>Recipe Index</h1>
      <div className="RecipeListContainer">
        <RecipeList />
      </div>
    </div>
  );
}

export default RecipeIndex;
