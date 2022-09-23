import React from 'react';
import List from './list/list';

import { consultationStyles  } from './consultation.styles';

const ConsultationView = (props) => {
  const classes = consultationStyles();

  return(
    <div className={classes.root}>
      <List />
    </div>
  )
}

export default ConsultationView;
