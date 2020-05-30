import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import { HashLink as Link2 } from 'react-router-hash-link';

import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Codings from './Routes/Codings';

import Description from './Components/Description.component';

import './App.css';
import './App-s.css';
import './style-footer.css';

export default class InnerApp extends Component {
  constructor(props){
    super(props);

    this.state ={
      showingMenu: false
    }
  }

  openHamburger(){
    if(this.state.showingMenu){
      this.setState({ showingMenu: false});
    }
    else{
      this.setState({ showingMenu: true});
    }
  }

  closeHamburger(){
    this.setState({ showingMenu: false});
  }

  render(){
    let hamburgerClasses = "navbar-right-s ";
    let navbarLeftClasses = "navbar-left-s ";
    let introClasses = "intro-text-container-s ";
    if(this.state.showingMenu){
      hamburgerClasses = "navbar-right-s-show";
      navbarLeftClasses = "navbar-left-s-hidden ";
      introClasses = "intro-text-container-s-hidden ";
    }
    else{
      hamburgerClasses = "navbar-right-s";
      navbarLeftClasses = "navbar-left-s ";
      introClasses = "intro-text-container-s ";
    }

    return (
      <div className="App">
        <div className="bg"/>
        <HashRouter>
          <div id="titletop">
            <header id="top">
              <link href="https://fonts.googleapis.com/css?family=Be+Vietnam:100,300,400&display=swap" rel="stylesheet"/>
              <link href="https://fonts.googleapis.com/css?family=Raleway:100&display=swap" rel="stylesheet"/>
              <div className="row nav">
                <nav className="col-12 navbar">
                  <div className="navbar-left"><Link2 to={'/#content'}><h1 className="nav-text-home">Paul</h1></Link2><h4> # Software Developer in Test</h4></div>
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
              <div className="NeedThisForGridToWorkProperly">
                <Description cssClasses="intro-text-container"/>
              </div>
            </div>
          </div>

          
          <div id="titletop-s">
            <header id="top">
              <link href="https://fonts.googleapis.com/css?family=Be+Vietnam:100,300,400&display=swap" rel="stylesheet"/>
              <link href="https://fonts.googleapis.com/css?family=Raleway:100&display=swap" rel="stylesheet"/>
              <div className="row nav">
                <nav className="col-12 navbar-s">
                  <div className={navbarLeftClasses}><Link2 to={'/#content'} onClick={this.closeHamburger.bind(this)}><h1 className="nav-text-home-s">Paul</h1></Link2><h4> # Software Developer in Test</h4></div>
                  <div className="hamburger-icon" onClick={this.openHamburger.bind(this)}> &#8801; </div>
                  <ul className={hamburgerClasses}>
                    <li>
                      <Link2 to={'/codings/#content'} onClick={this.closeHamburger.bind(this)} className="nav-text-s nav-text-code-s">CODE</Link2>
                    </li>
                    <li>
                      <Link2 to={'/contact/#content'} onClick={this.closeHamburger.bind(this)} className="nav-text-s nav-text-contact-s">CONTACT</Link2>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
            <div className="row intro-s">
              <div className="NeedThisForGridToWorkProperly">
                <Description cssClasses={introClasses}/>
              </div>
            </div>
          </div>
          <div className="row main-content" id="content">
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
}
