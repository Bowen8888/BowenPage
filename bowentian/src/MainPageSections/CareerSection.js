import React, { Component } from 'react';
import './css/MainPageSections.css'
import './css/CareerSection.css'
import FeatureComponent from '../HelperComponents/FeatureComponent';
import ImageViewComponent from '../HelperComponents/ImageViewComponent';

export default class CareerSection extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div 
                className="SectionContainer" style={{
                    backgroundImage: "url(" + process.env.PUBLIC_URL + "images/CareerSection.jpg" + ")"
                }}>
                    <div className="SectionLabelContainer CareerSectionLabelContainer">
                        <div>
                            Career
                        </div>
                        <div className="SectionLabelContainer SectionSubLabelContainer CareerSectionLabelContainer">
                            Software Engineer at Onedesk
                        </div>
                    </div>
                    <div className="ProfileContainer">
                        <ImageViewComponent title="Onedesk" imgUrl="images/Onedesk.jpg"/>
                    </div>
            </div>
        );
    }
  
}