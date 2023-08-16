import React from 'react';

function Clock({ minutes, seconds }) {
    return (
        <div className="clock">
            <h1>P🍅M🍅D🍅R🍅 :</h1>
            <h3>{minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}</h3>
        </div>
    );
}

export default Clock;
