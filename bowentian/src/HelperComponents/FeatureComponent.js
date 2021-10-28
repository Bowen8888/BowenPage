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

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth* this.state.widthPercentage});
      }

    render() {
        return (
            <div className="FeatureContainer" style={{
                width: this.state.width,
                minHeight: this.state.width * 1.5,
                maxHeight: this.state.width * 2
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