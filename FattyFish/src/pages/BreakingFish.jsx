import React from 'react';
import '../styles/Home.css';
import FishAnatomy from '../components /FishAnatomy';
import coheranceImage from '../assets/nocoherance.png'; 

function BreakingFish() {
  return (
    <div className="BreakingFish">
      <h1>Comprehensive Guide to Breaking Down Fish</h1>
      <FishAnatomy />
      <img src={coheranceImage} alt="Hat" className="coherance-image" />
    </div>
  );
}

export default BreakingFish;