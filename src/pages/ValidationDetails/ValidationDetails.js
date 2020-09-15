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
                    This page provides details on validation that MARS has been through. All of the validation tests detailed 
                    below have been checked manually and are also automatically re-run every time MARS is opened. This ensures that in the unlikely event of a file becoming 
                    corrupted or computer malfunction, an error will be displayed when the program is opened. These tests can also be run by clicking "Run Tests" 
                    in the menu. <br />
                    </p>
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
                <h2>System Checks</h2>

                <h3 className="testHeader">Test 1 - Test 6:</h3>
                <p className="testDesc">
                    Tests that the nessesary software is installed to run the program and that the correct versions of dependencies are installed.
                </p>

                <h2>Runtime Error Handling</h2>
                
                <h3 className="testHeader">Test 6:</h3>
                <p className="testDesc">
                    Tests that a correctly-made input file can be run sucessfully.
                </p>

                <h3 className="testHeader">Test 7:</h3>
                <p className="testDesc">
                    Tests that an input file with a non-invertible design matrix produces an error when run.
                </p>

                {/* <h3 className="testHeader">Test 9:</h3>
                <p className="testDesc">
                    Tests that an input file with a number of balance observations that does not match the design produces an error when run.
                </p>

                <h3 className="testHeader">Test 10:</h3>
                <p className="testDesc">
                    Tests that an input file with a number of environmental observations that does not match the design produces an error when run.
                </p>

                <h3 className="testHeader">Test 11:</h3>
                <p className="testDesc">
                    Tests that a multi-series input file with a series that lacks a restraint passed to it produces an error when run.
                </p> */}

                <h3 className="testHeader">Test 8:</h3>
                <p className="testDesc">
                    Tests that an input file using gravity corrections with a weight height of 0 cm produces an error when run.
                </p>

                <h2>Input File Error Identification</h2>

                <h3 className="testHeader">Test 9 - Test 10:</h3>
                <p className="testDesc">
                    Tests that direct readings vs manual readings are sucessfully determined. This is used to set required lines in the input file.
                </p>

                <h3 className="testHeader">Test 11:</h3>
                <p className="testDesc">
                    Tests that a correctly-input report number (exists, no spaces) is identified as correct.
                </p>

                <h3 className="testHeader">Test 12:</h3>
                <p className="testDesc">
                    Tests that a correctly-structured input file (@SERIES before each series) is identified as correct.
                </p>

                <h3 className="testHeader">Test 13:</h3>
                <p className="testDesc">
                    Tests that an input file with recognized entry tags is identified as correct.
                </p>

                <h3 className="testHeader">Test 14:</h3>
                <p className="testDesc">
                    Tests that an input file with all required entry tags is identified as correct.
                </p>

                <h3 className="testHeader">Test 15:</h3>
                <p className="testDesc">
                    Tests that an input file without repeated entry tags is identified as correct.
                </p>

                <h3 className="testHeader">Test 16:</h3>
                <p className="testDesc">
                    Tests that a correctly-made input file passes the input checks (checking all individual entries for correct type and formatting).
                </p>

                <h3 className="testHeader">Test 17:</h3>
                <p className="testDesc">
                    Tests that a correctly-made input file passes the required checks (checking structure consistency,  
                    restraints passed down, number of balance observations and environmentals match the design).
                </p>

                <h3 className="testHeader">Test 18:</h3>
                <p className="testDesc">
                    Tests that a correctly-made input file passes the secondary checks (checking environmentals are in SOP 28 limits).
                </p>

                <h3 className="testHeader">Test 19:</h3>
                <p className="testDesc">
                    Tests that an incorrectly-input report number (DNE, or contains spaces) is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 20:</h3>
                <p className="testDesc">
                    Tests that a incorrectly-structured input file is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 21:</h3>
                <p className="testDesc">
                    Tests that an input file with an unrecognized entry tag is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 22:</h3>
                <p className="testDesc">
                    Tests that an input file with a missing entry tag is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 23:</h3>
                <p className="testDesc">
                    Tests that an input file with a repeated entry tag is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 24:</h3>
                <p className="testDesc">
                    Tests that an input file with entry tags but missing input is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 25:</h3>
                <p className="testDesc">
                    Tests that an input file with non-numerical input is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 26:</h3>
                <p className="testDesc">
                    Tests that an input file with the check standard and restraint in the same position is identified as incorrect.
                </p>

                <h2>Output File Generation</h2>

                <h3 className="testHeader">Test 27:</h3>
                <p className="testDesc">
                    Tests that an output file can be sucessfully written out.
                </p>

                <h3 className="testHeader">Test 28 - Test 32:</h3>
                <p className="testDesc">
                    Tests that metadata is correctly written to the output file (RESTRAINT ID, CHECK STANDARD ID, BALANCE ID, TECHNICIAN ID, DESIGN ID).
                </p>

                <h3 className="testHeader">Test 33 - Test 38:</h3>
                <p className="testDesc">
                    Tests that calculated masses are correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 39 - Test 44:</h3>
                <p className="testDesc">
                    Tests that weight densities are correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 45:</h3>
                <p className="testDesc">
                    Tests that the calculated within-process standard deviation is correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 46:</h3>
                <p className="testDesc">
                    Tests that the accepted within-process standard deviation is correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 47:</h3>
                <p className="testDesc">
                    Tests that the accepted long-term standard deviation is correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 48:</h3>
                <p className="testDesc">
                    Tests that the calculated F-critical value is correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 49:</h3>
                <p className="testDesc">
                    Tests that the calculated F-value is correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 50:</h3>
                <p className="testDesc">
                    Tests that the calculated check standard correction is correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 51:</h3>
                <p className="testDesc">
                    Tests that the accepted check standard correction is correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 52:</h3>
                <p className="testDesc">
                    Tests that the calculated T-critical value is correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 53:</h3>
                <p className="testDesc">
                    Tests that the calculated T-value is correctly written to the output file.
                </p>

                <h2>Data Storage Checks</h2>

                <h3 className="testHeader">Test 54:</h3>
                <p className="testDesc">
                    Tests that a sensitivity weight can be saved to the database.
                </p>

                <h3 className="testHeader">Test 55:</h3>
                <p className="testDesc">
                    Tests that all sensitivity weights can be retrieved from the database.
                </p>

                <h3 className="testHeader">Test 56 - Test 59:</h3>
                <p className="testDesc">
                    Tests that sensitivity weight data retrieved from the database matches the data that was put in for a given entry 
                    (name, mass, density, cce).
                </p>

                <h3 className="testHeader">Test 60:</h3>
                <p className="testDesc">
                    Tests that a sensitivity weight can be deleted from the database.
                </p>

                <h3 className="testHeader">Test 61:</h3>
                <p className="testDesc">
                    Tests that standard deviations can be saved to the database.
                </p>

                <h3 className="testHeader">Test 62:</h3>
                <p className="testDesc">
                    Tests that all standard deviations can be retrieved from the database.
                </p>

                <h3 className="testHeader">Test 63 - Test 65:</h3>
                <p className="testDesc">
                    Tests that standard deviation data retrieved from the database matches the data that was put in for a given entry 
                    (nominal, sigma-w, sigma-t).
                </p>

                <h3 className="testHeader">Test 66:</h3>
                <p className="testDesc">
                    Tests that a standard deviation can be deleted from the database.
                </p>

                <h2>Data Reduction</h2>

                <h3 className="testHeader">Test 67 - 78:</h3>
                <p className="testDesc">
                    Tests that MARS air density calculations agree with NIST Mass Code air density calculations for different temperatures, pressures and humidities 
                    with a tolerance of 1e-7 g/cm<sup>3</sup>.
                </p>

                <h3 className="testHeader">Test 79 - Test 82:</h3>
                <p className="testDesc">
                    Tests that MARS mass calculations agree with NIST Mass Code mass calculations in an automated 4-1 calibration at 1 kg with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 83 - Test 84:</h3>
                <p className="testDesc">
                    Tests that MARS F and T values agree with NIST Mass Code mass calculated values in an automated 4-1 calibration at 1 kg with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 85 - Test 89:</h3>
                <p className="testDesc">
                    Tests that MARS mass calculations agree with NIST Mass Code mass calculations in a manual 5-1 calibration at 1 kg with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 90 - Test 91:</h3>
                <p className="testDesc">
                    Tests that MARS F and T values agree with NIST Mass Code mass calculated values in a manual 5-1 calibration at 1 kg with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 92 - Test 97:</h3>
                <p className="testDesc">
                    Tests that MARS mass calculations agree with NIST Mass Code mass calculations in a manual 532111 calibration at 500 g with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 98 - Test 99:</h3>
                <p className="testDesc">
                    Tests that MARS F and T values agree with NIST Mass Code mass calculated values in a manual 532111 calibration at 500 g with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 100 - Test 105:</h3>
                <p className="testDesc">
                    Tests that MARS mass calculations agree with NIST Mass Code mass calculations in a manual 522111 calibration at 50 g with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 106 - Test 107:</h3>
                <p className="testDesc">
                    Tests that MARS F and T values agree with NIST Mass Code mass calculated values in a manual 522111 calibration at 50 g with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 108 - Test 113:</h3>
                <p className="testDesc">
                    Tests that MARS mass calculations agree with NIST Mass Code mass calculations in a manual 522111 calibration at 5 g with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 114 - Test 115:</h3>
                <p className="testDesc">
                    Tests that MARS F and T values agree with NIST Mass Code mass calculated values in a manual 522111 calibration at 5 g with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 116 - Test 121:</h3>
                <p className="testDesc">
                    Tests that MARS mass calculations agree with NIST Mass Code mass calculations in a manual 532111 calibration at 500 mg with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 122 - Test 123:</h3>
                <p className="testDesc">
                    Tests that MARS F and T values agree with NIST Mass Code mass calculated values in a manual 532111 calibration at 500 mg with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 123 - Test 129:</h3>
                <p className="testDesc">
                    Tests that MARS mass calculations agree with NIST Mass Code mass calculations in a manual 532111 calibration at 50 mg with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 130 - Test 131:</h3>
                <p className="testDesc">
                    Tests that MARS F and T values agree with NIST Mass Code mass calculated values in a manual 532111 calibration at 50 mg with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 132 - Test 137:</h3>
                <p className="testDesc">
                    Tests that MARS mass calculations agree with NIST Mass Code mass calculations in a manual 532111 calibration at 5 mg with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 138 - Test 139:</h3>
                <p className="testDesc">
                    Tests that MARS F and T values agree with NIST Mass Code mass calculated values in a manual 532111 calibration at 5 mg with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 140 - Test 142:</h3>
                <p className="testDesc">
                    Tests that MARS mass calculations agree with NIST Mass Code mass calculations in a manual 3-1 calibration at 3000 lb with constant air density. 
                    The agreement tolerance is 1e-4 g.
                </p>

                <h3 className="testHeader">Test 143 - Test 144:</h3>
                <p className="testDesc">
                    Tests that MARS F and T values agree with NIST Mass Code mass calculated values in a manual 3-1 calibration at 3000 lb with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 145 - Test 148:</h3>
                <p className="testDesc">
                    Tests that MARS mass calculations agree with NIST Mass Code mass calculations in a manual 4-1 calibration at 1 lb with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 149 - Test 150:</h3>
                <p className="testDesc">
                    Tests that MARS F and T values agree with NIST Mass Code mass calculated values in a manual 4-1 calibration at 1 lb with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 151 - Test 156:</h3>
                <p className="testDesc">
                    Tests that MARS mass calculations agree with NIST Mass Code mass calculations in a manual 532111 calibration at 0.5 lb with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 157 - Test 158:</h3>
                <p className="testDesc">
                    Tests that MARS F and T values agree with NIST Mass Code mass calculated values in a manual 532111 calibration at 0.5 lb with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 159 - Test 164:</h3>
                <p className="testDesc">
                    Tests that MARS mass calculations agree with NIST Mass Code mass calculations in a manual 532111 calibration at 0.05 lb with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 165 - Test 166:</h3>
                <p className="testDesc">
                    Tests that MARS F and T values agree with NIST Mass Code mass calculated values in a manual 532111 calibration at 0.05 lb with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 167 - Test 172:</h3>
                <p className="testDesc">
                    Tests that MARS mass calculations agree with NIST Mass Code mass calculations in a manual 532111 calibration at 0.005 lb with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 173 - Test 174:</h3>
                <p className="testDesc">
                    Tests that MARS F and T values agree with NIST Mass Code mass calculated values in a manual 532111 calibration at 0.005 lb with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 175 - Test 178:</h3>
                <p className="testDesc">
                    Tests that MARS mass calculations agree with NIST Mass Code mass calculations in an automated 4-1 at 1 kg with constant air density and with a balance sensitivity factor not equal to 1. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 179 - Test 180:</h3>
                <p className="testDesc">
                    Tests that MARS F and T values agree with NIST Mass Code mass calculated values in an automated 4-1 at 1 kg with constant air density and with a balance sensitivity factor not equal to 1. 
                    The agreement tolerance is 0.02.
                </p>
            </div>
        </div>
    )
}

export default ValidationDetails;
