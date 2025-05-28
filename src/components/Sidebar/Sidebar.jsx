import React from 'react';
import './Sidebar.css';
import navLinks from '../../data/navLinks';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>General</h2>
      <ul>
        {navLinks.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
