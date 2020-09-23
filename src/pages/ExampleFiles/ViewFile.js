import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from '../../components/Header';
import fileTexts from '../../exampleFiles/ExampleFileTexts'

import './ExampleFiles.css'

function ViewFile() {
    const fileName = window.location.href.split('/').pop()
    return (
        <div>
            <Header />
            <div className='exampleFiles'>
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
