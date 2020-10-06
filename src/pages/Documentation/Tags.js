import React from 'react';
import Paper from '@material-ui/core/Paper';
import Header from '../../components/Header/Header';
import TagEntry from './TagEntry';

import '../pages.css';
import './Tags.css'

function Tags() {
    return (
        <div>
            <Header />
            <div className='pageLayout'>
                <div className='textBlock'>
                    <h3>Tags</h3>
                    <p>
                        When building input files in the user interface, line tags are automatically
                        inserted on each line so you will not need to remember input tags. However,
                        a full list of input line tags and examples are included here for completeness. <br/><br/>
                    </p>
                    <TagEntry
                        tag="#"
                        description='
                            Any line that starts with a "#" will be ignored when the file is run. Any comments
                            and header information are on lines that begin with "#".'
                        example={[
                            "Lab Zeppelin",
                            "1234 Black Dog Rd,",
                            "Misty Mountain CA, 54321"]}
                    />

                    <TagEntry
                        tag="<Report-Number>"
                        description="The report number of the calibration. Alphanumeric."
                        example={["123456b"]}
                    />


                    <h3>&lt;Restraint-ID&gt;</h3>
                    <p className='tagDesc'>
                        The id of the starting restraint. Alphanumeric.
                    </p>
                    <p className='tagDesc'>
                        <Paper elevation={1} className='tagExample'>
                            &lt;Restraint-ID&gt;  024
                        </Paper>
                    </p>
                    <h3>&lt;Unc-Restraint&gt;</h3>
                    <p className='tagDesc'>
                        The uncertainty of the starting restraint in mg. Numeric.
                    </p>
                    <p className='tagDesc'>
                        <Paper elevation={1} className='tagExample'>
                            &lt;Unc-Restraint&gt;  0.062
                        </Paper>
                    </p>
                    <h3>@SERIES</h3>
                    <p className='tagDesc'>
                        Delimiter that marks the beginning of data specific to each series. Comes before the &lt;Date&gt; tag.
                    </p>
                    <h3>&lt;Date&gt;</h3>
                    <p className='tagDesc'>
                        The date of the calibration. MM DD YYY.
                    </p>
                    <p className='tagDesc'>
                        <Paper elevation={1} className='tagExample'>
                            &lt;Date&gt;  07 28 2020
                        </Paper>
                    </p>
                    <h3>&lt;Technician-ID&gt;</h3>
                    <h3>&lt;Balance-ID&gt;</h3>
                    <h3>&lt;Direct-Readings&gt;</h3>
                    <h3>&lt;Direct-Reading-SF&gt;</h3>
                    <h3>&lt;Gravity-Grad&gt; (optional)</h3>
                    <h3>&lt;Gravity-Local&gt; (optional)</h3>
                    <h3>&lt;Height&gt; (optional)</h3>
                    <h3>&lt;Check-ID&gt;</h3>
                    <h3>&lt;Grams&gt;</h3>
                    <h3>&lt;Position&gt;</h3>
                    <h3>&lt;Design-ID&gt;</h3>
                    <h3>&lt;Design&gt;</h3>
                    <h3>&lt;Restraint&gt;</h3>
                    <h3>&lt;Check-Standard&gt;</h3>
                    <h3>&lt;Pass-Down&gt;</h3>
                    <h3>&lt;Sigma-t&gt;</h3>
                    <h3>&lt;Sigma-w&gt;</h3>
                    <h3>&lt;Environmentals&gt;</h3>
                    <h3>&lt;Env-Corrections&gt;</h3>
                    <h3>&lt;Balance-Reading&gt;</h3>
                </div>
            </div>
        </div>
    )
}

export default Tags;
