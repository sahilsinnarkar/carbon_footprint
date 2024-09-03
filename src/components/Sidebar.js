import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/emission-data">Emmision  Data</Link></li>
        <li><Link to="/emission-factors">Emission Factors</Link></li>
        <li><Link to="/activity-data">Activity Data</Link></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
