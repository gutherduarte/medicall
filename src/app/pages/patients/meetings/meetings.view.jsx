import React from 'react';
import List from './list/list';
import { meetingsStyles } from './meetings.styles';

const MeetingsView = (props) => {
  const classes = meetingsStyles();
  return(
    <div className={classes.root}>
      <List/>
    </div>
  );
}

export default MeetingsView;
