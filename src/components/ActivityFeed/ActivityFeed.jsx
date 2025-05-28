import React from 'react';
import './ActivityFeed.css';

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h2>Activity</h2>
      <p>3 appointments on this week</p>
      <div className="bar-chart">
        <div className="bar" style={{ height: '50px' }}></div>
        <div className="bar" style={{ height: '80px' }}></div>
        <div className="bar" style={{ height: '30px' }}></div>
        <div className="bar" style={{ height: '100px' }}></div>
      </div>
    </div>
  );
}

export default ActivityFeed;
