import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <Grid container spacing={2}>
                <Grid item style={{minWidth: '345px'}}>
                    <div className="mainHeader">
                        MARS
                    </div>
                    <div className="secondaryHeader">
                        Mass Reduction Software
                    </div>
                </Grid>
                <Grid item>
                    <img className='headerLogo' src={require('./logo-out.png')} height='90px' alt='Mars logo'/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header;
