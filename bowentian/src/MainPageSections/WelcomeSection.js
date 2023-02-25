import React, {Component} from 'react';
import './css/WelcomeSection.css'
import './css/MainPageSections.css'
import AvatarComponent from "../HelperComponents/AvatarComponent";
import ContactPopup from './ContactPopup';

export default class WelcomeSection extends Component {
    constructor() {
        super();

        this.state = { showPopup: false };
    }
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
                    <a href="https://play.google.com/store/apps/developer?id=Bowen+Tian" target="_blank" rel="noreferrer">
                        <img className="SocialMediaIcon" src={process.env.PUBLIC_URL + "/images/android.png"} alt=""/>
                    </a>
                    <a href="https://apps.apple.com/us/developer/bowen-tian/id1467842114" target="_blank" rel="noreferrer">
                        <img className="SocialMediaIcon" src={process.env.PUBLIC_URL + "/images/apple.png"} alt=""/>
                    </a>
                    <div onClick={() => {
                        this.setState({showPopup: true})
                    }}>
                        <img className="SocialMediaIcon" src={process.env.PUBLIC_URL + "/images/gmail.png"} alt=""/>
                    </div>
                    {this.state.showPopup ? <ContactPopup onClose={() => {
                        this.setState({showPopup: false})
                    }}/> : <></>}
                </div>
                <div className="PersonalSection">
                    <AvatarComponent>

                    </AvatarComponent>
                    
                </div>
            </div>
        );
    }

}