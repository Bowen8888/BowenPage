import React, {Component} from 'react';
import './css/MainPageSections.css';
import './css/ContactSection.css';
import emailjs from "emailjs-com";
import { v4 as uuidv4 } from 'uuid';
import { getFirestore, doc, setDoc, Timestamp } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNdvAhOShIilxTE2McBwyhgFO_55Wed_A",
  authDomain: "bowenpage-3bc48.firebaseapp.com",
  projectId: "bowenpage-3bc48",
  storageBucket: "bowenpage-3bc48.appspot.com",
  messagingSenderId: "298307101532",
  appId: "1:298307101532:web:4e8e403eb5dbc0aef71799"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


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

        // emailjs.sendForm('service_44nuhq2', 'template_5em7z8a', e.target, 'user_aMG6OWs4B2oNCbq2nGVNl')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        // e.target.reset()
        let message = {
            id: uuidv4(),
            content: this.state.textAreaContent,
            created: Timestamp.now()
        };
        const cityRef = doc(db, 'messages', message.id);
        setDoc(cityRef, message, { merge: true });
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