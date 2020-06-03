import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './pages/Header';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
