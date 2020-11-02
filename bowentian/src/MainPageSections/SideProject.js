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
                        <FeatureComponent/>
                        <FeatureComponent/>
                        <FeatureComponent/>
                    </div>
                    
                    
            </div>
        );
    }
  
}