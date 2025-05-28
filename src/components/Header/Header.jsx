import React from 'react';
import './Header.css';
import avatar from '../../assets/avatar.png';

function Header() {
  return (
    <div className="header">
      <h1>Healthcare.</h1>
      <input type="text" placeholder="Search..." />
      <div className="header-icons">
        <span>🔔</span>
        <img src={avatar} alt="User" className="avatar" />
        <button className="add-button">+</button>
      </div>
    </div>
  );
}

export default Header;
