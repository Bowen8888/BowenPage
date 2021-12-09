import React, {Component} from 'react';
import './css/WelcomeSection.css'
import './css/MainPageSections.css'
import AvatarComponent from "../HelperComponents/AvatarComponent";

export default class WelcomeSection extends Component {
    render() {
        return (
            <div className="BlurComponentParent SectionContainer DefaultBackground">
                <div className="WelcomeSectionCorner">
                    <a href="https://linkedin.com/in/bowen-tian" target="_blank" rel="noreferrer">
                        <img className="SocialMediaIcon" src={process.env.PUBLIC_URL + "/images/linkedin.png"}
                             alt=""/>
                    </a>
                    <a href="https://github.com/Bowen8888" target="_blank" rel="noreferrer">
                        <img className="SocialMediaIcon" src={process.env.PUBLIC_URL + "/images/github.png"} alt=""/>
                    </a>
                    <a href="https://www.facebook.com/bowen.tian.169" target="_blank" rel="noreferrer">
                        <img className="SocialMediaIcon" src={process.env.PUBLIC_URL + "/images/facebook.png"} alt=""/>
                    </a>
                </div>
                <div className="PersonalSection">
                    <AvatarComponent>

                    </AvatarComponent>
                    
                </div>
            </div>
        );
    }

}