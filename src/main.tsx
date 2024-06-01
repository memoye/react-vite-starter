import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import AllProviders from './providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AllProviders />
  </React.StrictMode>,
);
