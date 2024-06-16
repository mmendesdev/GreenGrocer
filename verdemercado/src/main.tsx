import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.ts';
import Index from './pages/index.tsx'; // Correcting the import statement
import MercadoVerde from './pages/mercado.tsx';
import Pagamento from './pages/pagamento.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MercadoVerde /> {/* Rendering the Index component */}
  </React.StrictMode>
);
