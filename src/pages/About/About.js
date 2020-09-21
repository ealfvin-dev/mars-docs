import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header';

import './About.css'

function About() {
    return (
        <div>
            <Header />
            <div className='about'>
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <p>
                        MARS was developed by Erik Alfvin, the former Technical Manager for the State of Minnesota Metrology Lab, and now a full-time software engineer.
                        The idea for MARS came from the desire to develop something that could help calibration laboratories produce more accurate precision measurement results
                        (following NIST SOP 28) with an easy-to-use graphical interface.
                        <br/> <br/>
                        The largest accuracy improvement that MARS offers is line-by-line air buoyancy corrections. This is especially important when measurements are made
                        on automated balances and even made manually when the air pressure changes during the calibration.
                        <br/> <br/>
                        For improved reliability, MARS is designed to check input data for consistency and identify any errors that may have occurred during data entry. This makes troubleshooting fast 
                        and reduces the risk of producing bad measurement results. There are also a series of 211 internal validation tests that run each time the program is opened 
                        and ensure that real-time mass calculations are accurate.
                        </p>
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default About;
