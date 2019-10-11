import React, { Component } from 'react';

import './style-home.css';

export default class Home extends Component {

  render() {
    return (
      <div className="home">
        <div>
          <h1>This is me.</h1>
        </div>
        <div>
          <h2> # Relevant Experience </h2>
        </div>
        <div className="work-wrapper">
          <div className="work-desc1"><p> Test Automation Engineer </p></div>
          <div className="work-img1"><img src="/p.jpg" /></div>
        </div>
        <div>
          <p><img src="/iag.svg" /> Test Automation Engineer </p>
        </div>
        <div>
          <p> Graduate Tester <img src="/asb.jpg" /></p>
        </div>
        
        <br/>

        <div> 
          <h2> # Projects Intro </h2>
        </div> 
        <div>
          <p> Noraebang App </p>
        </div>
        <div>
          <p> Disc Golf App </p>
        </div>
        <div>
          <p> Black Jack </p>
        </div>
      </div>
    );
  }
}