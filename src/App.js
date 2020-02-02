import React, { Component } from "react";
import classes from "./App.module.css";
import Top from "./Components/Top/Top";
import Best from "./Components/Best/Best";
import New from "./Components/New/New";
import Toolbar from "./Controllers/Toolbar/Toolbar";
// import Home from "./Home/Home";
import Comments from './Controllers/Comments/Comments';

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Router>
          <Toolbar />

          <Switch>
            <Route exact path="/" component={Top}  />
            <Route exact path="/top" component={Top}  />
            <Route exact path="/best" component={Best} />
            <Route exact path="/new" component={New} />
            <Route exact path="/comments/:id" component={Comments} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
