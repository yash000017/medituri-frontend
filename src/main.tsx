import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import customTheme from './utils/theme/theme';
import store from './store';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={customTheme}>
        <Provider store={store}>
          {' '}
          {/* Wrap App with Provider */}
          <App />
        </Provider>
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>
);
