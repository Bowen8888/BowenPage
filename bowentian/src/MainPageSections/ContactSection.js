import React, { Component } from 'react';
import './css/MainPageSections.css'
import './css/ContactSection.css'

export default class ContactSection extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="SectionContainer DefaultBackground ContactSectionContainer">
                <div>
                    <div>Send me a message.</div>  
                </div>
            </div>
        );
    }
  
}