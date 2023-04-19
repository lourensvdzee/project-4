import React from 'react';
import './ListComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function ListComponent({ activities, isGoodWeather, onDeleteActivity }) {
    return (
        <>
            <h2>{isGoodWeather ? "The weather is awesome! Go outside and:" : "Bad weather outside! Here's what you can do now:"}</h2>
            <ul className="list-container">
                {activities.map(activity => (
                    <li className="list-item" key={activity.id}>
                        <div className="activity-container">
                            <span className="weather-icon">{activity.isForGoodWeather ? '🌞' : '🌧'}</span>
                            <span className="activity-text">{activity.name}</span>
                            <button className="delete-button" onClick={() => onDeleteActivity(activity.id)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListComponent;
