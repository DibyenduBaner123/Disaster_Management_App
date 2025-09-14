// src/components/Modules/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ src }) => {
  return (
    <div style={{ margin: '1rem 0' }}>
      <video controls width="100%" style={{ maxHeight: '400px' }}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
