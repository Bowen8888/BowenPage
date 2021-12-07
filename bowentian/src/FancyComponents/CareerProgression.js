import React, {Component} from 'react';
import './css/CareerProgression.css'
import ProgressBar from './ProgressBar';


export default class CareerProgression extends Component {

    render() {
        return (
            <div className="CareerProgressionContainer">
                <div className="CareerProgressionLabel">
                    Skills
                </div>
                <ProgressBar label="Server" progress="88%" content="Java, Spring, GWT, Hibernate"/>
                <ProgressBar label="Client" progress="71%" content="GWT, React.js, Typescript, CSS, HTML"/>
                <ProgressBar label="Database" progress="65%" content="PostgresSQL, Liquibase, Hibernate, Firebase"/>
                <ProgressBar label="Version Control" progress="81%" content="Github, Subversion"/>
                <ProgressBar label="Tools" progress="73%" content="Maven, Postman, IntelliJ IDEA, Chrome debugger, PGAdmin"/>
            </div>
        );
    }

}