import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from '../../components/Header';

import './ExampleFiles.css'

const useStyles = makeStyles({
    root: {
      width: '210px',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});

function ExampleFiles() {
    const classes = useStyles();

    return (
        <div>
            <Header />
            <div className='exampleFiles'>
                <Grid container spacing={3}>
                    <Grid item>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Input File
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    4-1 at 1 kg
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Automated balance,<br/>
                                    direct readings
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Output File
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    4-1 at 1 kg
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Automated balance,<br/>
                                    direct readings
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Input File
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    1 kg - 1 mg
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Metric dissemination,<br/>
                                    manual readings
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Output File
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    1 kg - 1 mg
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Metric dissemination,<br/>
                                    manual readings
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>

                    </Grid>

                    <Grid item>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Input File
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    2x3-1 at 3000 lb
                                </Typography>
                                <Typography variant="body2" component="p">
                                    AVDP, <br />
                                    Manual readings
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Output File
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    2x3-1 at 3000 lb
                                </Typography>
                                <Typography variant="body2" component="p">
                                    AVDP, <br />
                                    Manual readings
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Input File
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    1 lb to 0.001 lb
                                </Typography>
                                <Typography variant="body2" component="p">
                                    AVDP dissemination,<br/>
                                    manual readings
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Output File
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    1 lb to 0.001 lb
                                </Typography>
                                <Typography variant="body2" component="p">
                                    AVDP dissemination,<br/>
                                    manual readings
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>

                    </Grid>

                    <Grid item>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Input File
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    3211
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Metric dissemination,<br/>
                                    automated readings
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Output File
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    3211
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Metric dissemination,<br/>
                                    automated readings
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ExampleFiles;