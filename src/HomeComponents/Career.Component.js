import React, { Component } from 'react';

import './Career.css';
import './HomeShared.css';

export default class Career extends Component {
    //this.props.className

    // Will leave as hard coded for now as we are not retrieving any data from any external api.

  render() {
    let positionTitleClass = "positionTitle";
    let descriptionClass = "positionDescription";
    
    return (
        <div className={this.props.className}>
            <div>
                <h1>This is me.</h1>
            </div>

            <div>
                <h2> # Relevant Experience </h2>
            </div>

            <div className="work-wrapper">
                <div className="work-img1">
                    <img src="/p.jpg" alt="" className="home-img"/>
                </div>
                <div className="work-desc1">
                    <p className={positionTitleClass}> Test Automation Engineer (2020 Jan - Present) </p>
                    <p className={positionTitleClass}> Technical Test Analyst  (2019 Jan - 2019 Dec) </p>
                    <p className={positionTitleClass}> Graduate Tester  (2018 Jul - 2018 Dec) </p>
                    <p className={descriptionClass}> Deployed to ASB Bank and IAG New Zealand Clients </p>
                </div>
            </div>

            <div className="work-wrapper">
                <div className="work-img2">
                    <img src="/iag.svg" alt="" className="home-img"/>
                </div>
                <div className="work-desc2">
                    <p className={positionTitleClass}> Test Automation Engineer (Contractor)</p>
                    <p> 2019 Aug - Present </p>
                    <p className={descriptionClass}> Project Red / Freedom - API Integration Testing</p>
                </div>
            </div>

            <div className="work-wrapper">
                <div className="work-img3">
                    <img src="/asb.jpg" alt="" className="home-img"/>
                </div>
                <div className="work-desc3">
                    <p className={positionTitleClass}> Graduate Tester (Contractor)</p>
                    <p> 2018 Aug - 2019 Jul</p>
                    <p className={descriptionClass}> Project FCC Uplift / KYC CLM - UAT and Regression Testing </p>
                    <p className={descriptionClass}> Project Talisman Replacement - System/Integration Testing </p>
                </div>
            </div>
        </div>
    );
  }
}