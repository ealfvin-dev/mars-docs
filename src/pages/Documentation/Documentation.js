import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';

import '../pages.css';

function Documentation() {
    return (
        <div>
            <Header />
            <div className='pageLayout'>
                <div className='textBlock'>
                    <Link 
                        to={"/documentation/creatinginputfiles"}
                        style={{
                            textDecoration: 'none',
                            color: 'blue',
                            fontSize: '16pt'
                        }}
                        >
                        Creating Input Files
                    </Link>
                    <p>Step-by-step guide to building and running input files</p>
                    <br />

                    <Link 
                        to={"/documentation/savingdataindatabase"}
                        style={{
                            textDecoration: 'none',
                            color: 'blue',
                            fontSize: '16pt'
                        }}
                        >
                        Saving Data in Database
                    </Link>
                    <p>Saving sensitivity weight and standard deviation information in a local database to use again in future calibrations</p>
                    <br />

                    <Link 
                        to={"/documentation/datavisualization"}
                        style={{
                            textDecoration: 'none',
                            color: 'blue',
                            fontSize: '16pt'
                        }}
                        >
                        Data Visualization
                    </Link>
                    <p>Using the data visualization dashboard to assess calibration results</p>
                    <br />

                    <Link 
                        to={"/documentation/debugging"}
                        style={{
                            textDecoration: 'none',
                            color: 'blue',
                            fontSize: '16pt'
                        }}
                        >
                        Debugging
                    </Link>
                    <p>Using the built-in debugging/error checking features to locate errors in input files</p>
                    <br />

                    <Link 
                        to={"/documentation/tags"}
                        style={{
                            textDecoration: 'none',
                            color: 'blue',
                            fontSize: '16pt'
                        }}
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
