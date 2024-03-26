// BoxList.js
import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const addBox = (newBox) => {
        setBoxes([...boxes, newBox]);
    };

    const removeBox = (index) => {
        setBoxes(boxes.filter((box, i) => i !== index));
    };

    return (
        <div>
            <h1>Color Box Maker</h1>
            <NewBoxForm addBox={addBox} />
            {boxes.map((box, index) => (
                <Box
                    key={index}
                    width={box.width}
                    height={box.height}
                    backgroundColor={box.backgroundColor}
                    removeBox={() => removeBox(index)}
                />
            ))}
        </div>
    );
}

export default BoxList;
