import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <img src={require('./MarsFELogo.png')} width='442px' alt='Mars logo'/>
        </div>
    )
}

export default Header;
