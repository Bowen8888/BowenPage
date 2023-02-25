import React, { Component } from 'react';
import './css/CareerListComponent.css'

export default class CareerListComponent extends Component {
    constructor(props) {
        super();

        this.state = {
            career1: props.career1,
            career2: props.career2,
            imgUrl: props.imgUrl
        }
    }

    render() {
        return (
            <div className="CareerListContainer">
                <div className='CareerContainer'>
                    <div className="CareerNameContainer">
                        {this.state.career1.name}
                    </div>
                    <div className='CareerYearContainer'>
                        {this.state.career1.year}
                    </div>
                </div>
                <div className='VerticalBar'>
                    
                </div>
                <div className='CareerContainer'>
                    <div className="CareerNameContainer">
                        {this.state.career2.name}
                    </div>
                    <div className="CareerYearContainer">
                        {this.state.career2.year}
                    </div>
                </div>
            </div>
        );
    }
  
}