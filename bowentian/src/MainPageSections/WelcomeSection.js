import React, {Component} from 'react';
import ProgrammingPie from '../FancyComponents/ProgrammingPie';
import './css/WelcomeSection.css'
import './css/MainPageSections.css'

export default class WelcomeSection extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div
                className="SectionContainer"
                style={{
                    backgroundImage: "url(" + process.env.PUBLIC_URL + "images/WelcomeSectionBackground.jpeg" + ")"
                }}>
                <div className="WelcomeSectionCorner">
                    <a href="https://linkedin.com/in/bowen-tian" target="_blank">
                        <img className="SocialMediaIcon" src={process.env.PUBLIC_URL + "images/linkedin.png"}
                             alt=""/>
                    </a>
                    <a href="https://github.com/Bowen8888" target="_blank">
                        <img className="SocialMediaIcon" src={process.env.PUBLIC_URL + "images/github.png"} alt=""/>
                    </a>
                    <a href="https://github.com/Bowen8888" target="_blank">
                        <img className="SocialMediaIcon" src={process.env.PUBLIC_URL + "images/gmail.png"} alt=""/>
                    </a>
                </div>
              <ProgrammingPie/>
            </div>
        );
    }

}