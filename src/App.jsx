import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Dweller from './pages/Dweller';


function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <ul className="menu">
          <li className="menu">
            <Link to="/"><h2 className="menu-item">Início</h2></Link>
          </li>
          <li className="menu">
            <Link to="/dweller"><h2 className="menu-item">Moradores</h2></Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dweller">
            <Dweller />
          </Route>
          <Route path='/create' >
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
