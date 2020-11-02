import React, { Component } from 'react';
import './css/SideProject.css'
import FeatureComponent from '../HelperComponents/FeatureComponent';

export default class SideProject extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div 
                className="SideProjectContainer" 
                >
                    <div className="SideProjectLabelContainer">
                        <div>
                            Side Projects
                        </div>
                        <div className="SideProjectSubLabelContainer">
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