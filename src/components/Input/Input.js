import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledInput, InputWrapper, ErrorMessage, IconWrapper } from './Input.styles';
const Input = ({ type, placeholder, value, onChange, error, disabled, icon, }) => {
    return (_jsxs(InputWrapper, { children: [_jsxs("div", { style: { position: 'relative' }, children: [icon && _jsx(IconWrapper, { children: icon }), _jsx(StyledInput, { type: type, placeholder: placeholder, value: value, onChange: onChange, disabled: disabled, error: error })] }), error && _jsx(ErrorMessage, { children: error })] }));
};
export default Input;
