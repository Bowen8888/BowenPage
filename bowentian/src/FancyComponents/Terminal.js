import React, {Component} from 'react';
import TypingEffect from '../Effects/TypingEffect';
import './css/Terminal.css'

export default class Terminal extends Component {

    render() {
        return (
            <div className="TerminalContainer">
               <div className="TerminalHeader">
                   <div className="CloseButton"></div>
                   <div className="MinimizeButton"></div>
                   <div className="ZoomButton"></div>
                   <div className="TerminalTitle">
                       ~bowen.tian$
                   </div>
               </div>
               <div className="TerminalTextArea">
                   <div className="TerminalText">
                        <TypingEffect/>
                   </div>
               </div>
            </div>
        );
    }

}