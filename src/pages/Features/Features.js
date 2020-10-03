import React from 'react';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Header from '../../components/Header';
import Divider from '../../components/Divider';

import '../pages.css'
import './Features.css'

function Features() {
    const largeScreen = useMediaQuery('(min-width:1595px)');
    return (
        <div>
            <Header />
            <div className='pageLayout'>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <p className='summary'>
                            Calculate results of precision mass calibrations with error checking, line-by-line air buoyancy corrections and a graphical user interface.
                        </p>
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                    <Grid item xs={12}>
                        {largeScreen 
                        ? <img src={require('./mars-ui.jpg')} width='1271px' alt="Mars software user interface" />
                        : <img src={require('./mars-ui-small.jpg')} width='964px' alt="Mars software user interface" />
                        }
                    </Grid>
                    <Divider />
                    <Grid item xs={5}>
                        <h3>Input File Readability</h3>
                        <p>
                            As input files are made, tags are automatically appended to each line for better readability and lower risk of data entry errors.
                        </p>
                    </Grid>
                    <Grid item xs={7}>
                        {largeScreen
                        ? <img src={require('./inputTags.jpg')} width='735px' alt="Input file with caught error" />
                        : <img src={require('./inputTags-small.jpg')} width='526' alt="Input file with caught error" />
                        }
                    </Grid>
                    <Divider />
                    <Grid item xs={5}>
                        <h3>Identify Errors in Input Files</h3>
                        <p>
                            MARS automatically runs a series of checks on user input data. Any errors or inconsistencies found in the data are identified,
                            making it easy to troubleshooting input files.
                        </p>
                    </Grid>
                    <Grid item xs={7}>
                        {largeScreen
                        ? <img src={require('./error-handling.jpg')} width='735px' alt="Input file with caught error" />
                        : <img src={require('./error-handling-small.jpg')} width='530px' alt="Input file with caught error" />
                        }
                    </Grid>
                    <Divider />
                    <Grid item xs={5}>
                        <h3>Perform line-by-line air buoyancy corrections and center of mass gravitational corrections</h3>
                        <p>
                            MARS has the option to process different environmental conditions for each line in the calibration. The program can also
                            perform gravitational corrections when calibrating weights of different heights.
                        </p>
                    </Grid>
                    <Grid item xs={7}>
                        
                    </Grid>
                    <Grid item xs={4}>
                        <img src={require('./Gravity.jpg')} width='325' alt="Gravity correction input example" />
                    </Grid>
                    <Grid item xs={8}>
                        <img src={require('./ABC.jpg')} width='594' alt="Air buoyancy correction input example" />
                    </Grid>
                    <Divider />
                    <Grid item xs={2}>
                        <img src={require('./split-series.jpg')} width='154px' alt="Split series menu view" />
                    </Grid>
                    <Grid item xs={5}>
                        <h3>View One Series at a Time</h3>
                        <p>
                            Navigate between multiple series in an input file and view input data for one series at a time.
                        </p>
                    </Grid>
                    <Grid item xs={5}>
                    </Grid>
                    <Divider />
                    <Grid item xs={5}>
                        <h3>Keep Track of What Data Has Been Entered For Each Series</h3>
                        <p>
                            Data entry is organized by series. Buttons colors will indicate what data has been entered in each series and what is left to complete.
                        </p>
                    </Grid>
                    <Grid item xs={7}>
                        <img src={require('./Input-Buttons.jpg')} width='400' alt="Input file with caught error" />
                    </Grid>
                    <Divider />
                    <Grid item xs={6}>
                        <h3>Data Visualization Dashboard</h3>
                        <p>
                            Visualize measurement results and spot trends within the calibration. If the F or T test failed,
                            use the plots to identify mistakes that may have occured durign the calibration process. Assess balance
                            performance over the course of a calibration and any dependencies it may have on operating temperature.
                        </p>
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                    <Grid item xs={12}>
                        {largeScreen 
                        ? <img src={require('./dashboard-ui.jpg')} width='1275px' alt="Mars software data visualization" />
                        : <img src={require('./dashboard-ui-small.jpg')} width='966px' alt="Mars software data visualization" />
                        }
                    </Grid>
                    <Divider />
                    <h3>More details about these features can be found in the Documentation tab</h3>
                </Grid>
            </div>
        </div>
    )
}

export default Features;
