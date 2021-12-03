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
            <div className="AvatarComponentContainer">
                <div className="AvatarContainer" style={{
                    backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/Profile.jpg" + ")"
                }}>
                </div>

<svg height="0" width="0">
    <defs>
        <clipPath id="svgPath">
            <path fill="#FFFFFF" d="M93.0139721,22.6 L56.6866267,1.8 C54.5908184,0.6 52.1956088,0 49.9001996,0 C47.6047904,0 45.2095808,0.6 43.1137725,1.8 L6.78642715,22.6 C2.59481038,25 0,29.4 0,34.2 L0,75.8 C0,80.6 2.59481038,85 6.78642715,87.4 L43.2135729,108.2 C45.3093812,109.4 47.6047904,110 50,110 C52.2954092,110 54.6906188,109.4 56.7864271,108.2 L93.2135729,87.4 C97.4051896,85 100,80.6 100,75.8 L100,34.2 C99.8003992,29.4 97.2055888,25 93.0139721,22.6 L93.0139721,22.6 Z"/>
{/*             <path fill="#FFFFFF" d="
M200,50
L100, 0 
    C100,0 100,0 100,0 
L0,50 
    C 0,50 0,50 0,50 
L0,150 
    C0,150 0,150 0,150 
L100,200 
    C100,200 100,200 100,200
L200,150
    C200,150 200,150 200,150
L200,50 
    C200,50 200,50 200,50
L93,23 
Z"/> */}

        </clipPath>
    </defs>
</svg>
{/* <div class="avatar">
		<div class="container">
			<img 
            className="avatarImg" style={{
                backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/Profile.jpg" + ")"
            }}
             />
		</div>
</div> */}
                <div className="Name">Bowen Tian • McGill • OneDesk</div>
            </div>
            
        );
    }

}