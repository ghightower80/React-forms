import React from 'react';

function Todo({ task, index, removeTodo }) {
    return (
        <div>
            {task}
            <button onClick={() => removeTodo(index)}>X</button>
        </div>
    );
}

export default Todo;
