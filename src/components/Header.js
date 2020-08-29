import React from 'react';
import './Header.css'

function Header(props) {
    return (
        <div className="header">
            <div className="mainHeader">
                MARS
            </div>
            <div className="secondaryHeader">
                {props.subHeader}
            </div>
        </div>
    )
}

export default Header;
