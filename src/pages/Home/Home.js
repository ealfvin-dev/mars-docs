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
                        <h3>Find Errors in Input Files</h3>
                    </Grid>
                    <Grid item xs={7}>
                        <h3>Image...</h3>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Home;
