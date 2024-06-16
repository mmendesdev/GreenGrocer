import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.ts';
import './index.css';
import Index from './pages/index.tsx'; // Correcting the import statement

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Index /> {/* Rendering the Index component */}
  </React.StrictMode>
);
