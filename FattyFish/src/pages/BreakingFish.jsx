import React from 'react';
import '../styles/Home.css';
import FishAnatomy from '../components /FishAnatomy';

function BreakingFish() {
  return (
    <div className="BreakingFish">
      <h1>Comprehensive Guide to Breaking Down Fish</h1>
      <FishAnatomy />
    </div>
  );
}

export default BreakingFish;