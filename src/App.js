import useLocalStorageState from 'use-local-storage-state';
import React, { useEffect, useState } from 'react';
import Form from './Components/Form';
import ListComponent from './Components/ListComponent';
import fetchData from './Components/FetchApi';
import './index.css';

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", { defaultValue: [] });
  const [weather, setWeather] = useState(null);
  const [condition, setCondition] = useState('');
  const [temperature, setTemperature] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await fetchData()
        setWeather(data.isGoodWeather);
        setCondition(data.condition);
        setTemperature(data.temperature);
      } catch (error) {
        console.log(error);
      }
    }
    fetchWeather();
    const interval = setInterval(() => {
      fetchWeather();
    }, 5000);

    //clean-up function
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const header = document.querySelector('.header');
    switch (condition) {
      case '☁️':
      case '⛅':
      case '🌥':
        header.style.backgroundImage = `url('https://media.giphy.com/media/lOkbL3MJnEtHi/giphy.gif')`;
        break;
      case '❄️':
        header.style.backgroundImage = `url('https://media.giphy.com/media/9jvjuSSkMOYTyQfJji/giphy.gif')`;
        break;
      case '🌤️':
      case '☀️':
      case '🌞':
      case '🌝':
      case '🌤':
      case '🌥':
        header.style.backgroundImage = `url('https://media.giphy.com/media/YhMeFrW7jPegM/giphy.gif')`;
        break;
      case '🌦':
      case '🌧':
      case '🌨':
      case '💧':
      case '☔':
      case '🌧️':
        header.style.backgroundImage = `url('https://media.giphy.com/media/gRnSZSRzOJeG4/giphy.gif')`;
        break;
      case '⛈':
      case '🌩':
        header.style.backgroundImage = `url('https://media.giphy.com/media/o8A56JaNJQFSU/giphy.gif')`;
        break;
      default:
        header.style.backgroundImage = '';
    }
  }, [condition]);

  function handleAddActivity(activity) {
    setActivities(prevActivities => [...prevActivities, activity]);
  }

  function handleDeleteActivity(id) {
    if (window.confirm("Are you sure you want to delete this activity?")) {
      setActivities(prevActivities => prevActivities.filter(activity => activity.id !== id));
    }
  }

  const filteredActivities = activities.filter(activity => activity.isForGoodWeather === weather);

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="weather-text">{condition} {temperature} °C</h1>
      </header>
      <ListComponent activities={filteredActivities} isGoodWeather={weather} onDeleteActivity={handleDeleteActivity} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );

}
export default App;
