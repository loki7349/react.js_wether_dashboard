// TravelerDashboard.js
import React from 'react';
import Weather from './Weather';

const TravelerDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Traveler Dashboard</h2>
      <p className="text-md mb-4">Explore a 7-day weather forecast and find optimal travel days.</p>
      <Weather city="YOUR_TRAVEL_DESTINATION" userType="traveler" />
    </div>
  );
};

export default TravelerDashboard;
