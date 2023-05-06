import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { GlobalStyles } from './assets/GlobalStyles.styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>
);
