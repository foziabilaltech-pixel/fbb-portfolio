import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // installed for future pages; SPA uses section anchors
import App from './App';
import './index.css'; // Tailwind + base styles
import './App.css'; // complex animations (ripple, cursor blink, scroll reveal)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);