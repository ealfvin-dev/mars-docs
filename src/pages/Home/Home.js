import React from 'react';
import Grid from '@material-ui/core/Grid';

import './Home.css';

function Home() {
    return (
        <div className='homeMain'>
            {/* <Header subHeader="Mass Reduction Software"/> */}
             <Grid container spacing={3}>
                 <Grid item xs={12} style={{justifyContent: 'center'}}>
                    <img src={require('./logo-out.png')} height='200px' alt='Mars Logo' style={{display: 'block', margin: 'auto'}} />
                 </Grid>
                 <Grid item xs={12}>
                    <h2 className='logoTitle' style={{textAlign: 'center'}}>MARS - Mass Reduction Software</h2>
                </Grid>
                <Grid item xs={12}>
                    {/* <h3 className='homepageText' style={{textAlign: 'center'}}>Allows your lab to produce more accurate precision mass results that are less prone to data-entry errors.</h3> */}
                    <h3 className='homepageText' style={{textAlign: 'center', whiteSpace: 'pre'}}><strong>{"Report more accurate precision mass results\r\nwith protection against data-entry errors."}</strong></h3>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;
