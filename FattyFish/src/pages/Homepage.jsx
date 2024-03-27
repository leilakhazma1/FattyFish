import React from 'react';
import LoginForm from '../components /LoginForm';
import '../styles/Home.css';

function Homepage() {
  return (
    <div className="Homepage">
      <h1> A Homage to the Fatty Fish</h1>
      <p> A fish shaped loved letter; </p>
      <p> A guide on how to source, cook and eat fish </p>
      <LoginForm /> 
    </div>
  );
}

export default Homepage;
