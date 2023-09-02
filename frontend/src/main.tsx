import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app';
import { IdbProvider } from './services/indexedDb/provider';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <IdbProvider>
        <App />
      </IdbProvider>
    </React.StrictMode>,
  );
}
