import Layout from '../../../components/shared/theme/layout';
import React from 'react';

import { doctorsStyles } from './doctors.styles';
import {
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';


const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const DoctorsView = (props) => {
  const {data}=props;

  const classes = doctorsStyles();
  return (
    <Layout>
      <div>
        <Typography className={classes.title}>Médicos</Typography>
        <div className={classes.container}>
          <div className={classes.cardContainer}>
            <Grid container>
              {data && data.map((row) => (
                <Grid item lg={4}>
                  <Card className={classes.cardRoot} key={row.name} hover>
                    <CardContent className={classes.cardContent}>
                      <Avatar className={classes.cardMedia} src={row.image}></Avatar>
                      <Typography className={classes.spaceName}>
                        {`${row.firstName} ${ row.lastName}`}
                      </Typography>
                      <Typography className={classes.spaceText}>
                        {row.specialityName}
                      </Typography>
                      <Rating
                        Read only
                        value={row.rating}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DoctorsView;
