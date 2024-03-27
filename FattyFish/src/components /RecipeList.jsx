import React, { useState, useEffect } from 'react';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('../FattyFish.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => (
        <button key={recipe.recipe_name}>{recipe.recipe_name}</button>
      ))}
    </div>
  );
};

export default RecipeList;
