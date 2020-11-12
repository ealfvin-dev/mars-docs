import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';

import '../pages.css';
import './Documentation.css'

function Documentation() {
    return (
        <div>
            <Header />
            <div className='pageLayout'>
                <div className='textBlock'>
                    <Link
                        className='docsSectionLink'
                        to={"/documentation/creatinginputfiles"}
                    >
                        Creating Input Files
                    </Link>
                    <p>Step-by-step guide to building and running input files</p>
                    <br />

                    <Link
                        className='docsSectionLink'
                        to={"/documentation/savingdataindatabase"}
                    >
                        Saving Data in Database
                    </Link>
                    <p>Saving sensitivity weight and standard deviation information in a local database to use again in future calibrations</p>
                    <br />

                    <Link
                        className='docsSectionLink'
                        to={"/documentation/datavisualization"}
                    >
                        Data Visualization
                    </Link>
                    <p>Using the data visualization dashboard to assess calibration results</p>
                    <br />

                    <Link
                        className='docsSectionLink'
                        to={"/documentation/debugging"}
                    >
                        Debugging
                    </Link>
                    <p>Using the built-in debugging/error checking features to locate errors in input files</p>
                    <br />

                    <Link
                        className='docsSectionLink'
                        to={"/documentation/tags"}
                    >
                        Tags
                    </Link>
                    <p>A full list of input file line tags</p>
                </div>
            </div>
        </div>
    )
}

export default Documentation;
