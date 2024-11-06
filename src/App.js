import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles, Button, Input } from './index';
const App = () => (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(GlobalStyles, {}), _jsxs("div", { style: { padding: '20px' }, children: [_jsx(Button, { variant: "primary", children: "Click Me" }), _jsx(Input, { value: '', type: 'text', placeholder: 'This', onChange: (e) => console.log(e.target.value) })] })] }));
export default App;
