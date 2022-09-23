import React from 'react';
import Layout from './../shared/theme/layout';
import Search from './../search/search'
import {
  Grid,
  Typography,
  Avatar,
  Card,
  CardActionArea,
  CardContent,
} from '@material-ui/core';
import { specialitiesStyles } from './specialities.styles';

const SpecialitiesView =  (props) => {
  const classes = specialitiesStyles ();
  const { goDoctors, data } = props;

  return (
    <Layout>
      <div>
         <div className={classes.titleContainer}>
           <Typography className={classes.title}>Especialidades</Typography>
           <Search/>
         </div>
        
        <Grid spacing={3} container >
          {
            data && data.map(item => (
              <Grid item lg = {4}>
                <Card className={classes.specialityCard}>
                  <CardActionArea onClick={() => goDoctors(item)}>
                    <CardContent className={classes.cardContent}>
                      <Avatar className={classes.image} variant="square" src={item.image}/>
                      <Typography className={classes.name}>{item.name}</Typography>
                      <Typography className={classes.quantity}>
                        {`${item.doctorsQuantity} doctores`}
                      </Typography>
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

export default SpecialitiesView;
