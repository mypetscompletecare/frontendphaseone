import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/system';
import PetClinicTheme from './components/Theme/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={PetClinicTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
