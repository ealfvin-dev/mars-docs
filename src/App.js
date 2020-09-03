import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    <Router>
      <div className={`App ${classes.root}`}>
        <SideNav />
        <div className={classes.content}>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/documentation" component={Documentation} />
          <Route exact path="/validationdetails" component={ValidationDetails} />
          <Route exact path="/examplefiles" component={ExampleFiles} />
        </div>
      </div>
    </Router>
  );
}

export default App;
