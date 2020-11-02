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
                        </div>
                        <div className="WelcomeSectionSubLabelContainer">
                            Software Engineer
                        </div>
                    </div>
            </div>
        );
    }
  
}