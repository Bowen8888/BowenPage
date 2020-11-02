import React, { Component } from 'react';
import './css/FeatureComponent.css'

export default class FeatureComponent extends Component {
    constructor(props) {
        super();

        this.state = {
            title: props.title,
            status: props.status,
            imgUrl: props.imgUrl
        }
    }

    render() {
        return (
            <div className="FeatureContainer" >
                <div className="FeatureTitleContainer">
                    {this.state.title}
                </div>
                <div
                style={{
                    backgroundImage: "url(" + process.env.PUBLIC_URL + "images/Onedesk.jpg" + ")"
                }}
                >

                </div>
                <div className="FeatureStatusContainer">
                    {this.state.status}
                </div>
            </div>
        );
    }
  
}