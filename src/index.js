import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReduxProvider from './redux/store'; // Adjust the path as per your project structure
import App from './App'; // Adjust the path as per your project structure
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Slim-Moms-Dads-app">
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
