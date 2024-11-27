import './App.css';
import Playground from './pages/playground/Playground';
import { MantineProvider } from '@mantine/core';
import theme from './utils/theme/theme';

function App() {
  return (
    <MantineProvider theme={theme}>
      <Playground />
    </MantineProvider>
  );
}

export default App;
