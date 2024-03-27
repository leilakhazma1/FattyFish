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
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {recipes.map(recipe => (
        <div key={recipe.recipe_name} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h2>{recipe.recipe_name}</h2>
          <p>Serves: {recipe.serves}</p>
          <button style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>View Recipe</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
