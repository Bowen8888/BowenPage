import React, {Component} from 'react';
import './css/MessengerComponent.css'

export default class MessengerComponent extends Component {
    constructor(props) {
        super();
        

        this.state = {
        }

    }

    render() {
        return (
            <div className="">
                <div className="MessageSectionContainer">
                    Type your message here.
                </div>
                <div className="SendMessageButton">

                </div>
            </div>
        );
    }

}