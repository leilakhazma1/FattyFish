import React, { useState, useEffect } from 'react';
import { Button, Modal, Typography, TextField, Box, Container } from '@mui/material';

const RecipeList = () => {
  // State to store the list of recipes
  const [recipes, setRecipes] = useState([]);
  // State to store the currently selected recipe
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);
  // State to store the comments/suggestions for the recipe
  const [comments, setComments] = useState('');

  // Fetch recipes data from the server on component mount
  useEffect(() => {
    fetch('../FattyFish.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  // Close the modal and reset state when the modal is closed
  const handleClose = () => {
    setShowModal(false);
    setSelectedRecipe(null);
    setComments('');
  };

  // Display the selected recipe in the modal
  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  // Handle changes to the comments textarea
  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  // Handle submitting comments/suggestions
  const handleSubmitComments = () => {
    console.log('Comments:', comments);
    handleClose();
  };

  return (
    <Container>
      {/* Display the list of recipes as cards */}
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
        {recipes.map(recipe => (
          <Box key={recipe.recipe_name} p={2} border={1} borderRadius={5} bgcolor="background.paper" color="text.primary">
            <Typography variant="h5" color="text.primary">{recipe.recipe_name}</Typography>
            <Typography variant="body1" color="text.primary">Serves: {recipe.serves}</Typography>
            {/* Button to view the full recipe */}
            <Button variant="contained" color="primary" onClick={() => handleViewRecipe(recipe)} sx={{ color: 'black', bgcolor: 'white' }}>View Recipe</Button>
          </Box>
        ))}
      </Box>

      {/* Modal to display the full recipe */}
      <Modal open={showModal} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography variant="h5" color="text.primary" gutterBottom>{selectedRecipe?.recipe_name}</Typography>
          <Typography variant="body1" color="text.primary" gutterBottom>Serves: {selectedRecipe?.serves}</Typography>
          {/* Display ingredients list */}
          <Typography variant="h6" color="text.primary" gutterBottom>Ingredients:</Typography>
          {selectedRecipe?.ingredients && (
            <ul>
              {selectedRecipe.ingredients.map(ingredient => (
                <li key={ingredient.name}>{`${ingredient.name}: ${ingredient.measurement}`}</li>
              ))}
            </ul>
          )}
          {/* Display instructions list */}
          <Typography variant="body1" color="text.primary" gutterBottom>Instructions:</Typography>
          <ol>
            {selectedRecipe?.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          {/* Text field for entering comments/suggestions */}
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Comments/Suggestions"
            variant="outlined"
            value={comments}
            onChange={handleCommentsChange}
            sx={{ mt: 2 }}
          />
          {/* Buttons to close modal and submit comments */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button onClick={handleClose} color="primary" sx={{ color: 'black', bgcolor: 'white', mr: 1 }}>Close</Button>
            <Button onClick={handleSubmitComments} variant="contained" color="primary" sx={{ color: 'black', bgcolor: 'white' }}>Submit</Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default RecipeList;
