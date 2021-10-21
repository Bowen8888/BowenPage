import React, {Component} from 'react';
import './css/AvatarComponent.css'

export default class AvatarComponent extends Component {
    constructor(props) {
        super();

        this.state = {
            title: props.title,
            status: props.status,
            widthPercentage: props.widthPercentage,
            imgUrl: props.imgUrl
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth * this.state.widthPercentage});
    }

    render() {
        return (
            <div className="AvatarContainer" style={{
                backgroundImage: "url(" + process.env.PUBLIC_URL + "images/Profile.jpg" + ")"
            }}>
            </div>
        );
    }

}