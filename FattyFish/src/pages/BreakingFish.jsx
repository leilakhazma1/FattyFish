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
      <div className="video-container">
      <iframe
          width="320"  
          height="180" 
          src="https://www.youtube.com/embed/GQJ0Qufe2So?start=45"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
    
      </div>
    
  );
}

export default BreakingFish;