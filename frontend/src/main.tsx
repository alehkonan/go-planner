import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app';
import { DataServiceProvider } from './providers/DataService';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <DataServiceProvider>
        <App />
      </DataServiceProvider>
    </React.StrictMode>,
  );
}
