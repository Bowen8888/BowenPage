import React, { Component } from 'react';
import './css/SideProject.css'
import './css/MainPageSections.css'
import FeatureComponent from '../HelperComponents/FeatureComponent';

export default class SideProject extends Component {
    constructor() {
        super();
      }
      
    render() {
        return (
            <div 
                className="SectionContainer SideProjectContainer DefaultBackground"
                >
                    <div className="SectionLabelContainer">
                        <div>
                            Side Projects
                        </div>
                        <div className="SectionLabelContainer SectionSubLabelContainer">
                            Mobile Game Development
                        </div>
                    </div>
                    <div className="SideProjectItemList"> 
                        <FeatureComponent title="Fisherman in Town" status="Available on iOS and Android" widthPercentage={0.2} 
                        imgUrl="images/Fishermanintown.png"/>
                        <FeatureComponent title="EHost" status="Completed" widthPercentage={0.2} imgBorderColor="#C0C0C0"
                        imgUrl="images/EHost.jpg"/>
                        <FeatureComponent title="Grave Secrets" status="Available on iOS and Android" widthPercentage={0.2} 
                        imgUrl="images/GraveSecrets.png"/>
                    </div>
            </div>
        );
    }
  
}