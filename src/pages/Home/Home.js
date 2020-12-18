import React from 'react';
import Grid from '@material-ui/core/Grid';

import './Home.css';

function Home() {
    return (
        <div className='homeMain'>
             <Grid container spacing={3}>
                 <Grid item xs={12} className='marsLogoGrid'>
                    <img src={require('./logo-out.png')} height='200px' alt='Mars Logo' className='marsLogo' />
                 </Grid>
                 <Grid item xs={12}>
                    <h2 className='logoTitle'>MARS - Mass Reduction Software</h2>
                </Grid>
                <Grid item xs={12}>
                    <h3 className='homepageText'>
                        <strong>{"Generate high-precision mass calibration results\r\nwith protection against data-entry errors."}</strong>
                    </h3>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;
