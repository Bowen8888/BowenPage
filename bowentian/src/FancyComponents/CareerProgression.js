import React, {Component} from 'react';
import TypingEffect from '../Effects/TypingEffect';
import './css/CareerProgression.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class CareerProgression extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="CareerProgressionContainer">
                    <ProgressBar striped variant="success" now={40} />
                    <ProgressBar striped variant="info" now={20} />
                    <ProgressBar striped variant="warning" now={60} />
                    <ProgressBar striped variant="danger" now={80} />
            </div>
        );
    }

}