import React from 'react';
import '../styles/HomePage.css';
import logo from '../assets/co2.png';

function HomePage() {
  return (
    <div className='home-container'>
      <div className='heading'>
        <img className='logo' src={logo} />
        <h1>Welcome to the Home Page</h1>
      </div>
      <p>
      India's coal mines significantly contribute to carbon emissions, creating challenges for sustainability and regulatory compliance. Our web application addresses this by providing a comprehensive platform that quantifies carbon footprints and offers AI-driven pathways to carbon neutrality. Through real-time monitoring and customizable emission factors, we empower coal mines to align with national climate goals and drive sustainable practices.</p>
    </div>
  );
}

export default HomePage;
