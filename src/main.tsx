import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TransactionProvider } from './context/TransactionContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TransactionProvider>
    <Router>
      <App />
    </Router>
  </TransactionProvider>
);
