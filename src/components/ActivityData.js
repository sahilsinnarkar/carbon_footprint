import React, { useState } from 'react';
import '../styles/ActivityData.css';

function ActivityData() {
  const [formData, setFormData] = useState({
    date: '',
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
    emissions: '',
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
      const response = await fetch('http://localhost:5000/submit-activity-data', {
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
    <div className="activity-data">
      <h2>Activity Data Entry</h2>
      <form onSubmit={handleSubmit} className="activity-form">
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Drilling (m³):</label>
          <input
            type="number"
            name="drilling"
            value={formData.drilling}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Land Cleaning (ha):</label>
          <input
            type="number"
            name="landCleaning"
            value={formData.landCleaning}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Blasting (m³):</label>
          <input
            type="number"
            name="blasting"
            value={formData.blasting}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Excavation (m³):</label>
          <input
            type="number"
            name="excavation"
            value={formData.excavation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Surface Mining (ha):</label>
          <input
            type="number"
            name="surfaceMining"
            value={formData.surfaceMining}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Underground Mining (m³):</label>
          <input
            type="number"
            name="undergroundMining"
            value={formData.undergroundMining}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Crushing & Screening (m³):</label>
          <input
            type="number"
            name="crushingScreening"
            value={formData.crushingScreening}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Washing & Separation (m³):</label>
          <input
            type="number"
            name="washingSeparation"
            value={formData.washingSeparation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>On-Site Transport (km):</label>
          <input
            type="number"
            name="onSiteTransport"
            value={formData.onSiteTransport}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Off-Site Transport (km):</label>
          <input
            type="number"
            name="offSiteTransport"
            value={formData.offSiteTransport}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Tailings Management (m³):</label>
          <input
            type="number"
            name="tailingsManagement"
            value={formData.tailingsManagement}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Water Treatment (m³):</label>
          <input
            type="number"
            name="waterTreatment"
            value={formData.waterTreatment}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Revegetation (ha):</label>
          <input
            type="number"
            name="revegetation"
            value={formData.revegetation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Soil Stabilization (ha):</label>
          <input
            type="number"
            name="soilStabilization"
            value={formData.soilStabilization}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Emissions (tons CO2):</label>
          <input
            type="number"
            name="emissions"
            value={formData.emissions}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default ActivityData;
