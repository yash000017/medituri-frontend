import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import App from './App';
import './index.css';
import customTheme from './utils/theme/theme';

// Initialize React Query's QueryClient
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={customTheme}>
        <App />
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>
);