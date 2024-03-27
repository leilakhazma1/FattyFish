import React from 'react';
import RecipeList from '../components /RecipeList';
import coheranceImage from '../assets/nocoherance.png'; 
import '../styles/Home.css';

function RecipeIndex() {
  return (
    <div className="RecipeIndex">

      <h2>Recipe Index</h2>
      <RecipeList />

      <img src={coheranceImage} alt="Hat" className="coherance-image" />

      
    </div>
  );
}

export default RecipeIndex;