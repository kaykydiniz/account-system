import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './pages/styles/global';

import Login from './pages/login/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Login />
  </React.StrictMode>
);


