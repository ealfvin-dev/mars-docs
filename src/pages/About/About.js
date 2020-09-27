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
                        The idea for MARS came from the desire to develop a tool to help calibration laboratories following NIST SOP 28 produce more accurate precision 
                        measurement results with an easy-to-use graphical interface.
                        <br/> <br/>
                        The most significant improvement to measurement accuracy that MARS offers is line-by-line air buoyancy corrections. This is especially important when measurements are made
                        on automated balances or performed manually when the air pressure changes during the calibration.
                        <br/> <br/>
                        MARS also improves reliability. MARS is designed to check input data for consistency and identify any errors that may have occurred during data entry. This makes troubleshooting fast 
                        and reduces the risk of producing bad measurement results. A series of 211 internal validation tests runs each time the program is opened, further
                        ensuring that real-time mass calculations are accurate.
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
