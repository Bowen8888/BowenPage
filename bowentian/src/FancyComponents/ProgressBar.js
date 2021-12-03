import React, {Component} from 'react';
import './css/ProgressBar.css'


export default class ProgressBar extends Component {
    constructor(props) {
        super();

        this.state = {
            progress: props.progress,
            label: props.label
        }

    }

    render() {
        return (
            <div className="ProgressBarContainer">
                <div className="ProgressBarLabel">
                    {this.state.label}
                </div>
                <div className="ProgressBarBackground">
                    <div className="ProgressBarBarSection" style={{
                        width: this.state.progress
                    }}>
                        {this.state.progress}
                    </div>
                </div>
            </div>
        );
    }

}