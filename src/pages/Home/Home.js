import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header';

import './Home.css'

function Home() {
    return (
        <div>
            <Header subHeader="Mass Reduction Software"/>
            <div className="home">
                <Grid container spacing={3}>
                    <Grid item xs={5}>
                        <h3>Catch Errors in Input Files Before They Run</h3>
                        <p>
                            
                        </p>
                    </Grid>
                    <Grid item xs={7}>
                        <img src={require('./error-handling.jpg')} width='100%' alt="Input file with caught error" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Home;
