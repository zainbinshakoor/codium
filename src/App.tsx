import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles, Button,Input } from './index';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div style={{ padding: '20px' }}>
      <Button variant="secondary">Click Me</Button>
      <Input type='text' placeholder="Enter your name" />
    </div>
  </ThemeProvider>
);

export default App;
