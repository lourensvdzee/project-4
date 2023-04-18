import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import ListComponent from './Components/ListComponent';

function App() {
  const [activities, setActivities] = useState([]);
  const isGoodWeather = true; // hardcoded for simplicity

  useEffect(() => {
    const storedActivities = JSON.parse(localStorage.getItem('activities')) || [];
    setActivities(storedActivities);
  }, []);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  function handleAddActivity(activity) {
    setActivities(prevActivities => [...prevActivities, activity]);
  }

  const filteredActivities = activities.filter(activity => activity.isForGoodWeather === isGoodWeather);

  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
      <ListComponent activities={filteredActivities} isGoodWeather={isGoodWeather} />
    </div>
  );
}

export default App;
