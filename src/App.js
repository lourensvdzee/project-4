import React, { useState } from 'react';
import Form from './Components/Form';

function App() {
  const [activities, setActivities] = useState([]);

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
