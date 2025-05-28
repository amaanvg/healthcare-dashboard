import React from 'react';
import healthData from '../../data/healthData';
import './AnatomySection.css';
import bodyImage from '../../assets/bodyImage.png';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <div className="image-container">
        <img src={bodyImage} alt="Human Anatomy" className="anatomy-image" />
        {healthData.anatomyIndicators.map((item, index) => (
          <div
            key={index}
            className="indicator"
            style={{
              top: item.position.top,
              left: item.position.left,
              backgroundColor: item.color,
            }}
          >
            {item.organ}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnatomySection;
