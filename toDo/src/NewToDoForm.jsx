import React, { useState } from 'react';

function NewTodoForm({ addTodo }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        addTodo(task);
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a new todo"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default NewTodoForm;
