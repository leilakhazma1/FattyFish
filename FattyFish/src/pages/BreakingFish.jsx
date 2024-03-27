import React from 'react';
import '../styles/Home.css';
import FishAnatomy from '../components /FishAnatomy';
import coheranceImage from '../assets/nocoherance.png'; 
import videoThumbnail from '../assets/red.png'


function BreakingFish() {
  return (
    <div className="BreakingFish">
      <h1>Comprehensive Guide to Breaking Down Fish</h1>
      <FishAnatomy />
      <img src={coheranceImage} alt="Hat" className="coherance-image" />
      <div className="video-container">
        <a href="https://www.youtube.com/embed/GQJ0Qufe2So?start=45" target="_blank" rel="noreferrer">
          <img src={videoThumbnail} alt="Video Thumbnail" className="video-thumbnail" />
        </a>
      </div>
    </div>
  );
}

export default BreakingFish;