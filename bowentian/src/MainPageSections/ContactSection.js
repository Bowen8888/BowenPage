import React, {Component} from 'react';
import './css/MainPageSections.css'
import './css/ContactSection.css'
import emailjs from "emailjs-com"

export default class ContactSection extends Component {
    constructor() {
        super();
    }

    render() {
        function sendEmail(e) {
            e.preventDefault();

            // emailjs.sendForm('service_44nuhq2', 'template_5em7z8a', e.target, 'user_aMG6OWs4B2oNCbq2nGVNl')
            //     .then((result) => {
            //         console.log(result.text);
            //     }, (error) => {
            //         console.log(error.text);
            //     });
            // e.target.reset()
        }

        return (
            <div className="SectionContainer DefaultBackground ContactSectionContainer">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                          <textarea className="form-control ContactSectionTextArea" id=""
                                    placeholder="Send me a message." name="message"/>
                        <input type="submit" className="btn btn-info ContactSectionSendButton" value="Send"/>
                    </div>
                </form>
            </div>
        );
    }

}