import React, { Component } from 'react';
import { HashLink as Link2 } from 'react-router-hash-link';

import './style-codings.css';
import './style-routesCommon.css';

import ScrollupArrow from '../Components/ScrollupArrow.component';

export default class Codings extends Component {

  render() {
    return (
      <div className="codings">
        <div> <h2> # Coding Projects</h2> </div>
        <div className="outer-wrapper">
          <div className="wrapper">
            <div className="box a">
              <img src="/codings1img1.png" alt="" className="codings-img-type-landscape"/>
              <h3>Noraebang App (2019)</h3>
              <img src='./react.png' height='30px' alt="" className="logo-img"/>
              <img src='./express.png' height='20px' alt="" className="logo-img"/>
              <img src='./mongodb.png' height='30px' alt="" className="logo-img"/>
              <img src='./node.png' height='20px' alt="" className="logo-img"/>
              <img src='./passport.png' height='35px' alt="" className="logo-img"/>
              <p> Auckland karaoke booths are too expensive. So I made my own app. </p>
              <a href="https://kodawarii.github.io/noraebang"> # 노래방DB </a>
            </div>
            <div className="box b">
              <img src="/codings1img2.png" alt="" className="codings-img-type-portrait"/>
              <img src="/codings1img3.png" alt="" className="codings-img-type-portrait"/>
              <h3>Disc Golf App (2019)</h3>
              <img src='./react.png' height='30px' alt="" className="logo-img"/>
              <p> Who has time to open up the app, register, look up a course, mess with 200 other settings? Click and count score. Done.</p>
              <a href="https://kodawarii.github.io/reskydesktesking"> # DiscGolfApp </a>
            </div>
            <div className="box c">
              <img src="/codings1img4.png" alt="" className="codings-img-type-landscape"/>
              <h3>Simple Black Jack (2019)</h3>
              <img src='./angular.svg' height='30px' alt="" className="logo-img"/>
              <img src='./express.png' height='20px' alt="" className="logo-img"/>
              <img src='./mongodb.png' height='30px' alt="" className="logo-img"/>
              <img src='./node.png' height='20px' alt="" className="logo-img"/>
              <img src='./jwt.svg' height='25px' alt="" className="logo-img"/>
              <p> Simple as making 21. No other rules. Trust me, its not rigged! </p>
              <a href="https://kodawarii.github.io/burakku-jakku/"> # SimpleBlackJack </a>
            </div>
            <div className="box d">
              <img src="/bg1.JPG" alt="" className="codings-img-type-landscape codings-img-comingsoon"/>
              <h3>Coming Soon (2019)</h3>
              <p> PHP / Laravel </p>
              <a href="https://github.com/kodawarii/"> # coming soon </a>
            </div>
            <div className="box e">
              <img src="/bg1.JPG" alt="" className="codings-img-type-landscape codings-img-comingsoon"/>
              <h3>Coming Soon (2019)</h3>
              <p> Java / Spring </p>
              <a href="https://github.com/kodawarii/"> # coming soon </a>
            </div>
            <div className="box f">
              F
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