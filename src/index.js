<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <h1>Hello world!</h1>,
    document.getElementById('root')
)
=======
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
>>>>>>> c1f0720fcb742e6e6bb0766de216e555132ad04a
