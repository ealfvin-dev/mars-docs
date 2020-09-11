import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header';
import Divider from '../../components/Divider';

import './Home.css'

function Home() {
    console.log(window.innerWidth)
    return (
        <div>
            <Header subHeader="Mass Reduction Software"/>
            <div className="home">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <p>
                            Create and run advanced mass input files with error checking, line-by-line air buoyancy corrections and a graphical user interface.
                        </p>
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                    <Grid item xs={12}>
                        <img src={require('./mars-ui.jpg')} width='1219px' alt="Mars software user interface" />
                    </Grid>
                    <Divider />
                    <Grid item xs={5}>
                        <h3>Input File Readability</h3>
                        <p>
                            Line tags are automatically inserted as you create files for better readability and lower chance of data entry errors.
                        </p>
                    </Grid>
                    <Grid item xs={7}>
                        <img src={require('./inputTags.jpg')} width={window.innerWidth < 1600 ? '100%' : '720px'} alt="Input file with caught error" />
                    </Grid>
                    <Divider />
                    <Grid item xs={5}>
                        <h3>Identify Errors in Input Files</h3>
                        <p>
                            MARS will run a series of checks on your input files before they run and identify any errors it finds.
                        </p>
                    </Grid>
                    <Grid item xs={7}>
                        <img src={require('./error-handling.jpg')} width={window.innerWidth < 1600 ? '100%' : '720px'} alt="Input file with caught error" />
                    </Grid>
                    <Divider />
                    <Grid item xs={4}>
                        <h3>Perform for line-by-line air buoyancy corrections and center of mass gravitational corrections</h3>
                        <p>
                            
                        </p>
                    </Grid>
                    <Grid item xs={8}>
                        
                    </Grid>
                    <Grid item xs={4}>
                        <img src={require('./Gravity.jpg')} width={window.innerWidth < 1200 ? '100%' : '350px'} alt="Gravity correction input example" />
                    </Grid>
                    <Grid item xs={8}>
                        <img src={require('./ABC.jpg')} width={window.innerWidth < 1200 ? '100%' : '636px'} alt="Air buoyancy correction input example" />
                    </Grid>
                    <Divider />
                    <Grid item xs={2}>
                        <img src={require('./split-series.jpg')} width='175px' alt="Split series menu view" />
                    </Grid>
                    <Grid item xs={5}>
                        <h3>View One Series at a Time</h3>
                        <p>
                            Navigate between connected calibrations in an input file and view input data for one series at a time.
                        </p>
                    </Grid>
                    <Grid item xs={5}>
                    </Grid>
                    <Divider />
                    <Grid item xs={5}>
                        <h3>Keep Track of What Data Has Been Entered in Each Series</h3>
                        <p>
                            Data entry is organized by series. Buttons colors will indicate what data has been entered in each series and what is left to complete.
                        </p>
                    </Grid>
                    <Grid item xs={7}>
                        <img src={require('./Input-Buttons.jpg')} width={window.innerWidth < 1200 ? '100%' : '500px'} alt="Input file with caught error" />
                    </Grid>
                    <Divider />
                </Grid>
            </div>
        </div>
    )
}

export default Home;
