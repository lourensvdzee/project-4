import { useState } from 'react';
import { uid } from 'uid/secure';

function Form({ onAddActivity }) {
    const [name, setName] = useState('');
    const [isForGoodWeather, setIsForGoodWeather] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        const id = uid();
        const activity = { id, name, isForGoodWeather };
        onAddActivity(activity);
        setName('');
        setIsForGoodWeather(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add new activity:</h2>
            <div>
                <label htmlFor="nameInput">Name:</label>
                <input
                    type="text"
                    id="nameInput"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="weatherInput">Good weather activity:</label>
                <input
                    type="checkbox"
                    id="weatherInput"
                    checked={isForGoodWeather}
                    onChange={(event) => setIsForGoodWeather(event.target.checked)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
