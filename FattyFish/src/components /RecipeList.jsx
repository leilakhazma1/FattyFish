import React, { useState, useEffect } from 'react';
import { Button, Modal, Typography, TextField, Box, Container, IconButton } from '@mui/material';
import { Facebook, Twitter, Email } from '@mui/icons-material';
import { useUserContext } from '../context/UserContext';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [comments, setComments] = useState('');

  const { userComments, setUserComments } = useUserContext();

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

  // Add user's comment to the list and close the modal
  const handleSubmitComments = () => {
    setUserComments([...userComments, comments]);
    handleClose();
  };

  // Share recipe on the selected platform (console.log for demonstration)
  const shareRecipe = (platform) => {
    console.log(`Sharing recipe on ${platform}`);
  };

  return (
    <Container className="recipe-list-container">
      {/* Render recipe list */}
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
        <Box sx={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', maxWidth: '800px', maxHeight: '80vh', overflowY: 'auto', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography variant="h5" color="text.primary" gutterBottom>{selectedRecipe?.recipe_name}</Typography>
          <Typography variant="body1" color="text.primary" gutterBottom>Serves: {selectedRecipe?.serves || 4}</Typography>
          <Typography variant="h6" color="text.primary" gutterBottom>Ingredients:</Typography>
          {selectedRecipe?.ingredients && (
            <ul style={{ paddingLeft: '0', textAlign: 'left' }}>
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Sorts Mill Goudy, serif', fontSize: '1rem' }}>
                    {`${ingredient}`}
                  </Typography>
                </li>
              ))}
            </ul>
          )}
          <Typography variant="h6" color="text.primary" gutterBottom>Instructions:</Typography>
          {selectedRecipe?.instructions && (
            <ol>
              {selectedRecipe.instructions.map((instruction, index) => (
                <Typography key={index} variant="body1" color="text.primary" component="li" sx={{ fontFamily: 'Sorts Mill Goudy, serif', fontSize: '1rem' }}>
                  {instruction}
                </Typography>
              ))}
            </ol>
          )}
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Comments/Suggestions"
            variant="outlined"
            value={comments}
            onChange={handleCommentsChange}
            sx={{ mt: 2, fontFamily: 'Sorts Mill Goudy, serif', fontSize: '1rem', color: 'text.secondary' }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
            <Box sx={{ display: 'flex' }}>
              <IconButton onClick={() => shareRecipe('facebook')} aria-label="Share on Facebook">
                <Facebook />
              </IconButton>
              <IconButton onClick={() => shareRecipe('twitter')} aria-label="Share on Twitter">
                <Twitter />
              </IconButton>
              <IconButton onClick={() => shareRecipe('email')} aria-label="Share via Email">
                <Email />
              </IconButton>
            </Box>
            <Box>
              <Button onClick={handleClose} color="primary" sx={{ color: 'black', bgcolor: 'white', fontFamily: 'Sorts Mill Goudy, serif' }}>Close</Button>
              <Button onClick={handleSubmitComments} variant="contained" color="primary" sx={{ color: 'black', bgcolor: 'white', fontFamily: 'Sorts Mill Goudy, serif' }}>Submit</Button>
            </Box>
          </Box>
          {/* Display user comments */}
          {userComments.length > 0 && (
            <Box mt={2} p={2} bgcolor="background.default" borderRadius={5}>
              <Typography variant="h6" color="text.primary" gutterBottom sx={{ fontFamily: 'Sorts Mill Goudy, serif', fontSize: '1rem' }}>Comments and Suggestions:</Typography>
              {userComments.map((comment, index) => (
                <Typography key={index} variant="body1" color="text.primary" sx={{ fontFamily: 'Sorts Mill Goudy, serif', fontSize: '1rem' }}>
                  {comment}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default RecipeList;
