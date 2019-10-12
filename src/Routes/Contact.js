import React, { Component } from 'react';
import { HashLink as Link2 } from 'react-router-hash-link';

import './style-contact.css';
import './style-routesCommon.css';

import ScrollupArrow from '../Components/ScrollupArrow.component';

export default class Contact extends Component {

  constructor(props){
    super();
    this.state = {
      emailOpen: false,
      linkedinOpen: false
    };
  }

  showEmail(){
    console.log("showing email");
    this.setState({ emailOpen: true });
  }

  showLinkedin(){
    console.log("showing linkedin");
    this.setState({ linkedinOpen: true });
  }

  hideEmail(){
    console.log("hiding email");
    this.setState({ emailOpen: false });
  }

  hideLinkedin(){
    console.log("hiding linkedin");
    this.setState({ linkedinOpen: false });
  }

  render() {
    let emailClassNames = "";
    let linkedinClassNames = "";

    if(this.state.emailOpen){
      emailClassNames = "email-clicked-show";
    }
    else{
      emailClassNames = "email-clicked";
    }

    if(this.state.linkedinOpen){
      linkedinClassNames = "linkedin-clicked-show";
    }
    else{
      linkedinClassNames = "linkedin-clicked";
    }

    return (
      <div className="contact">
        <p> For inquires contact: </p>
        <ul className="contact-ul">
          <li>
            <span className="contact-li-text-code" onClick={this.showEmail.bind(this)}>Email</span>
          </li>
          <li>
          <span className="contact-li-text-contact" onClick={this.showLinkedin.bind(this)}>Linkedin</span>
          </li>
        </ul>
        <div className="hidden-wrapper">
          <div className={emailClassNames}>
            <div className="close-details" onClick={this.hideEmail.bind(this)}>
              ✖
            </div>
            <div className="text-details">
              email@email.com
            </div>
          </div>
          <div className={linkedinClassNames}>
            <div className="close-details" onClick={this.hideLinkedin.bind(this)}>
              ✖
            </div>
            <div className="text-details">
              linkedin/paul
            </div>
          </div>
        </div>
        <div className="scroll-top-arrow">
          <Link2 to={'/#top'}>
            <ScrollupArrow/>
          </Link2>
        </div>
      </div>
    );
  }
}