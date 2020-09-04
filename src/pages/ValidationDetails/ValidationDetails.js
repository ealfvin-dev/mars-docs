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
                    This page provides details on the validation that MARS has been through. All of the validation checks detailed 
                    below are automatically re-run each time MARS is opened. These checks can also be run by clicking "Run Tests" 
                    from the menu, where you can see results of the validation tests including details if any tests failed. <br />
                    </p>
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
                <h3>Test 1 - Test 6:</h3>
                <p className="testDesc">
                    Tests that the nessesary software is installed to run the program and that the correct versions of math libraries are installed.
                </p>
                
                <h3>Test 7:</h3>
                <p className="testDesc">
                    Tests that a correctly-made input file can be run sucessfully.
                </p>

                <h3>Test 8:</h3>
                <p className="testDesc">
                    Tests that an input file with a non-invertible design matrix produces an error when run.
                </p>
            </div>
        </div>
    )
}

export default ValidationDetails;
