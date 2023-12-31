import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppProvider from './context/AppProvider';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <AppProvider>
    <App />
  </AppProvider>
  </Router>
);
