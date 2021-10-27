import React, {Component} from 'react';
import ProgrammingPie from '../FancyComponents/ProgrammingPie';
import './css/WelcomeSection.css'
import './css/MainPageSections.css'
import AvatarComponent from "../HelperComponents/AvatarComponent";

export default class WelcomeSection extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="BlurComponentParent SectionContainer DefaultBackground">
                {/*<div className="BlurBackGround WelcomeBackground" style={{*/}
                {/*    backgroundImage: "url(" + process.env.PUBLIC_URL + "images/WelcomeSectionBackground.jpeg" + ")"*/}
                {/*}}>*/}
                {/*</div>*/}

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
                <div className="PersonalSection">
                    <AvatarComponent>

                    </AvatarComponent>
                    
                </div>
                <div className="ProgrammingPieContainer">
                        {/* <ProgrammingPie/> */}
                    </div>
            </div>
        );
    }

}