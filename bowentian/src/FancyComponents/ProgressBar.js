import React, {Component} from 'react';
import './css/ProgressBar.css'


export default class ProgressBar extends Component {
    constructor(props) {
        super();

        this.state = {
            progress: props.progress
        }

    }

    render() {
        return (
            <div className="ProgressBarContainer">
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