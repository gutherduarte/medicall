import React from 'react';
import Layout from './../shared/theme/layout';
import Search from './../search/search'
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import { establishmentsStyles } from './establishments.styles';

const EstablishmentsView =  (props) => {
  const classes = establishmentsStyles ();
  const { goDoctors, data } = props;

  return (
    <Layout>
      <div>
        <div className={classes.titleContainer}>
          <Typography className = {classes.title}>Establecimientos</Typography>
          <Search/>
        </div>
        
        <Grid spacing={3} container >
          {
            data && data.map(item => (
              <Grid key={item.id} item lg={4}>
                <Card className={classes.establishmentCard}>
                  <CardActionArea onClick={() => goDoctors(item)} className={classes.cardAction} >
                    <CardMedia
                      className={classes.image}
                      image={item.image}
                    />
                    <CardContent className={classes.cardContentEstablisment}>
                      <Typography className={classes.name}>{item.name}</Typography>
                      <Typography className={classes.quantity}>{`${item.doctorsQuantity} doctores`}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </div>
    </Layout>
  );
}

export default EstablishmentsView;
