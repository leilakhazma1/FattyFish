import React, { useState, useEffect } from 'react';
import { Button, Modal, Typography, TextField, Box, Container } from '@mui/material';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [comments, setComments] = useState('');

  useEffect(() => {
    fetch('../FattyFish.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setSelectedRecipe(null);
    setComments('');
  };

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmitComments = () => {
    console.log('Comments:', comments);
    handleClose();
  };

  return (
    <Container>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
        {recipes.map(recipe => (
          <Box key={recipe.recipe_name} p={2} border={1} borderRadius={5} bgcolor="background.paper" color="text.primary" sx={{ '&:focus': { outline: 'none' }, fontFamily: 'Sorts Mill Goudy, serif' }}>
            <Typography variant="h5" color="text.primary" sx={{ fontFamily: 'Sorts Mill Goudy, serif' }}>{recipe.recipe_name}</Typography>
            <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Sorts Mill Goudy, serif' }}>Serves: {recipe.serves}</Typography>
            <Button variant="contained" color="primary" onClick={() => handleViewRecipe(recipe)} sx={{ color: 'black', bgcolor: 'white', fontFamily: 'Sorts Mill Goudy, serif' }}>View Recipe</Button>
          </Box>
        ))}
      </Box>

      <Modal open={showModal} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', maxWidth: '800px', maxHeight: '80vh', overflowY: 'auto', bgcolor: 'background.paper', boxShadow: 24, p: 4, fontFamily: 'Sorts Mill Goudy, serif' }}>
          <Typography variant="h5" color="text.primary" gutterBottom sx={{ fontFamily: 'Sorts Mill Goudy, serif' }}>{selectedRecipe?.recipe_name}</Typography>
          <Typography variant="body1" color="text.primary" gutterBottom sx={{ fontFamily: 'Sorts Mill Goudy, serif' }}>Serves: {selectedRecipe?.serves}</Typography>
          <Typography variant="h6" color="text.primary" gutterBottom sx={{ fontFamily: 'Sorts Mill Goudy, serif' }}>Ingredients:</Typography>
          {selectedRecipe?.ingredients && (
            <ul style={{ paddingLeft: '0', textAlign: 'left', fontFamily: 'Sorts Mill Goudy, serif' }}>
              {selectedRecipe.ingredients.map(ingredient => (
                <li key={ingredient.name}>
                  <Typography variant="body2" color="text.primary" sx={{ fontFamily: 'Sorts Mill Goudy, serif' }}>
                    {`${ingredient.name.replace(/_/g, ' ').charAt(0).toUpperCase()}${ingredient.name.replace(/_/g, ' ').slice(1).toLowerCase()}: ${ingredient.measurement}`}
                  </Typography>
                </li>
              ))}
            </ul>
          )}
          <Typography variant="body1" color="text.primary" gutterBottom sx={{ fontFamily: 'Sorts Mill Goudy, serif' }}>Instructions:</Typography>
          <ol>
            {selectedRecipe?.instructions.map((instruction, index) => (
              <Typography key={index} variant="body1" color="text.primary" component="li" sx={{ fontFamily: 'Sorts Mill Goudy, serif' }}>{instruction}</Typography>
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
            sx={{ mt: 2, fontFamily: 'Sorts Mill Goudy, serif' }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button onClick={handleClose} color="primary" sx={{ color: 'black', bgcolor: 'white', mr: 1, fontFamily: 'Sorts Mill Goudy, serif' }}>Close</Button>
            <Button onClick={handleSubmitComments} variant="contained" color="primary" sx={{ color: 'black', bgcolor: 'white', fontFamily: 'Sorts Mill Goudy, serif' }}>Submit</Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default RecipeList;
