import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
test('renders Button with correct text', () => {
    render(_jsx(Button, { children: "Click me" }));
    expect(screen.getByText('Click me')).toBeInTheDocument();
});
test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(_jsx(Button, { onClick: handleClick, children: "Click me" }));
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
});
test('renders disabled Button', () => {
    render(_jsx(Button, { disabled: true, children: "Click me" }));
    expect(screen.getByText('Click me')).toBeDisabled();
});
