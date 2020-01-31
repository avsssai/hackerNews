import React, { Component } from 'react';
import classes from './App.module.css';
import Layout from './Components/Layout/Layout';
import Toolbar from './Controllers/Toolbar/Toolbar';

class App extends Component{

  render(){
    return(
      <div className={classes.App}>
        <Toolbar />
        <Layout />
      </div>
    )
  }
}

export default App;
