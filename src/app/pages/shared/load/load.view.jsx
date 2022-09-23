import React from 'react';
import loadStyles from './load.styles';
import { CssBaseline, Grid } from '@material-ui/core';
import logo from '../../../../assets/images/Logo.png';

const LoadView = (props) => {

  const classes = loadStyles();

  return (
    <Grid  className={classes.content} item xs={12} sm={12}>
      <CssBaseline/>
      <img alt="" className={classes.logo} src={logo}/>
    </Grid>
  );
}

export default LoadView;
