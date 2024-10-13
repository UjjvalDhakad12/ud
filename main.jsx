import React from 'react';
import { createRoot } from 'react-dom/client'; // yeh line add karein
import { StrictMode } from 'react';
import App from './App.jsx';
import './index.css';

const root = createRoot(document.getElementById('root')); // root create karein
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
