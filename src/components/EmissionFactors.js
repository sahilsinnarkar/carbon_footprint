import React, { useState } from 'react';
import axios from 'axios'; // Import axios to make HTTP requests
import '../styles/EmissionFactors.css';

function EmissionFactors() {
  const [formData, setFormData] = useState({
    drilling: '',
    landCleaning: '',
    blasting: '',
    excavation: '',
    surfaceMining: '',
    undergroundMining: '',
    crushingScreening: '',
    washingSeparation: '',
    onSiteTransport: '',
    offSiteTransport: '',
    tailingsManagement: '',
    waterTreatment: '',
    revegetation: '',
    soilStabilization: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/submit-emission-factors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      

      if (response.ok) {
        console.log('Data successfully submitted');
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="emission-factors">
      <h2>Emission Factors Data Entry</h2>
      <form onSubmit={handleSubmit} className="emission-form">
        <div className="form-group">
          <label>Drilling:</label>
          <input
            type="number"
            step="0.01"
            name="drilling"
            value={formData.drilling}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Land Cleaning:</label>
          <input
            type="number"
            step="0.01"
            name="landCleaning"
            value={formData.landCleaning}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Blasting:</label>
          <input
            type="number"
            step="0.01"
            name="blasting"
            value={formData.blasting}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Excavation:</label>
          <input
            type="number"
            step="0.01"
            name="excavation"
            value={formData.excavation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Surface Mining:</label>
          <input
            type="number"
            step="0.01"
            name="surfaceMining"
            value={formData.surfaceMining}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Underground Mining:</label>
          <input
            type="number"
            step="0.01"
            name="undergroundMining"
            value={formData.undergroundMining}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Crushing & Screening:</label>
          <input
            type="number"
            step="0.01"
            name="crushingScreening"
            value={formData.crushingScreening}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Washing & Separation:</label>
          <input
            type="number"
            step="0.01"
            name="washingSeparation"
            value={formData.washingSeparation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>On-Site Transport:</label>
          <input
            type="number"
            step="0.01"
            name="onSiteTransport"
            value={formData.onSiteTransport}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Off-Site Transport:</label>
          <input
            type="number"
            step="0.01"
            name="offSiteTransport"
            value={formData.offSiteTransport}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Tailings Management:</label>
          <input
            type="number"
            step="0.01"
            name="tailingsManagement"
            value={formData.tailingsManagement}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Water Treatment:</label>
          <input
            type="number"
            step="0.01"
            name="waterTreatment"
            value={formData.waterTreatment}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Revegetation:</label>
          <input
            type="number"
            step="0.01"
            name="revegetation"
            value={formData.revegetation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Soil Stabilization:</label>
          <input
            type="number"
            step="0.01"
            name="soilStabilization"
            value={formData.soilStabilization}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default EmissionFactors;
