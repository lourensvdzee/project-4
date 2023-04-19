import React from 'react';
import ListComponent from '../ListComponent';

function ListFiltering({ activities, isGoodWeather, onDeleteActivity }) {
    const filteredActivities = activities.filter(activity => activity.isForGoodWeather === isGoodWeather);

    return (
        <ListComponent activities={filteredActivities} onDeleteActivity={onDeleteActivity} />
    );
}

export default ListFiltering;
