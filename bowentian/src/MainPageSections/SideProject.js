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
                className="SectionContainer" 
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
                        <FeatureComponent title="Fisherman in Town" status="Released on iOS"/>
                        <FeatureComponent title="EHost" status="Completed"/>
                        <FeatureComponent title="Rosetta" status="Under development"/>
                    </div>
            </div>
        );
    }
  
}