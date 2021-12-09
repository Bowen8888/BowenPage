import React, {Component} from 'react';
import './css/MainPageSections.css';
import './css/ContactSection.css';
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc, Timestamp } from "firebase/firestore";
import db from "../index"

export default class ContactSection extends Component {
    constructor() {
        super();

        this.state = { textAreaContent: "" };
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }

    handleTextAreaChange(e) {
        this.setState({textAreaContent: e.target.value});
    }

    sendEmail(e) {
        e.preventDefault();

        let message = {
            id: uuidv4(),
            content: this.state.textAreaContent,
            created: Timestamp.now()
        };
        const cityRef = doc(db, 'messages', message.id);
        setDoc(cityRef, message, {merge: true}).then(r => {

        }).catch(e => {
            console.log(e)
        });
    }

    render() {
        return (
            <div className="SectionContainer DefaultBackground ContactSectionContainer">
                <div className="SectionLabelContainer CareerSectionLabelContainer">
                    <div>
                        Contact
                    </div>
                </div>
                <form onSubmit={this.sendEmail}>
                    <div className="row pt-5 mx-auto">
                          <textarea className="form-control ContactSectionTextArea" id=""
                                    placeholder="Send me a message." name="message" onChange={this.handleTextAreaChange}/>
                        <input type="submit" className="btn btn-info ContactSectionSendButton" value="Send"/>
                    </div>
                </form>
            </div>
        );
    }

}