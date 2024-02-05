// FarmerDashboard.js
import React from 'react';
import Weather from './Weather';

const FarmerDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Farmer Dashboard</h2>
      <p className="text-md mb-4">Track precipitation and temperature trends for better planning.</p>
      <Weather city="YOUR_FARM_LOCATION" userType="farmer" />
    </div>
  );
};

export default FarmerDashboard;
