import React, {Component} from 'react';
import './css/CareerProgression.css'
import ProgressBar from './ProgressBar';


export default class CareerProgression extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="CareerProgressionContainer">
                <ProgressBar progress="85%"/>
                <ProgressBar progress="40%"/>
                <ProgressBar progress="10%"/>
                <ProgressBar progress="75%"/>
                <ProgressBar progress="90%"/>
                <ProgressBar progress="20%"/>
            </div>
        );
    }

}