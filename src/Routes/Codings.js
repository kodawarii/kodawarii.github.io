import React, { Component } from 'react';

import './style-codings.css';

export default class Codings extends Component {

  render() {
    return (
      <div className="codings">
        <div> <h2> # Coding Projects</h2> </div>
        <div className="outer-wrapper">
          <div class="wrapper">
            <div class="box a">
              <img src="/codings1img1.png" className="codings-img-type-landscape"/>
              <h3>Noraebang App (2019)</h3>
              <p> Auckland karaoke booths are too expensive. So I made my own app. </p>
              <a href="https://kodawarii.github.io/noraebang"> # 노래방DB </a>
            </div>
            <div class="box b">
              <img src="/codings1img2.png" className="codings-img-type-portrait"/>
              <img src="/codings1img3.png" className="codings-img-type-portrait"/>
              <h3>Disc Golf App (2019)</h3>
              <p> Who has time to open up the app, register, look up a course, mess with 200 other settings? Click and count score. Done.</p>
              <a href="https://kodawarii.github.io/reskydesktesking"> # DiscGolfApp </a>
            </div>
            <div class="box c">
              <img src="/codings1img4.png" className="codings-img-type-landscape"/>
              <h3>Simple Black Jack (2019)</h3>
              <p> Simple as making 21. No other rules. Trust me, its not rigged! </p>
              <a> # SimpleBlackJack </a>
            </div>
            <div class="box d">
              <img src="/bg1.JPG" className="codings-img-type-landscape codings-img-comingsoon"/>
              <h3>Coming Soon (2019)</h3>
              <p> PHP / Laravel </p>
              <a>  </a>
            </div>
            <div class="box e">
              <img src="/bg1.JPG" className="codings-img-type-landscape codings-img-comingsoon"/>
              <h3>Coming Soon (2019)</h3>
              <p> Java / Spring </p>
              <a>  </a>
            </div>
            <div class="box f">
              F
            </div>
          </div>
        </div>
      </div>
    );
  }
}