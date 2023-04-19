import React from 'react';
import './ListComponent.css';

function ListComponent({ activities, isGoodWeather, onDeleteActivity }) {
    return (
        <>
            <h2>{isGoodWeather ? "The weather is awesome! Go outside and:" : "Bad weather outside! Here's what you can do now:"}</h2>
            <ul className="activity-list">
                {activities.map(activity => (
                    <li key={activity.id}>
                        {activity.isForGoodWeather ? '🌞 ' : '🌧 '} {activity.name}
                        <button onClick={() => onDeleteActivity(activity.id)}>x</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListComponent;
