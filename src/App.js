import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import ListComponent from './Components/ListComponent';

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
      <ListComponent activities={activities} />
    </div>
  );
}

export default App;
