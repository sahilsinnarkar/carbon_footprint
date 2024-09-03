import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './Sidebar.js';
import Sidebar from './components/Sidebar';
import EmissionData from './components/EmissionData';
import HomePage from './components/HomePage';
import EmissionFactors from './components/EmissionFactors';
import ActivityData from './components/ActivityData';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/emission-data" element={<EmissionData />} />
            <Route path="/emission-factors" element={<EmissionFactors />} />
            <Route path="/activity-data" element={<ActivityData />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
