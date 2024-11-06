import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles, Button,Input } from './index';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div style={{ padding: '20px' }}>
      <Button variant="primary">Click Me</Button>
      <Input value='' type='text' placeholder='This' onChange={(e)=>console.log(e.target.value)
      }/>
    </div>
  </ThemeProvider>
);

export default App;
