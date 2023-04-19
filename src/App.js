import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import ListComponent from './Components/ListComponent';

function App() {
  const [activities, setActivities] = useState([]);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const storedActivities = JSON.parse(localStorage.getItem('activities')) || [];
    setActivities(storedActivities);
  }, []);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch('https://example-apis.vercel.app/api/weather');
        const data = await response.json();
        setWeather(data.isGoodWeather);
      } catch (error) {
        console.error(error);
      }
    }

    fetchWeather();
  }, []);


  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  function handleAddActivity(activity) {
    setActivities(prevActivities => [...prevActivities, activity]);
  }

  const isGoodWeather = weather.isGoodWeather || false;
  const filteredActivities = activities.filter(activity => activity.isForGoodWeather === isGoodWeather);

  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
      <ListComponent activities={filteredActivities} isGoodWeather={isGoodWeather} />
    </div>
  );
}

export default App;
