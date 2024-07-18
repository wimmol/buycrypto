import WebApp from '@twa-dev/sdk';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

WebApp.setHeaderColor('#ffffff');
WebApp.setBackgroundColor('#ffffff');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
