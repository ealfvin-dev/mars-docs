import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import SideNav from './components/SideNav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import CreatingInputFiles from './pages/Documentation/CreatingInputFiles';
import SavingDataInDatabase from './pages/Documentation/SavingDataInDatabase';
import DataVisualization from './pages/Documentation/DataVisualization';
import Debugging from './pages/Documentation/Debugging';
import Tags from './pages/Documentation/Tags';
import ValidationDetails from './pages/ValidationDetails/ValidationDetails';
import ExampleFiles from './pages/ExampleFiles/ExampleFiles';
import ViewFile from './pages/ExampleFiles/ViewFile';
import Features from './pages/Features/Features';

const useStyles = makeStyles(() => ({
  root: {
      display: 'flex',
  },
  content: {
    flexGrow: 1,
    //padding: '24px',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <HashRouter basename="/">
      <div className={`App ${classes.root}`}>
        <SideNav />
        <div className={classes.content}>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/home"} component={Home} />
          <Route exact path={"/features"} component={Features} />
          <Route exact path={"/about"} component={About} />
          <Route exact path={"/creatinginputfiles"} component={CreatingInputFiles} />
          <Route exact path={"/savingdataindatabase"} component={SavingDataInDatabase} />
          <Route exact path={"/datavisualization"} component={DataVisualization} />
          <Route exact path={"/debugging"} component={Debugging} />
          <Route exact path={"/tags"} component={Tags} />
          <Route exact path={"/validationdetails"} component={ValidationDetails} />
          <Route exact path={"/examplefiles"} component={ExampleFiles} />
          <Route path={"/examplefile"} component={ViewFile} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
