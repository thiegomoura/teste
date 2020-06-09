import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Dweller from './pages/Dweller';


function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dweller">Dweller</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dweller">
            <Dweller />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
