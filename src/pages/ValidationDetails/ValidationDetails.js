import React from 'react';
import Header from '../../components/Header';

import '../pages.css';
import './ValidationDetails.css';

function ValidationDetails() {
    return (
        <div>
            <Header />
            <div className='pageLayout'>
                <div className='textBlock'>
                    <p>
                    This page provides details on validation for MARS. All of the validation tests detailed 
                    below have been checked manually and are also automatically re-run every time MARS is opened. This ensures that in the unlikely event of a file becoming 
                    corrupted or computer malfunction, an error will be displayed when the program is opened. These tests can also be run by clicking "Run Tests" 
                    in the menu. <br /> <br />
                    Solutions to the designs are calculated with the matrix least squares solution in NBS Technical Note 952. <br />
                    Air densities are calculated using the CIPM 2007 air density equation (Picard et al.).
                    </p>
                </div>

                <h2>System Checks</h2>

                <h3 className="testHeader">Test 1 - Test 6:</h3>
                <p className="testDesc textBlock">
                    Tests that the nessesary software is installed to run the program and that the correct versions of dependencies are installed.
                </p>

                <h2>Runtime Error Handling</h2>
                
                <h3 className="testHeader">Test 6:</h3>
                <p className="testDesc textBlock">
                    Tests that a correctly-made input file can be run sucessfully.
                </p>

                <h3 className="testHeader">Test 7:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with a non-invertible design matrix produces an error when run.
                </p>

                <h3 className="testHeader">Test 8:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file using gravity corrections with a weight height of 0 cm produces an error when run.
                </p>

                <h2>Input File Error Identification</h2>

                {/* Multiple-series Input */}
                <h3 className="testHeader">Test 9 - Test 10:</h3>
                <p className="testDesc textBlock">
                    Tests that direct readings vs manual readings are sucessfully determined.
                </p>

                <h3 className="testHeader">Test 11:</h3>
                <p className="testDesc textBlock">
                    Tests that a correctly-input report number (exists, no spaces) is identified as correct.
                </p>

                <h3 className="testHeader">Test 12:</h3>
                <p className="testDesc textBlock">
                    Tests that a correctly-structured input file (@SERIES before each series) is identified as correct.
                </p>

                <h3 className="testHeader">Test 13:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with recognized entry tags is identified as correct.
                </p>

                <h3 className="testHeader">Test 14:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with all required entry tags is identified as correct.
                </p>

                <h3 className="testHeader">Test 15:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file without repeated entry tags is identified as correct.
                </p>

                <h3 className="testHeader">Test 16:</h3>
                <p className="testDesc textBlock">
                    Tests that a correctly-made input file passes checks for correct typing and formatting.
                </p>

                <h3 className="testHeader">Test 17:</h3>
                <p className="testDesc textBlock">
                    Tests that a correctly-made input file passes the checks for the required number of balance and 
                    environmental observations.
                </p>

                <h3 className="testHeader">Test 18:</h3>
                <p className="testDesc textBlock">
                    Tests that a correctly-made input file passes the checks for restraint, check standard and pass-down vector lengths.
                </p>

                <h3 className="testHeader">Test 19:</h3>
                <p className="testDesc textBlock">
                    Tests that a correctly-made input file passes design consistency checks.
                </p>

                <h3 className="testHeader">Test 20:</h3>
                <p className="testDesc textBlock">
                    Tests that a correctly-made input file passes checks on restraints passed between series.
                </p>

                <h3 className="testHeader">Test 21:</h3>
                <p className="testDesc textBlock">
                    Tests that a correctly-made input file passes the secondary checks (checking environmentals are in SOP 28 limits).
                </p>

                {/* Single-series Input */}
                <h3 className="testHeader">Test 22:</h3>
                <p className="testDesc textBlock">
                    Tests that direct readings vs manual readings are sucessfully determined for a single-series input.
                </p>

                <h3 className="testHeader">Test 23:</h3>
                <p className="testDesc textBlock">
                    Tests that a correctly-input report number (exists, no spaces) is identified as correct for a single-series input.
                </p>

                <h3 className="testHeader">Test 24:</h3>
                <p className="testDesc textBlock">
                    Tests that a correctly-structured input file (@SERIES before each series) is identified as correct for a single-series input.
                </p>

                <h3 className="testHeader">Test 25:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with recognized entry tags is identified as correct for a single-series input.
                </p>

                <h3 className="testHeader">Test 26:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with all required entry tags is identified as correct for a single-series input.
                </p>

                <h3 className="testHeader">Test 27:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file without repeated entry tags is identified as correct for a single-series input.
                </p>

                <h3 className="testHeader">Test 28:</h3>
                <p className="testDesc textBlock">
                    Tests that a correctly-made input file passes checks for correct typing and formatting for a single-series input.
                </p>

                <h3 className="testHeader">Test 29:</h3>
                <p className="testDesc textBlock">
                    Tests that a correctly-made input file passes the checks for the required number of balance and 
                    environmental observations for a single-series input.
                </p>

                <h3 className="testHeader">Test 30:</h3>
                <p className="testDesc textBlock">
                    Tests that a correctly-made input file passes the checks for restraint, check standard and pass-down vector lengths for a single-series input.
                </p>

                <h3 className="testHeader">Test 31:</h3>
                <p className="testDesc textBlock">
                    Tests that a correctly-made input file passes design consistency checks for a single-series input.
                </p>

                <h3 className="testHeader">Test 32:</h3>
                <p className="testDesc textBlock">
                    Tests that a correctly-made input file passes checks on restraints passed between series for a single-series input.
                </p>

                <h3 className="testHeader">Test 33:</h3>
                <p className="testDesc textBlock">
                    Tests that a correctly-made input file passes the secondary checks (checking environmentals are in SOP 28 limits) for a single-series input.
                </p>

                {/* Bad Input Failure Tests */}
                <h3 className="testHeader">Test 34:</h3>
                <p className="testDesc textBlock">
                    Tests that an incorrectly-input report number (DNE, or contains spaces) is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 35:</h3>
                <p className="testDesc textBlock">
                    Tests that a incorrectly-structured input file is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 36:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with an unrecognized entry tag is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 37:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with a missing entry tag is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 38:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with a repeated entry tag is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 39:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with entry tags but missing input is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 40:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with non-numerical input is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 41:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with the check standard and restraint in the same position is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 42:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with a passed down restraint that does not match the nominal of the next restraint is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 43:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with an incorrectly-structured position is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 44:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with a design vector length that does not match the number of positions is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 45:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with a restraint vector length that does not match the number of positions is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 46:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with a check standard vector length that does not match the number of positions is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 47:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with a pass-down vector length that does not match the number of positions is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 48:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file where the number of balance observations does not match the number of lines in the design is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 49:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file where the number of environmental observations does not match the number of lines in the design is identified as incorrect.
                </p>

                <h3 className="testHeader">Test 50:</h3>
                <p className="testDesc textBlock">
                    Tests that an input file with a design that is incompatible with the weight nominals is identified as incorrect.
                </p>

                <h2>Output File Generation</h2>

                <h3 className="testHeader">Test 51:</h3>
                <p className="testDesc textBlock">
                    Tests that an output file can be sucessfully written out.
                </p>

                <h3 className="testHeader">Test 52 - Test 56:</h3>
                <p className="testDesc textBlock">
                    Tests that metadata is correctly written to the output file (RESTRAINT ID, CHECK STANDARD ID, BALANCE ID, TECHNICIAN ID, DESIGN ID).
                </p>

                <h3 className="testHeader">Test 57 - Test 62:</h3>
                <p className="testDesc textBlock">
                    Tests that calculated masses are correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 63 - Test 68:</h3>
                <p className="testDesc textBlock">
                    Tests that weight densities are correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 69:</h3>
                <p className="testDesc textBlock">
                    Tests that the calculated within-process standard deviation is correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 70:</h3>
                <p className="testDesc textBlock">
                    Tests that the accepted within-process standard deviation is correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 71:</h3>
                <p className="testDesc textBlock">
                    Tests that the accepted long-term standard deviation is correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 72:</h3>
                <p className="testDesc textBlock">
                    Tests that the calculated F-critical value is correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 73:</h3>
                <p className="testDesc textBlock">
                    Tests that the calculated F-value is correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 74:</h3>
                <p className="testDesc textBlock">
                    Tests that the calculated check standard correction is correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 75:</h3>
                <p className="testDesc textBlock">
                    Tests that the accepted check standard correction is correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 76:</h3>
                <p className="testDesc textBlock">
                    Tests that the calculated T-critical value is correctly written to the output file.
                </p>

                <h3 className="testHeader">Test 77:</h3>
                <p className="testDesc textBlock">
                    Tests that the calculated T-value is correctly written to the output file.
                </p>

                <h2>Data Storage Checks</h2>

                <h3 className="testHeader">Test 78:</h3>
                <p className="testDesc textBlock">
                    Tests that a sensitivity weight can be saved to the database.
                </p>

                <h3 className="testHeader">Test 79:</h3>
                <p className="testDesc textBlock">
                    Tests that all sensitivity weights can be retrieved from the database.
                </p>

                <h3 className="testHeader">Test 80 - Test 83:</h3>
                <p className="testDesc textBlock">
                    Tests that sensitivity weight data retrieved from the database matches the data that was put in for a given entry 
                    (name, mass, density, cce).
                </p>

                <h3 className="testHeader">Test 84:</h3>
                <p className="testDesc textBlock">
                    Tests that a sensitivity weight can be deleted from the database.
                </p>

                <h3 className="testHeader">Test 85:</h3>
                <p className="testDesc textBlock">
                    Tests that standard deviations can be saved to the database.
                </p>

                <h3 className="testHeader">Test 86:</h3>
                <p className="testDesc textBlock">
                    Tests that all standard deviations can be retrieved from the database.
                </p>

                <h3 className="testHeader">Test 87 - Test 89:</h3>
                <p className="testDesc textBlock">
                    Tests that standard deviation data retrieved from the database matches the data that was put in for a given entry 
                    (nominal, sigma-w, sigma-t).
                </p>

                <h3 className="testHeader">Test 90:</h3>
                <p className="testDesc textBlock">
                    Tests that a standard deviation can be deleted from the database.
                </p>

                <h2>Data Reduction</h2>

                <h3 className="testHeader">Test 91 - 102:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS air density calculations agree with NIST Mass Code air density calculations for different temperatures, pressures and humidities 
                    with a tolerance of 1e-7 g/cm<sup>3</sup>.
                </p>

                <h3 className="testHeader">Test 103 - Test 106:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS mass calculations agree with NIST Mass Code calculations in an automated 4-1 calibration at 1 kg with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 107 - Test 108:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS F and T values agree with NIST Mass Code values in an automated 4-1 calibration at 1 kg with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 109 - Test 113:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 5-1 calibration at 1 kg with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 114 - Test 115:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS F and T values agree with NIST Mass Code values in a manual 5-1 calibration at 1 kg with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 116 - Test 121:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 532111 calibration at 500 g with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 122 - Test 123:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS F and T values agree with NIST Mass Code values in a manual 532111 calibration at 500 g with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 124 - Test 129:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 522111 calibration at 50 g with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 130 - Test 131:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS F and T values agree with NIST Mass Code values in a manual 522111 calibration at 50 g with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 132 - Test 137:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 522111 calibration at 5 g with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 138 - Test 139:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS F and T values agree with NIST Mass Code values in a manual 522111 calibration at 5 g with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 140 - Test 145:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 532111 calibration at 500 mg with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 146 - Test 147:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS F and T values agree with NIST Mass Code values in a manual 532111 calibration at 500 mg with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 148 - Test 153:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 532111 calibration at 50 mg with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 154 - Test 155:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS F and T values agree with NIST Mass Code values in a manual 532111 calibration at 50 mg with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 156 - Test 161:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 532111 calibration at 5 mg with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 162 - Test 163:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS F and T values agree with NIST Mass Code values in a manual 532111 calibration at 5 mg with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 164 - Test 166:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 3-1 calibration at 3000 lb with constant air density. 
                    The agreement tolerance is 1e-4 g.
                </p>

                <h3 className="testHeader">Test 167 - Test 168:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS F and T values agree with NIST Mass Code values in a manual 3-1 calibration at 3000 lb with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 169 - Test 172:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 4-1 calibration at 1 lb with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 173 - Test 174:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS F and T values agree with NIST Mass Code values in a manual 4-1 calibration at 1 lb with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 175 - Test 180:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 532111 calibration at 0.5 lb with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 181 - Test 182:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS F and T values agree with NIST Mass Code values in a manual 532111 calibration at 0.5 lb with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 183 - Test 188:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 532111 calibration at 0.05 lb with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 189 - Test 190:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS F and T values agree with NIST Mass Code values in a manual 532111 calibration at 0.05 lb with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 191 - Test 196:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual 532111 calibration at 0.005 lb with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 197 - Test 198:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS F and T values agree with NIST Mass Code values in a manual 532111 calibration at 0.005 lb with constant air density. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 199 - Test 202:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS mass calculations agree with NIST Mass Code calculations in an automated 4-1 calibration at 1 kg with constant air density and with a balance sensitivity factor not equal to 1. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 203 - Test 204:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS F and T values agree with NIST Mass Code values in an automated 4-1 calibration at 1 kg with constant air density and with a balance sensitivity factor not equal to 1. 
                    The agreement tolerance is 0.02.
                </p>

                <h3 className="testHeader">Test 205 - Test 209:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS mass calculations agree with NIST Mass Code calculations in a manual ascending 52211 calibration at 1 kg with constant air density. 
                    The agreement tolerance is 1e-7 g.
                </p>

                <h3 className="testHeader">Test 210 - Test 211:</h3>
                <p className="testDesc textBlock">
                    Tests that MARS F and T values agree with NIST Mass Code values in a manual ascending 52211 calibration at 1 kg with constant air density. 
                    The agreement tolerance is 0.02.
                </p>
            </div>
        </div>
    )
}

export default ValidationDetails;
