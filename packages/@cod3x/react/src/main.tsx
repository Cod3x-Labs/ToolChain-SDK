import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CodexSDKProvider } from './context/Context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CodexSDKProvider>
      <App />
    </CodexSDKProvider>
  </React.StrictMode>
);
