import React, { useState, useEffect } from 'react';
import Form from './Components/Form';

function App() {
  const [activities, setActivities] = useState([]);

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

  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>
            {activity.name} (good weather: {activity.isForGoodWeather.toString()})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
