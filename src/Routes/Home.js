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
          <div className="work-desc1">
            <p> Test Automation Engineer </p>
            <p> 2018 Jul - Present </p>
            <p> Achivements: something something </p>
          </div>
          <div className="work-img1">
            <img src="/p.jpg" className="home-img"/>
          </div>
        </div>
        <div className="work-wrapper">
        <div className="work-img2">
          <img src="/iag.svg" className="home-img"/>
        </div>
          <div className="work-desc2">
            <p> Test Automation Engineer (Contractor)</p>
            <p> 2019 Aug - Present </p>
            <p> Achivements: something something </p>
          </div>
        </div>
        <div className="work-wrapper">
          <div className="work-desc3">
            <p> Graduate Tester (Contractor)</p>
            <p> 2018 Aug - 2019 Jul</p>
            <p> Achivements: something something </p>
          </div>
          <div className="work-img3">
            <img src="/asb.jpg" className="home-img"/>
          </div>
        </div>
        
        <br/>

        <div> 
          <h2> # Projects </h2>
        </div> 
        <div className="proj-wrapper">
          <div className="proj-img1">
            <img src="" className="home-img"/>
          </div>
          <div className="proj-desc1">
            <p> Noraebang App </p>
            <p> React Express Node MongoDB </p>
          </div>
        </div>
        <div className="proj-wrapper">
          <div className="proj-desc2">
            <p> Disc Golf App </p>
            <p> React Express Node MongoDB </p>
          </div>
          <div className="proj-img2">
            <img src="" className="home-img"/>
          </div>
        </div>
        <div className="proj-wrapper">
          <div className="proj-img3">
            <img src="" className="home-img"/>
          </div>
          <div className="proj-desc3">
            <p> Simple Black Jack </p>
            <p> React Express Node MongoDB </p>
          </div>
        </div>
      </div>
    );
  }
}