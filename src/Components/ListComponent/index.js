import React from 'react';

function ListComponent({ activities }) {
    return (
        <ul>
            {activities.map(activity => (
                <li key={activity.id}>
                    {activity.name} (good weather: {activity.isForGoodWeather.toString()})
                </li>
            ))}
        </ul>
    );
}

export default ListComponent;
