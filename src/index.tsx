import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/layout/App/App';
import 'styles/main.scss';
import './i18n/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);