import React from 'react';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import Header from '../../header/header';
import SideBar from '../../side-bar/side-bar';
import { layoutStyles } from './layout.styles';

const LayoutView = (props) => {
  const classes = layoutStyles();
  const { children, open, handleOpen, handleClose } = props;

  return (
    <>
      <div className={classes.root}>
        <Header
          open = { open }
          handleOpen = { handleOpen }
        />
        <SideBar
          open = { open }
          handleClose = { handleClose }
        />
        <Grid container>
          <Grid item xs={12}>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.body}>
                {children}
              </div>
            </main>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default LayoutView;
