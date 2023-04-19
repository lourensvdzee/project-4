import useLocalStorageState from 'use-local-storage-state';
import React, { useEffect, useState } from 'react';
import Form from './Components/Form';
import ListComponent from './Components/ListComponent';

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", { defaultValue: [] });
  const [weather, setWeather] = useState(null);
  const [condition, setCondition] = useState('');
  const [temperature, setTemperature] = useState('');

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch("https://example-apis.vercel.app/api/weather");
        const data = await response.json();
        setWeather(data.isGoodWeather);
        setCondition(data.condition);
        setTemperature(data.temperature);
      } catch (error) {
        console.log(error);
      }
    }
    fetchWeather();
  }, []);

  function handleAddActivity(activity) {
    setActivities(prevActivities => [...prevActivities, activity]);
  }

  const filteredActivities = activities.filter(activity => activity.isForGoodWeather === weather);

  return (
    <div>
      <h1>{condition} {temperature} °C</h1>
      <Form onAddActivity={handleAddActivity} />
      <ListComponent activities={filteredActivities} isGoodWeather={weather} />
    </div>
  );
}

export default App;
