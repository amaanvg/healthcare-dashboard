import React from 'react';
import healthData from '../../data/healthData';
import './HealthStatusCards.css';

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      {healthData.healthStatusCards.map((card, index) => (
        <div className="status-card" key={index}>
          <h3>{card.title}</h3>
          <p>{card.lastChecked}</p>
          <span className={`status ${card.status.toLowerCase().replace(" ", "-")}`}>
            {card.status}
          </span>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
