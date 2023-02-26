import React, { Component } from 'react';
import './css/MainPageSections.css'
import './css/CareerSection.css'
import CareerListComponent from '../HelperComponents/CareerListComponent';
import TransparentTextComponent from '../HelperComponents/TransparentTextComponent';

export default class CareerSection extends Component {

    render() {
        return (
            <div 
                className="SectionContainer" style={{
                    backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/CareerSection.jpg)"
                }}>
                    <div className="SectionLabelContainer CareerSectionLabelContainer">
                        <div>
                            Career
                        </div>
                    </div>
                    <div className="ProfileContainer">
                        <CareerListComponent career1={{
                            name: "OneDesk Software Inc",
                            year: "Feb 2018 - Jan 2022"
                        }} career2={{
                            name: "TS Imagine",
                            year: "Jan 2022 - Present"
                        }} />
                        <TransparentTextComponent> 
                        </TransparentTextComponent>
                    </div>
            </div>
        );
    }
  
}