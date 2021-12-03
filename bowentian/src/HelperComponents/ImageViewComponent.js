import React, { Component } from 'react';
import './css/ImageViewComponent.css'

export default class ImageViewComponent extends Component {
    constructor(props) {
        super();

        this.state = {
            title: props.title,
            imgUrl: props.imgUrl
        }
    }

    render() {
        return (
            <div className="ImageViewContainer">
                <div className="ImageViewTitleContainer">
                    {this.state.title}
                </div>
            </div>
        );
    }
  
}