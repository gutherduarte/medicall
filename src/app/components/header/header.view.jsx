import React from 'react';
import clsx from 'clsx';
import
{
  AppBar,
  Toolbar,
  CssBaseline,
  IconButton,
  Avatar,
  Grid,
}
from '@material-ui/core';
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { headerStyles } from './header.styles';
import logo from '../../../assets/images/titleLogo.png';


const HeaderView = (props) => {
  const classes = headerStyles();
  const { open, handleOpen, user } = props;

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <FontAwesomeIcon icon={faBars} className={classes.icon} />
          </IconButton>
          <Grid xs={12} className={classes.spaceBetween}>
            <div className={classes.title}>
              <Avatar className={classes.logo} src={logo} variant="square"/>
            </div>
            {
              user === undefined && <a href="# " className={classes.registerDoctor}>Registrarme como doctor</a>
            }
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default HeaderView;
