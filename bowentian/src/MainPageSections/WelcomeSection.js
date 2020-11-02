import React, { Component } from 'react';
import './css/WelcomeSection.css'

export default class WelcomeSection extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div 
                className="WelcomeSectionContainer" 
                style={{
                    backgroundImage: "url(" + process.env.PUBLIC_URL + "images/WelcomeSectionBackground.jpeg" + ")"
                }}>
                    <div className="WelcomeSectionLabelContainer">
                        <div>
                            Bowen Tian
                            <img className="SocialMediaIcon" src={process.env.PUBLIC_URL + "images/linkedin.png"} alt=""/>
                            <img className="SocialMediaIcon" src={process.env.PUBLIC_URL + "images/github.png"} alt=""/>
                            <img className="SocialMediaIcon" src={process.env.PUBLIC_URL + "images/gmail.png"} alt=""/>
                        </div>
                        <div className="WelcomeSectionSubLabelContainer">
                            Software Engineer
                        </div>
                    </div>
            </div>
        );
    }
  
}