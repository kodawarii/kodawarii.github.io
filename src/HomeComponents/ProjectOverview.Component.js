import React, {Component} from 'react';

import './ProjectOverview.css';
import './HomeShared.css';

export default class ProjectOverview extends Component{
    //this.props.className

    render(){

        let positionTitleClass = "positionTitle";
        let descriptionClass = "positionDescription";

        return(
            <div className={this.props.className}>
                <div> 
                    <h2> # Projects </h2>
                </div> 

                <div className="proj-wrapper">
                    <div className="proj-img1">
                        <img src="/home1wealth.png" alt="" className="home-img"/>
                    </div>
                    <div className="proj-desc1">
                        <p className={positionTitleClass}> UltraWealth </p>
                        <p className={descriptionClass}> MVP application of Wealth Generation Game for bored people </p>
                        <p><a href="https://github.com/kodawarii/ultrawealth-mvp"> # Repo </a></p>
                        <a href="https://kodawarii.github.io/ultrawealth-mvp"> # UltraWealth </a>
                    </div>
                </div>

                <div className="proj-wrapper">
                    <div className="proj-img1">
                        <img src="/home4test.png" alt="" className="home-img"/>
                    </div>
                    <div className="proj-desc1">
                        <p className={positionTitleClass}> SpecFlow Test Framework Design </p>
                        <p className={descriptionClass}> Sample of commercially used framework without the sensitive bits </p>
                        <a href="https://github.com/kodawarii/temp_test"> # SpecFlow / Selenium </a>
                    </div>
                </div>

                <div className="proj-wrapper">
                    <div className="proj-img2">
                        <img src="/home2street.png" alt="" className="home-img"/>
                    </div>
                    <div className="proj-desc2">
                        <p className={positionTitleClass}> Street </p>
                        <p className={descriptionClass}> Karaoke Application with a modern user interface </p>
                        <p><a href="https://github.com/kodawarii/noraebang"> # Repo </a></p>
                        <a href="https://kodawarii.github.io/noraebang"> # Street </a>
                    </div>
                </div>

                <div className="proj-wrapper">
                    <div className="proj-img3">
                        <img src="/home3discgolf.png" alt="" className="home-img"/>
                    </div>
                    <div className="proj-desc3">
                        <p className={positionTitleClass}> DiscGolf </p>
                        <p className={descriptionClass}> Score tracking for the popular growing sport</p>
                        <p><a href="https://github.com/kodawarii/reskydesktesking"> # Repo </a></p>
                        <a href="https://kodawarii.github.io/reskydesktesking"> # DiscGolf </a>
                    </div>
                </div>
            </div>
        )
    }
}