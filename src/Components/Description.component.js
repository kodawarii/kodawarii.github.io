import React, { Component } from 'react';

export default class Description extends Component {

  //this.props.cssClasses

  render() {
    let skillCss = "skill-text";

    return (
      <div className={this.props.cssClasses}>
        <p className="description">I am a SDET helping organisations elevate product quality by automating processes and building robust tools. Strongly believes that the entire team is responsible for design, engineering, quality and testing.</p>
        <p className="skills">
          <span className={skillCss}>C#</span> 
          <span className={skillCss}>.NET</span>
          <span className={skillCss}>REACT</span>
          <span className={skillCss}>ANGULAR</span>
          <span className={skillCss}>NODE</span>
          <span className={skillCss}>SPECFLOW</span>
          <span className={skillCss}>SELENIUM</span>
        </p>
      </div>
    );
  }
}