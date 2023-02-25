import React, {Component, createRef} from 'react';
import './css/MainPageSections.css';
import './css/ContactSection.css';
import emailjs from '@emailjs/browser';

export default class ContactSection extends Component {
    constructor() {
        super();

        this.state = { textAreaContent: "" };
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.form = createRef();
    }

    handleTextAreaChange(e) {
        if (this.textAreaContent !== e.target.value) {
            this.setState({textAreaContent: e.target.value});
        }
    }
    sendEmail(e) {
        e.preventDefault();
        const msg = this.state.textAreaContent;

        //validate 
        if (msg) {
        //clean 
            emailjs.sendForm('service_zgfbs35', 'template_o6xhzb8', this.form.current, 'pyCDUboPFC-ut6HVx')
            .then((result) => {
                // show the user a success message
                this.setState({textAreaContent:''});
            }, (error) => {
                // show the user an error
                console.log(error)

            });
        }
    }

    render() {

        return (
            <div className="SectionContainer DefaultBackground ContactSectionContainer">
                <div className="SectionLabelContainer CareerSectionLabelContainer">
                    <div>
                        Contact
                    </div>
                </div>
                {/* <div className="row pt-5 mx-auto">
                    <textarea className="form-control ContactSectionTextArea" id="" value={this.state.textAreaContent}
                                placeholder="Send me a message." name="message" onChange={this.handleTextAreaChange}/>
                    <div onClick={this.sendEmail}  className="btn btn-info ContactSectionSendButton">Send</div>
                </div> */}
                <form ref={this.form} onSubmit={this.sendEmail}>
                    <div className="row pt-5 mx-auto">
                          <textarea className="form-control ContactSectionTextArea" id="" value={this.state.textAreaContent}
                                    placeholder="Send me a message." name="message" onChange={this.handleTextAreaChange}/>
                        <input type="submit" className="btn btn-info ContactSectionSendButton" value="Send"/>
                    </div>
                </form>
            </div>
        );
    }

}