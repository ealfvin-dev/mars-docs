import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Divider.css'

function Divider() {
    return (
        <Grid item xs={12}>
            <div className="divider"></div>
        </Grid>
    )
}

export default Divider;
