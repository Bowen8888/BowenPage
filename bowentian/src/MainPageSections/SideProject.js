import React, { Component } from 'react';
import './css/SideProject.css'
import './css/MainPageSections.css'
import FeatureComponent from '../HelperComponents/FeatureComponent';

export default class SideProject extends Component {
      
    render() {
        return (
            <div 
                className="SectionContainer SideProjectContainer DefaultBackground"
                >
                    <div className="SectionLabelContainer">
                        <div>
                            Side Projects
                        </div>
                        {/* <div className="SectionLabelContainer SectionSubLabelContainer">
                            Mobile Game Development
                        </div> */}
                    </div>
                    <div className="SideProjectItemList"> 
                        <FeatureComponent title="Tetracube" status="Available on iOS and Android" widthPercentage={0.2} imgBorderColor="#C0C0C0"
                        imgUrl="/images/Tetracube.png" textContent="Tetracube is a puzzle game that enriches spatial visualization."/>
                        <FeatureComponent title="Fisherman in Town" status="Available on iOS and Android" widthPercentage={0.2} 
                        imgUrl="/images/Fishermanintown.png" textContent="Fisherman in Town is a word based simulation game in pixel art.
                        It simulates the lifestyle of a fisherman that tries to live a city life."/>
                        <FeatureComponent title="Grave Secrets" status="Available on iOS and Android" widthPercentage={0.2} 
                        imgUrl="/images/GraveSecrets.png" textContent="Grave Secrets is a puzzle game. There are lots of interesting levels.
                        Each level consists of a different puzzle and it gets harder and harder."/>
                    </div>
            </div>
        );
    }
  
}