import React from 'react';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from '../../components/Header/Header';

import '../pages.css';

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
    exampleLink: {
        textDecoration: 'none',
    }
});

function ExampleFiles() {
    const classes = useStyles();

    return (
        <div>
            <Header />
            <div className='pageLayout'>
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
                                <Link className={classes.exampleLink} to='/examplefile/Example-4-1-config'>
                                    <Button size="small">View</Button>
                                </Link>
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
                                <Link className={classes.exampleLink} to='/examplefile/Example-4-1-out'>
                                    <Button size="small">View</Button>
                                </Link>
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
                                    2x3-1 at 3000 lb
                                </Typography>
                                <Typography variant="body2" component="p">
                                    AVDP, <br />
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