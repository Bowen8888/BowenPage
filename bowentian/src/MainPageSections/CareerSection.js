import React, { Component } from 'react';
import './css/MainPageSections.css'
import './css/CareerSection.css'
import ImageViewComponent from '../HelperComponents/ImageViewComponent';
import TransparentTextComponent from '../HelperComponents/TransparentTextComponent';

export default class CareerSection extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div 
                className="SectionContainer" style={{
                    backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/CareerSection.jpg" + ")"
                }}>
                    <div className="SectionLabelContainer CareerSectionLabelContainer">
                        <div>
                            Career
                        </div>
                    </div>
                    <div className="ProfileContainer">
                        <ImageViewComponent title="OneDesk Software Inc"/>
                        <TransparentTextComponent> 
                        </TransparentTextComponent>
                    </div>
            </div>
        );
    }
  
}