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
                <ProgressBar label="Core Java" progress="85%"/>
                <ProgressBar label="GWT" progress="85%"/>
                <ProgressBar label="Hibernate" progress="85%"/>
                <ProgressBar label="Spring framework" progress="85%"/>
                <ProgressBar label="Firebase" progress="85%"/>
                <ProgressBar label="Angular" progress="85%"/>
            </div>
        );
    }

}