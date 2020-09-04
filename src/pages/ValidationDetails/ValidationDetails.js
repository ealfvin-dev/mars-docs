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
                    Tests that the nessesary software is installed to run the program and that the correct versions of math libraries are installed.
                </p>

                <h2>Runtime Error Handling</h2>
                
                <h3>Test 7:</h3>
                <p className="testDesc">
                    Tests that a correctly-made input file can be run sucessfully.
                </p>

                <h3>Test 8:</h3>
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

                <h3>Test 9:</h3>
                <p className="testDesc">
                    Tests that an input file using gravity corrections with a weight height of 0 cm produces an error when run.
                </p>

                <h2>Input File Error Identification</h2>

                <h3>Test 10 - Test 11:</h3>
                <p className="testDesc">
                    Tests that direct readings vs manual readings are sucessfully determined. This is used to set required lines in the input file.
                </p>

                <h3>Test 12:</h3>
                <p className="testDesc">
                    Tests that a correctly-input report number (exists, no spaces) is identified as correct.
                </p>

                <h3>Test 13:</h3>
                <p className="testDesc">
                    Tests that a correctly-structured input file (@SERIES before each series) is identified as correct.
                </p>

                <h3>Test 14:</h3>
                <p className="testDesc">
                    Tests that an input file with recognized entry tags is identified as correct.
                </p>

                <h3>Test 15:</h3>
                <p className="testDesc">
                    Tests that an input file with all required entry tags is identified as correct.
                </p>

                <h3>Test 16:</h3>
                <p className="testDesc">
                    Tests that an input file without repeated entry tags is identified as correct.
                </p>

                <h3>Test 17:</h3>
                <p className="testDesc">
                    Tests that a correctly-made input file passes the input checks (checking all individual entries for correct type and formatting).
                </p>

                <h3>Test 18:</h3>
                <p className="testDesc">
                    Tests that a correctly-made input file passes the required checks (checking structure consistency,  
                    restraints passed down, number of balance observations and environmentals match the design).
                </p>

                <h3>Test 19:</h3>
                <p className="testDesc">
                    Tests that a correctly-made input file passes the secondary checks (checking environmentals are in SOP 28 limits).
                </p>

                <h3>Test 20:</h3>
                <p className="testDesc">
                    Tests that an incorrectly-input report number (DNE, or contains spaces) is identified as incorrect.
                </p>

                <h3>Test 21:</h3>
                <p className="testDesc">
                    Tests that a incorrectly-structured input file is identified as incorrect.
                </p>

                <h3>Test 22:</h3>
                <p className="testDesc">
                    Tests that an input file with an unrecognized entry tag is identified as incorrect.
                </p>

                <h3>Test 23:</h3>
                <p className="testDesc">
                    Tests that an input file with a missing entry tag is identified as incorrect.
                </p>

                <h3>Test 24:</h3>
                <p className="testDesc">
                    Tests that an input file with a repeated entry tag is identified as incorrect.
                </p>

                <h3>Test 25:</h3>
                <p className="testDesc">
                    Tests that an input file with entry tags but missing input is identified as incorrect.
                </p>

                <h3>Test 26:</h3>
                <p className="testDesc">
                    Tests that an input file with non-numerical input is identified as incorrect.
                </p>

                <h2>Output File Checks</h2>

                <h3>Test 27:</h3>
                <p className="testDesc">
                    Tests that an output file can be sucessfully written out.
                </p>
            </div>
        </div>
    )
}

export default ValidationDetails;
