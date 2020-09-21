import React from 'react';
import Grid from '@material-ui/core/Grid';

import './Home.css'

function Home() {
    return (
        <div>
            {/* <Header subHeader="Mass Reduction Software"/> */}
             <Grid container spacing={3}>
                 <Grid item xs={12}>
                    <p><br/></p>
                 </Grid>
                 <Grid item xs={12} style={{justifyContent: 'center'}}>
                    <img src={require('../../components/logo-out.png')} height='200px' alt='Mars Logo' style={{display: 'block', margin: 'auto'}} />
                 </Grid>
                 <Grid item xs={12}>
                    <h2 className='logoTitle' style={{textAlign: 'center'}}>Mass Reduction Software</h2>
                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                    <h3 className='homepageText' style={{textAlign: 'center'}}>Allows your lab to produce more accurate precision mass results that are less prone to data-entry errors.</h3>
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;
