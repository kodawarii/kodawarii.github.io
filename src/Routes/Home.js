import React, { Component } from 'react';
import { HashLink as Link2 } from 'react-router-hash-link';

import './style-home.css';
import './style-routesCommon.css';

import ScrollupArrow from '../Components/ScrollupArrow.component';

import Career from '../HomeComponents/Career.Component';
import ProjectOverview from '../HomeComponents/ProjectOverview.Component';

export default class Home extends Component {

  render() {
    return (
      <div className="home">
        <Career className="ProjectOverview"/>
        <Career className="ProjectOverview-s"/>
        <br/>
        <ProjectOverview className="career"/>
        <ProjectOverview className="career-s"/>

        <div className="scroll-top-arrow">
          <Link2 to={'/#top'}>
            <ScrollupArrow/>
          </Link2>
        </div>
      </div>
    );
  }
}