import React, { Component } from 'react';

export default class Description extends Component {

  //this.props.cssClasses

  render() {
    let skillCss = "skill-text";

    return (
      <div className={this.props.cssClasses}>
        <p className="description">I am a software developer in test based in Auckland New Zealand, delivering creative solutions to add quality to software within organisations primarily focusing on functions of Web Services and User Interfaces.</p>
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