import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Header from '../../components/Header/Header';

import '../pages.css';

function DataVisualization() {
    const largeScreen = useMediaQuery('(min-width:1595px)');
    return (
        <div>
            <Header />
            <div className='pageLayout'>
                <div className='textBlock'>
                    <h2>Data Visualization</h2>
                    <p>
                        After you build and run an input file, you can visualize the data by clicking the
                        Visualization tab in the top menu bar. This will open a dashboard with three data plots per series in the
                        calibration. If you make changes to an input file, the file must be re-run for the changes to show in the
                        visualization dashboard.
                    </p>
                    <br/>

                    <h3>Plots:</h3>
                    <h3>Residuals vs Observation #</h3>
                    <p>
                        In the upper-left, you will see a plot of the residuals for each observation in the given calibration. The residuals are
                        color-coded relative to the accepted within-process standard deviation, with green being low and red being high.
                        If there is a bar that is much higher than the accepted within-process standard deviation, it could indicate that
                        there was a problem with that line in the calibration.
                    </p>

                    <h3>Sensitivity vs Observation #</h3>
                    <p>
                        The lower-left plot shows balance sensitivities for each observation in the given calibration. These bars are not color coded.
                        A sensitivity that differs greatly from the others could indicate a problem with that line in the calibration.
                    </p>

                    <h3>Sensitivity vs Delta vs Temperature</h3>
                    <p>
                        The plot on the right shows balance sensitivity vs the absolute value of the residuals (deltas) vs temperature.
                        The plot is intended to show if there are any relationships between sensitivity, deltas and the temperature.
                        Often a balance performs best when it has been warmed up sufficiently and its internal temperature has risen to a
                        stable point. If a balance does not perform well until its internal temperature has risen enough, you would see
                        blue points (measurements taken at lower temperatures) unevenly grouped at the top of the plot (high residuals).
                        If the colors are seperated along the Sensitivity axis, it could indicate that balance sensitivity has a
                        dependency on temperature.
                    </p>

                    {largeScreen 
                    ? <img src={require('../Features/Images/dashboard-ui.jpg')} width='1275px' alt="Mars software data visualization" />
                    : <img src={require('../Features/Images/dashboard-ui-small.jpg')} width='966px' alt="Mars software data visualization" />
                    }
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default DataVisualization;
