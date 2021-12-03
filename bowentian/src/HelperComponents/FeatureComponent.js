import React, { Component } from 'react';
import './css/FeatureComponent.css'

export default class FeatureComponent extends Component {
    constructor(props) {
        super();

        this.state = {
            title: props.title,
            status: props.status,
            widthPercentage: props.widthPercentage,
            imgUrl: props.imgUrl,
            imgBorderColor: props.imgBorderColor == null ? "white" : props.imgBorderColor,
            textContent: props.textContent
        }

    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }

    render() {
        return (
            <div className="FeatureContainer" style={{
                width: window.innerWidth* this.state.widthPercentage,
                minHeight: window.innerWidth* this.state.widthPercentage * 1.5,
                maxHeight: window.innerWidth* this.state.widthPercentage * 2
            }}>
                <div className="FeatureTitleContainer">
                    {this.state.title}
                </div>
                <div className="FeatureImageContainer">
                <div className="FeatureImage"
                style={{
                    backgroundImage: "url(" + process.env.PUBLIC_URL + this.state.imgUrl + ")",
                    borderColor: this.state.imgBorderColor
                }}
                >

                </div>
                </div>
                <div className="FeatureTextContentContainer">
                    {this.state.textContent}
                </div>
                <div className="FeatureStatusContainer">
                    {this.state.status}
                </div>
            </div>
        );
    }
  
}