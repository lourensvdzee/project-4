import { useState } from 'react';
import { uid } from 'uid/secure';
import './Form.css';


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
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-text">
                <h2 className="form-title">Add new activity:</h2>
                <div>
                    <label htmlFor="nameInput">Name:</label>
                    <input
                        type="text"
                        id="nameInput"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder='add new activity here'
                        maxLength={35}
                        minLength={1}
                        required
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
                <button class="submit" type="submit">Submit</button>
            </div>
        </form>
    );
}

export default Form;
