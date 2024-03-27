import React, { useState, useEffect } from 'react';
import { Button, Modal, Typography, TextField, Box, Container } from '@mui/material';

const RecipeList = () => {
  // State variables to manage recipes, selected recipe, modal visibility, and comments
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [comments, setComments] = useState('');

  // Fetch recipes from JSON file when component mounts
  useEffect(() => {
    fetch('../FattyFish.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  // Close the modal and reset state variables
  const handleClose = () => {
    setShowModal(false);
    setSelectedRecipe(null);
    setComments('');
  };

  // Display selected recipe in modal
  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  // Update comments state as user types
  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  // Log comments and close modal when submitting
  const handleSubmitComments = () => {
    console.log('Comments:', comments);
    handleClose();
  };

  // Render recipe list with buttons to view recipes
  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '80vh', overflowY: 'auto' }}>
        {recipes.map(recipe => (
          <Box key={recipe.recipe_name} p={2} borderRadius={5} bgcolor="background.paper" color="text.primary" sx={{ '&:focus': { outline: 'none' } }}>
            <Typography variant="h5" color="text.primary" sx={{ fontFamily: 'Sorts Mill Goudy, serif', fontSize: '1.5rem' }}>{recipe.recipe_name}</Typography>
            <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Sorts Mill Goudy, serif', fontSize: '1rem' }}>Serves: {recipe.serves || 4}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleViewRecipe(recipe)}
              sx={{
                fontFamily: 'Sorts Mill Goudy, serif',
                color: 'black',
                bgcolor: 'white',
                mt: 1,
                '&:hover': { bgcolor: 'white' },
                '&:active': { bgcolor: 'white' },
                '&:focus': { outline: 'none' },
              }}
            >
              View Recipe
            </Button>
          </Box>
        ))}
      </Box>

      {/* Modal to display selected recipe details */}
      <Modal open={showModal} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', maxWidth: '800px', maxHeight: '80vh', overflowY: 'auto', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography variant="h5" color="text.primary" gutterBottom>{selectedRecipe?.recipe_name}</Typography>
          <Typography variant="body1" color="text.primary" gutterBottom>Serves: {selectedRecipe?.serves || 4}</Typography>
          <Typography variant="h6" color="text.primary" gutterBottom>Ingredients:</Typography>
          {selectedRecipe?.ingredients && (
            <ul style={{ paddingLeft: '0', textAlign: 'left' }}>
              {selectedRecipe.ingredients.map(ingredient => (
                <li key={ingredient.name}>
                  <Typography variant="body2" color="text.primary">
                    {`${ingredient.name.charAt(0).toUpperCase()}${ingredient.name.slice(1).replace(/_/g, ' ')}: ${ingredient.measurement}`}
                  </Typography>
                </li>
              ))}
            </ul>
          )}
          <Typography variant="body1" color="text.primary" gutterBottom>Instructions:</Typography>
          <ol>
            {selectedRecipe?.instructions.map((instruction, index) => (
              <Typography key={index} variant="body1" color="text.primary" component="li">{instruction}</Typography>
            ))}
          </ol>
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
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button onClick={handleClose} color="primary">Close</Button>
            <Button onClick={handleSubmitComments} variant="contained" color="primary">Submit</Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default RecipeList;
