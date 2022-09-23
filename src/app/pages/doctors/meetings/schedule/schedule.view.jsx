import React from 'react';
import { scheduleStyles } from './schedule.styles';
import Layout from '../../../../components/shared/theme/layout';
import {
  Grid,
  Typography,
  Card,
  CardActionArea
} from '@material-ui/core';

const ScheduleView = ( props ) => {
  const classes = scheduleStyles();
  const { goPatients, data } = props;

  return(
    <Layout>
      <Typography className={classes.title}>Citas</Typography>
      <div className={classes.container}>
        <div className={classes.cardContainer}>
          <Grid container spacing={2} className={classes.centerCard}>
            {
              data && data.map(item => (
                <Grid key={item.id} item xs={3} className={classes.space}>
                  <Card onClick={() => goPatients(item.patients, `${item.day} ${item.month} ${item.year}`)}>
                    <CardActionArea className={classes.paper}>
                      <Typography className={classes.fontBold}>{item.day}</Typography>
                      <Typography className={classes.font}>{item.month}</Typography>
                      <Typography className={classes.font}>{item.year}</Typography>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </div>
      </div>
    </Layout>
  );
}

export default ScheduleView;
