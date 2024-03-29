import React, {Component} from 'react';
import './css/MainPageSections.css';
import Terminal from '../FancyComponents/Terminal';

export default class SkillsSection extends Component {
    render() {
        return (
            <div className="BlurComponentParent SectionContainer">
                <div className="BlurBackGround" style={{
                backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/CodeBackground.jpg)"
            }}>

                </div>
                
                <div className="SectionLabelContainer">
                    <div className="WelcomeSectionTerminal">
                        <Terminal/>
                    </div>
                </div>
            </div>
        );
    }

}