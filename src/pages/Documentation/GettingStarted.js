import React from 'react';
import Header from '../../components/Header/Header';

import '../pages.css';

function GettingStarted() {
    return (
        <div>
            <Header />
            <div className='pageLayout'>
                <div className='textBlock'>
                    <h3>Getting Started</h3>
                    <p>
                        1. Install <br />
                        2. Move shortcut <br />
                        3. Edit default file path <br />
                        4. Test input file
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GettingStarted;
