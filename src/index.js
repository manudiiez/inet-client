import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ToastContextProvider } from './context/ToastContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ToastContextProvider>
        <App />
      </ToastContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

