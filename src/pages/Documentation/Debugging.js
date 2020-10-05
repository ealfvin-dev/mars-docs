import React from 'react';
import Header from '../../components/Header/Header';

import '../pages.css';

function Debugging() {
    return (
        <div>
            <Header />
            <div className='pageLayout'>
                <div className='textBlock'>
                    <h3>Debugging Input Files</h3>
                    <p>
                        MARS has a built-in debugger that checks for inconsistencies and mistakes in input data files.
                        The checks are run each time the Run button is clicked to run an input file. You can also run
                        the debugger without running your input file by clicking "Debug".
                    </p>
                    <img src={require('./Images/debug.jpg')} width='496px' alt="Mars debug button" />
                    <p>
                        If an error is found, a message will be displayed below the input file and the error will be
                        highlighted in red (if applicable).
                    </p>
                    <img src={require('./Images/ErrorText.jpg')} width='671px' alt="Mars debug button" />
                    <h3>Split Input Files</h3>
                    <p>
                        When an input file is opened in the graphical interface, it gets broken into individual series
                        anywhere the @SERIES annotation exists. If for any
                        reason you end up with data for more than one series in a tab when building your file, you can
                        re-split the file into individual series tabs using the Split button. Just like before, the file
                        will be broken up anywhere the @SERIES annotation exists. This function can also be useful
                        if you want to insert a series between two other series in an input file.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Debugging;
