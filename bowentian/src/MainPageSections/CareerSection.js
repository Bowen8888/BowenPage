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
                        <ImageViewComponent title="Onedesk Software Inc" imgUrl="images/Onedesk.jpg"/>
                        <TransparentTextComponent/>
                    </div>
                    <div className="ProfileContainer">
                        <ImageViewComponent title="Ideal Inc" imgUrl="images/Ideal.png"/>
                        <TransparentTextComponent/>
                    </div>

                    {/* • Cofounded a gaming company and designed the backend structure for our mobile strategy game using C# and Unity.
• Raised three thousand dollars and entered the semifinal in the McGill Dobson Cup. */}
            </div>
        );
    }
  
}