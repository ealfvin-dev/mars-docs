import React from 'react';
import Header from '../../components/Header';

import '../pages.css';

function Debugging() {
    return (
        <div>
            <Header />
            <div className='pageLayout'>
                <h3>Debugging Input Files</h3>
                <p>
                    MARS has a built-in debugger that checks for inconsistencies and mistakes in input data files. 
                </p>
            </div>
        </div>
    )
}

export default Debugging;
