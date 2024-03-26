// Box.js
import React from 'react';

function Box({ width, height, backgroundColor, removeBox }) {
    const boxStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor,
        display: 'inline-block',
        margin: '10px',
        position: 'relative',
    };

    return (
        <div style={boxStyle}>
            <button onClick={removeBox}>X</button>
        </div>
    );
}

export default Box;
