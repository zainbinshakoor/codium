import { jsx as _jsx } from "react/jsx-runtime";
import { StyledButton } from './Button.styles';
const Button = ({ children, variant = 'primary', onClick, disabled }) => {
    return (_jsx(StyledButton, { color: variant, onClick: onClick, disabled: disabled, children: children }));
};
export default Button;
