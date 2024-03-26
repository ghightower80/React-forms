import React, { useState } from 'react';
import NewTodoForm from './NewToDoForm';
import Todo from './ToDo';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const addTodo = (task) => {
        setTodos([...todos, task]);
    };
    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo key={index} index={index} task={todo} removeTodo={removeTodo} />
            ))}
        </div>
    );
}

export default TodoList;
