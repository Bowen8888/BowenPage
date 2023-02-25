import React, {Component, createRef} from 'react';
import './css/MainPageSections.css';
import './css/ContactSection.css';
import emailjs from '@emailjs/browser';

export default class ContactPopup extends Component {
    constructor(props) {
        super();

        this.state = { 
            textAreaContent: "",
            onClose: props.onClose
        };
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.form = createRef();
    }

    handleTextAreaChange(e) {
        if (this.textAreaContent !== e.currentTarget.textContent) {
            this.setState({textAreaContent: e.currentTarget.textContent});
        }
    }
    sendEmail(e) {
        e.preventDefault();
        const msg = this.state.textAreaContent;

        //validate 
        if (msg) {
            this.setState({textAreaContent:''});
            this.state.onClose();
        //clean 
            // emailjs.sendForm('service_zgfbs35', 'template_o6xhzb8', this.form.current, 'pyCDUboPFC-ut6HVx')
            // .then((result) => {
            //     // show the user a success message
            //     this.setState({textAreaContent:''});
            //     this.state.onClose();
            // }, (error) => {
            //     // show the user an error
            //     console.log(error)

            // });
        }
    }

    render() {

        return (
            <div className="SectionContainer ContactSectionContainer">
                <form ref={this.form} onSubmit={this.sendEmail} className="ContactForm">
                    <div className="ContactMessageSectionContainer">
                        <div className='CloseSymbol' onClick={this.state.onClose}>
                            &#10540;
                        </div>
                        <div contentEditable className="form-control ContactSectionTextArea" id=""
                                     name="message" onInput={this.handleTextAreaChange}>
                                <input type="submit" className="btn btn-info ContactSectionSendButton" value="Send"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}