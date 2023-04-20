import React from 'react';
import './ListComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function ListComponent({ activities, isGoodWeather, onDeleteActivity }) {
    return (
        <><div className='sub-header'>
            <h2 style={{ whiteSpace: 'pre-wrap' }}>{isGoodWeather ? "The weather is awesome!\nGo outside and:" : "Bad weather outside!\nHere's what you can do now:"}</h2>
        </div>
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
