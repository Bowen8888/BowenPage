import React, { Component } from 'react';
import './css/TransparentTextComponent.css'
import CareerProgression from '../FancyComponents/CareerProgression';

export default class TransparentTextComponent extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="TransparentTextComponent">
                <CareerProgression></CareerProgression>
            </div>
        );
    }
  
}