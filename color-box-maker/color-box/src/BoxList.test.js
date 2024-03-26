import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

test('renders BoxList component without crashing', () => {
    render(<BoxList />);
});

test('matches snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

//critical component testing//

test('adds a box when form is submitted', () => {
    const { getByLabelText, getByText, getByTestId } = render(<BoxList />);
    const widthInput = getByLabelText('Width:');
    const heightInput = getByLabelText('Height:');
    const colorInput = getByLabelText('Background Color:');
    const addButton = getByText('Add Box');
    fireEvent.change(widthInput, { target: { value: '100' } });
    fireEvent.change(heightInput, { target: { value: '100' } });
    fireEvent.change(colorInput, { target: { value: 'red' } });
    fireEvent.click(addButton);
    const box = getByTestId('box-0');
    expect(box).toBeInTheDocument();
});

test('removes a box when "X" button is clicked', () => {
    const { getByText, queryByTestId } = render(<BoxList />);
    const widthInput = getByText('Width:');
    const heightInput = getByText('Height:');
    const colorInput = getByText('Background Color:');
    const addButton = getByText('Add Box');
    fireEvent.change(widthInput, { target: { value: '100' } });
    fireEvent.change(heightInput, { target: { value: '100' } });
    fireEvent.change(colorInput, { target: { value: 'red' } });
    fireEvent.click(addButton);
    const removeButton = getByText('X');
    fireEvent.click(removeButton);
    const box = queryByTestId('box-0');
    expect(box).toBeNull();
});