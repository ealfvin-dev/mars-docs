import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

import SideNav from './components/SideNav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Documentation from './pages/Documentation/Documentation';
import ValidationDetails from './pages/ValidationDetails/ValidationDetails';
import ExampleFiles from './pages/ExampleFiles/ExampleFiles';

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));

function App() {
  const classes = useStyles();

  return (
    <HashRouter>
      <div className={`App ${classes.root}`}>
        <SideNav />
        <div className={classes.content}>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + "/home"} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + "/about"} component={About} />
          <Route exact path={process.env.PUBLIC_URL + "/documentation"} component={Documentation} />
          <Route exact path={process.env.PUBLIC_URL + "/validationdetails"} component={ValidationDetails} />
          <Route exact path={process.env.PUBLIC_URL + "/examplefiles"} component={ExampleFiles} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
