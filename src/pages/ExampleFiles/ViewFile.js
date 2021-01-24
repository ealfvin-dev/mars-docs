import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from '../../components/Header/Header';
import example4In1Config from '../../exampleFiles/Example-4-1-config';
import example4In1Out from '../../exampleFiles/Example-4-1-out';

import '../pages.css';
import './ViewFile.css';

function ViewFile() {
    const fileTexts = {
        'Example-4-1-config': example4In1Config,
        'Example-4-1-out': example4In1Out
    };

    const fileName = window.location.href.split('/').pop();
    
    return (
        <div>
            <Header />
            <div className='pageLayout'>
                <Grid container spacing={3}>
                    <Grid item>
                        {fileTexts[fileName] ? (
                            <div>
                                {fileName + '.txt'}
                                <br/> <br/>
                                <Paper elevation={0} className={fileName.includes("config") ? 'inputPaper' : 'outputPaper'}>
                                    <div className='fileText'>
                                        {fileTexts[fileName]}
                                    </div>
                                </Paper>
                            </div>
                        ) : null}
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ViewFile;
