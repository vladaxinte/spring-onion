import React, { Component } from 'react';
import {HomeIcon} from "../shared/SVGFactory.js";

class Header extends Component {
    render() { 
        return <div className="header">
            <div className="app-icon">
                <HomeIcon />
                <h1>Home</h1>
            </div>
        </div>;
    }
}
 
export default Header;