import React from 'react';
import '../styles/Home.css';
import coheranceImage from '../assets/nocoherance.png'; 


function Homepage() {
  return (
    <div className="Homepage">
      <div className="content">
        <h1> A Homage to the Fatty Fish</h1>
        <p></p>
        <p> A guide on how to source, cook and eat fish </p>
        <p> My heart is fish shaped.</p>
        <p> My blood is salty and my hair floats in the water. </p> 
        <p><a href="https://open.spotify.com/track/0xjkgYSzHjBZNvyUaC9cXX?si=f7cb5a758ea04cb5" target="_blank" rel="noopener noreferrer" className="link">Morcheeba’s “The Sea” narrates my summer.</a> </p>
      </div>
      <img src={coheranceImage} alt="Hat" className="coherance-image" />
      
     
    </div>
  );
}

export default Homepage;

