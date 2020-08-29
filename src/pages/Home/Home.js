import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header';
import Divider from '../../components/Divider';

import './Home.css'

function Home() {
    return (
        <div>
            <Header subHeader="Mass Reduction Software"/>
            <div className="home">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <img src={require('./mars-ui.jpg')} width='90%' alt="Mars software user interface" />
                    </Grid>
                    <Divider />
                    <Grid item xs={5}>
                        <h3>Catch Errors in Input Files Before They Run</h3>
                        <p>
                            MARS will run checks on your input files before they run and identify any errors it finds.
                        </p>
                    </Grid>
                    <Grid item xs={7}>
                        <img src={require('./error-handling.jpg')} width='100%' alt="Input file with caught error" />
                    </Grid>
                    <Divider />
                    <Grid item xs={2}>
                        <img src={require('./split-series.jpg')} width='100%' alt="Split series menu view" />
                    </Grid>
                    <Grid item xs={10}>
                        <h3>View One Series at a Time</h3>
                        <p>
                            Navigate between conected series in a calibration and view one series at a time.
                        </p>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Home;
