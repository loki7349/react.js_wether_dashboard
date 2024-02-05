// EventPlannerDashboard.js
import React, { useState } from 'react';
import Weather from './Weather';

const EventPlannerDashboard = () => {
  const [eventDate, setEventDate] = useState('');

  const handleDateChange = (e) => {
    setEventDate(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Event Planner Dashboard</h2>
      <label className="block mb-2">Event Date:</label>
      <input
        type="date"
        value={eventDate}
        onChange={handleDateChange}
        className="border border-gray-300 rounded-md p-2 mb-4"
      />
      <Weather city="YOUR_EVENT_LOCATION" userType="eventPlanner" />
    </div>
  );
};

export default EventPlannerDashboard;
