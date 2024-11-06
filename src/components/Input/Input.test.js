import { jsx as _jsx } from "react/jsx-runtime";
// Input.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';
import { FaSearch } from 'react-icons/fa'; // Example icon
describe('Input Component', () => {
    it('renders input field with placeholder text', () => {
        render(_jsx(Input, { type: "text", placeholder: "Search", value: "", onChange: () => { }, icon: _jsx(FaSearch, {}) }));
        const inputElement = screen.getByPlaceholderText('Search');
        expect(inputElement).toBeInTheDocument();
    });
    it('calls onChange handler when value changes', () => {
        const handleChange = jest.fn();
        render(_jsx(Input, { type: "text", placeholder: "Enter your name", value: "", onChange: handleChange }));
        const inputElement = screen.getByPlaceholderText('Enter your name');
        fireEvent.change(inputElement, { target: { value: 'John' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
    it('shows error message when error prop is provided', () => {
        render(_jsx(Input, { type: "text", placeholder: "Enter your name", value: "", onChange: () => { }, error: "This field is required" }));
        const errorMessage = screen.getByText('This field is required');
        expect(errorMessage).toBeInTheDocument();
    });
    it('disables input field when disabled prop is true', () => {
        render(_jsx(Input, { type: "text", placeholder: "Enter your name", value: "", onChange: () => { }, disabled: true }));
        const inputElement = screen.getByPlaceholderText('Enter your name');
        expect(inputElement).toBeDisabled();
    });
    it('focuses on the input field and shows focus ring', () => {
        render(_jsx(Input, { type: "text", placeholder: "Enter your name", value: "", onChange: () => { } }));
        const inputElement = screen.getByPlaceholderText('Enter your name');
        fireEvent.focus(inputElement);
        expect(inputElement).toHaveStyle('border-color: #40a9ff');
    });
});
