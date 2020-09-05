import React from 'react';
import Header from '../../components/Header';
import Grid from '@material-ui/core/Grid';

import './ValidationDetails.css'

function ValidationDetails() {
    return (
        <div>
            <Header subHeader="Mass Reduction Software: Validation Details"/>
            <div className="validationDetails">
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <p>
                    {/* The validation includes checks for 
                    accuracy of calculated results, acuracy of the output file and that results are not produced if bad data is input 
                    into the program. <br />  <br /> */}
                    This page provides details on validation that MARS has been through. All of the validation checks detailed 
                    below are automatically re-run each time MARS is opened. These checks can also be run by clicking "Run Tests" 
                    from the menu, where you can see results of the validation tests including details if any tests failed. <br />
                    </p>
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
                <h2>System Checks</h2>

                <h3>Test 1 - Test 6:</h3>
                <p className="testDesc">
                    Tests that the nessesary software is installed to run the program and that the correct versions of dependencies are installed.
                </p>

                <h2>Runtime Error Handling</h2>
                
                <h3>Test 6:</h3>
                <p className="testDesc">
                    Tests that a correctly-made input file can be run sucessfully.
                </p>

                <h3>Test 7:</h3>
                <p className="testDesc">
                    Tests that an input file with a non-invertible design matrix produces an error when run.
                </p>

                {/* <h3>Test 9:</h3>
                <p className="testDesc">
                    Tests that an input file with a number of balance observations that does not match the design produces an error when run.
                </p>

                <h3>Test 10:</h3>
                <p className="testDesc">
                    Tests that an input file with a number of environmental observations that does not match the design produces an error when run.
                </p>

                <h3>Test 11:</h3>
                <p className="testDesc">
                    Tests that a multi-series input file with a series that lacks a restraint passed to it produces an error when run.
                </p> */}

                <h3>Test 8:</h3>
                <p className="testDesc">
                    Tests that an input file using gravity corrections with a weight height of 0 cm produces an error when run.
                </p>

                <h2>Input File Error Identification</h2>

                <h3>Test 9 - Test 10:</h3>
                <p className="testDesc">
                    Tests that direct readings vs manual readings are sucessfully determined. This is used to set required lines in the input file.
                </p>

                <h3>Test 11:</h3>
                <p className="testDesc">
                    Tests that a correctly-input report number (exists, no spaces) is identified as correct.
                </p>

                <h3>Test 12:</h3>
                <p className="testDesc">
                    Tests that a correctly-structured input file (@SERIES before each series) is identified as correct.
                </p>

                <h3>Test 13:</h3>
                <p className="testDesc">
                    Tests that an input file with recognized entry tags is identified as correct.
                </p>

                <h3>Test 14:</h3>
                <p className="testDesc">
                    Tests that an input file with all required entry tags is identified as correct.
                </p>

                <h3>Test 15:</h3>
                <p className="testDesc">
                    Tests that an input file without repeated entry tags is identified as correct.
                </p>

                <h3>Test 16:</h3>
                <p className="testDesc">
                    Tests that a correctly-made input file passes the input checks (checking all individual entries for correct type and formatting).
                </p>

                <h3>Test 17:</h3>
                <p className="testDesc">
                    Tests that a correctly-made input file passes the required checks (checking structure consistency,  
                    restraints passed down, number of balance observations and environmentals match the design).
                </p>

                <h3>Test 18:</h3>
                <p className="testDesc">
                    Tests that a correctly-made input file passes the secondary checks (checking environmentals are in SOP 28 limits).
                </p>

                <h3>Test 19:</h3>
                <p className="testDesc">
                    Tests that an incorrectly-input report number (DNE, or contains spaces) is identified as incorrect.
                </p>

                <h3>Test 20:</h3>
                <p className="testDesc">
                    Tests that a incorrectly-structured input file is identified as incorrect.
                </p>

                <h3>Test 21:</h3>
                <p className="testDesc">
                    Tests that an input file with an unrecognized entry tag is identified as incorrect.
                </p>

                <h3>Test 22:</h3>
                <p className="testDesc">
                    Tests that an input file with a missing entry tag is identified as incorrect.
                </p>

                <h3>Test 23:</h3>
                <p className="testDesc">
                    Tests that an input file with a repeated entry tag is identified as incorrect.
                </p>

                <h3>Test 24:</h3>
                <p className="testDesc">
                    Tests that an input file with entry tags but missing input is identified as incorrect.
                </p>

                <h3>Test 25:</h3>
                <p className="testDesc">
                    Tests that an input file with non-numerical input is identified as incorrect.
                </p>

                <h3>Test 26:</h3>
                <p className="testDesc">
                    Tests that an input file with the check standard and restraint in the same position is identified as incorrect.
                </p>

                <h2>Output File Checks</h2>

                <h3>Test 27:</h3>
                <p className="testDesc">
                    Tests that an output file can be sucessfully written out.
                </p>

                <h3>Test 28 - Test 33:</h3>
                <p className="testDesc">
                    Tests that calculated masses are correctly written to the output file.
                </p>

                <h3>Test 34 - Test 39:</h3>
                <p className="testDesc">
                    Tests that weight densities are correctly written to the output file.
                </p>

                <h3>Test 40:</h3>
                <p className="testDesc">
                    Tests that the calculated within-process standard deviation is correctly written to the output file.
                </p>

                <h3>Test 41:</h3>
                <p className="testDesc">
                    Tests that the accepted within-process standard deviation is correctly written to the output file.
                </p>

                <h3>Test 42:</h3>
                <p className="testDesc">
                    Tests that the calculated F-critical value is correctly written to the output file.
                </p>

                <h3>Test 43:</h3>
                <p className="testDesc">
                    Tests that the calculated F-value is correctly written to the output file.
                </p>

                <h3>Test 44:</h3>
                <p className="testDesc">
                    Tests that the calculated check standard correction is correctly written to the output file.
                </p>

                <h3>Test 45:</h3>
                <p className="testDesc">
                    Tests that the accepted check standard correction is correctly written to the output file.
                </p>

                <h3>Test 46:</h3>
                <p className="testDesc">
                    Tests that the calculated T-critical value is correctly written to the output file.
                </p>

                <h3>Test 47:</h3>
                <p className="testDesc">
                    Tests that the calculated T-value is correctly written to the output file.
                </p>

                <h2>Data Storage Checks</h2>

                <h3>Test 48:</h3>
                <p className="testDesc">
                    Tests that a sensitivity weight can be saved to the database.
                </p>

                <h3>Test 49:</h3>
                <p className="testDesc">
                    Tests that all sensitivity weights can be retrieved from the database.
                </p>

                <h3>Test 50 - Test 53:</h3>
                <p className="testDesc">
                    Tests that sensitivity weight data retrieved from the database is the same as the data that was put in for a given entry 
                    (name, mass, density, cce match going in and coming out).
                </p>

                <h3>Test 54:</h3>
                <p className="testDesc">
                    Tests that a sensitivity weight can be deleted from the database.
                </p>

                <h3>Test 55:</h3>
                <p className="testDesc">
                    Tests that standard deviations can be saved to the database.
                </p>

                <h3>Test 56:</h3>
                <p className="testDesc">
                    Tests that all standard deviations can be retrieved from the database.
                </p>

                <h3>Test 57 - Test 59:</h3>
                <p className="testDesc">
                    Tests that standard deviation data retrieved from the database is the same as the data that was put in for a given entry 
                    (nominal, sigma-w, sigma-t match going in and coming out).
                </p>

                <h3>Test 60:</h3>
                <p className="testDesc">
                    Tests that a standard deviation can be deleted from the database.
                </p>

                <h2>Data Reduction Checks</h2>

                <h3>Test 61 - 72:</h3>
                <p className="testDesc">
                    Tests that MARS air density calculations agree with NIST Mass Code air density calculations for different temperatures, pressures and humidities 
                    with a tolerance of 1e-7 g/cm<sup>3</sup>.
                </p>
            </div>
        </div>
    )
}

export default ValidationDetails;
