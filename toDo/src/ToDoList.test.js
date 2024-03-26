import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './ToDoList';



test('renders todo list', () => {
    const { getByText } = render(<TodoList />);
    const todoListElement = getByText('Todo List');
    expect(todoListElement).toBeInTheDocument();
});

test('matches snapshot', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});


//Critical Logic Tests//
test('adds a new todo', () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);
    const input = getByPlaceholderText('Enter a new todo');
    const addButton = getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(getByText('New Task')).toBeInTheDocument();
});

test('removes a todo', () => {
    const { getByText, queryByText } = render(<TodoList />);
    const input = getByText('New Task');
    const removeButton = getByText('X');

    fireEvent.click(removeButton);

    expect(queryByText('New Task')).toBeNull();
});

test('edits a todo', () => {
    const { getByText, getByTestId } = render(<TodoList />);
    const todoItem = getByText('New Task');
    const editButton = getByTestId('edit-button');
    const input = getByTestId('edit-input');

    fireEvent.click(editButton);
    fireEvent.change(input, { target: { value: 'Edited Task' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });

    expect(getByText('Edited Task')).toBeInTheDocument();
});