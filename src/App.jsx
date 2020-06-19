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
      <header>
        <ul className="menu-container">
          <div className="item-container">
          <li className="menu">
            <Link to="/"><h2 className="menu-item">In</h2></Link>
          </li>
          <li className="menu">
            <Link to="/dweller"><h2 className="menu-item">Mo</h2></Link>
          </li>
          </div>
        </ul>
      </header>
      <main>
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
      </main>
      <footer>
      <span>&Copy TM Acessoria</span>
      </footer>
      <div>
    </div>
    </Router>
    </div>
  );
}

export default App;
