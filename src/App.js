import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import { HashLink as Link2 } from 'react-router-hash-link';

import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Codings from './Routes/Codings';

import './App.css';
import './style-footer.css';

function App() {
  return (
    <div className="App">
      <div className="bg"/>
      <HashRouter>
        <header id="top">
        <link href="https://fonts.googleapis.com/css?family=Be+Vietnam:100,300,400&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Raleway:100&display=swap" rel="stylesheet"/>
          <div className="row nav">
            <nav className="col-12 navbar">
              <div className="navbar-left"><Link2 to={'/#content'}><h1 className="nav-text-home">Paul</h1></Link2><h4> # Software Engineer</h4></div>
              <ul className="navbar-right">
                <li>
                  <Link2 to={'/codings/#content'} className="nav-text nav-text-code">CODE</Link2>
                </li>
                <li>
                  <Link2 to={'/contact/#content'} className="nav-text nav-text-contact">CONTACT</Link2>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="row intro">
          <div className="col-12">
            <div className="intro-text-container">
              <p> Test Automation Engineer gone rogue </p>
              <p> - Aspiring SWE with industry coding experience </p>
            </div>
          </div>
        </div>
        <div className="row main-content" id="content">
          <Switch className="col-12">
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
