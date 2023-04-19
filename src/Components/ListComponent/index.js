import React from 'react';

function ListComponent({ activities, isGoodWeather, onDeleteActivity }) {
    return (
        <>
            <h2>{isGoodWeather ? "The weather is awesome! Go outside and:" : "Bad weather outside! Here's what you can do now:"}</h2>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>
                        {activity.name} {activity.isForGoodWeather ? '🌞' : '🌧'}
                        <button onClick={() => onDeleteActivity(activity.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListComponent;
