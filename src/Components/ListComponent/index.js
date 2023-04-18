import React from 'react';

function ListComponent({ activities, isGoodWeather }) {
    return (
        <>
            <h2>{isGoodWeather ? 'Activities for good weather' : 'Activities for bad weather'}</h2>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>
                        {activity.name} {activity.isForGoodWeather ? '🌞' : '🌧'}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListComponent;
