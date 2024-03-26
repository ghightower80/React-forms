import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewToDoForm';

test('calls onSubmit with the entered task', () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(<NewTodoForm addTodo={onSubmit} />);
    const input = getByPlaceholderText('Enter a new toDo');
    const button = getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    expect(onSubmit).toHaveBeenCalledWith('New Task');
});

test('matches snapshot', () => {
    const onSubmit = jest.fn();
    const { asFragment } = render(<NewTodoForm addTodo={onSubmit} />);
    expect(asFragment()).toMatchSnapshot();
});

//Critical Logic tests//

test('calls onSubmit with the entered task', () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(<NewTodoForm addTodo={onSubmit} />);
    const input = getByPlaceholderText('Enter a new todo');
    const button = getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    expect(onSubmit).toHaveBeenCalledWith('New Task');
});