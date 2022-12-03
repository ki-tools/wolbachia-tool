import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient();

const theme = createTheme({
  typography: {
    fontFamily: `"Nunito Sans", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    action: {
      selected: 'red',
      selectedOpacity: 0.5,
    },
    alternate: {
      main: '#f7faff',
      dark: '#edf1f7',
    },
    cardShadow: 'rgba(23, 70, 161, .11)',
    mode: 'light',
    primary: {
      main: '#377dff',
      light: '#467de3',
      dark: '#2f6ad9',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffb74d',
      main: '#f9b934',
      dark: '#FF9800',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    text: {
      primary: '#1e2022',
      secondary: '#677788',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
      paper: '#ffffff',
      default: '#ffffff',
      level2: '#f5f5f5',
      level1: '#ffffff',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
