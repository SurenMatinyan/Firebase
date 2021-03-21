import React, { useState } from 'react';
import {  Route  } from 'react-router-dom';
import Page from './component/Page/Page';
import classes from './App.module.css';




function App(){

  return(
    <div className={classes.home}>
      <Route path='/'  component={Page} />
    </div>
  )
}

export default App;
