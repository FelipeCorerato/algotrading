import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import reportWebVitals from './reportWebVitals';
import { SpreadConfigurationPage } from './pages/SpreadConfiguration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SpreadConfigurationPage />
  </React.StrictMode>
);

reportWebVitals();
