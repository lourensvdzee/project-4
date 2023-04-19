import useLocalStorageState from 'use-local-storage-state';
import React, { useEffect, useState } from 'react';
import Form from './Components/Form';
import ListComponent from './Components/ListComponent';

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", { defaultValue: [] });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch("https://example-apis.vercel.app/api/weather");
        const data = await response.json();
        setWeather(data.isGoodWeather);
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
      <Form onAddActivity={handleAddActivity} />
      <ListComponent activities={filteredActivities} isGoodWeather={weather} />
    </div>
  );
}
export default App;
