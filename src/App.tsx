import './App.css';
import ExampleComponent from './pages/playground/Playground';
import { MantineProvider } from '@mantine/core';
import theme from './utils/theme/theme';

function App() {
  return (
    <MantineProvider theme={theme}>
      <ExampleComponent />
    </MantineProvider>
  );
}

export default App;
