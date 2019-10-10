import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Codings from './Routes/Codings';

import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <header>
          <nav className="navbar">
          <ul className="navbar-ul">
              <li className="nav-item">
                <Link to={'/'}>Paul Yoon SWE</Link>
              </li>
            </ul>
              
            <ul className="navbar-ul">
              <li className="nav-item">
                <Link to={'/codings'}>Code</Link>
              </li>
              <li className="nav-item">
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="switch-div">
          <Switch>
            <Route exact path='/' component = {Home} />
            <Route exact path='/contact' component={ Contact } />
            <Route exact path='/codings' component={ Codings } />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
