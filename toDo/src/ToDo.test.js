import React from 'react';
import { render } from '@testing-library/react';
import Todo from './ToDo';

test('renders todo text', () => {
    const { getByText } = render(<Todo task="Example Todo" />);
    const todoElement = getByText(/Example ToDo/i);
    expect(todoElement).toBeInTheDocument();
});

test('matches snapshot', () => {
    const { asFragment } = render(<Todo task="Example Todo" />);
    expect(asFragment()).toMatchSnapshot();
});
