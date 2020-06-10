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
import FormDweller from './pages/components/FormDweller'


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
          <Route path='/create' >
            <FormDweller />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
