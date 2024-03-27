import React from 'react';
import '../styles/Home.css';
import coheranceImage from '../assets/nocoherance.png'; 

function Homepage() {
  return (
    <div className="Homepage">
      <div className="content">
        <h1> A Homage to the Fatty Fish</h1>
        <p> A fish shaped love letter; </p>
        <p> A guide on how to source, cook and eat fish </p>
        <p> My heart is fish shaped.</p>
        <p> My blood is salty and my hair floats in the water. </p> 
        <p> Morcheeba’s “The Sea” narrates my summer. </p>
      </div>
      <img src={coheranceImage} alt="Hat" className="coherance-image" />
    </div>
  );
}

export default Homepage;

