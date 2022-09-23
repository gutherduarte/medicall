import Layout from '../../../components/shared/theme/layout';
import { doctorsStyles } from './doctors.styles';
import React from 'react';

import {
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  Button,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';

import Rating from '@material-ui/lab/Rating';
import ProfileDialog from './profile/profile';

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
  const {data, open, handleClose, handleOpen, doctor, value}=props;
 
  const classes = doctorsStyles();
  return (
    <Layout>
      <div>
        <div className={classes.titleContainer}>
          <Typography className={classes.title}>Médicos</Typography>
        </div>
        
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
                          name="simple-controlled"
                          value={row.rating}
                        />
                     
                    </CardContent>
                    <Grid xs={12} className={classes.contentButton}>
                      <Button
                        size='small'
                        className={classes.txtButton}
                        onClick={() => handleOpen(row)}
                      >
                        Ver perfil
                      </Button>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
      <ProfileDialog open={open} handleOpen={handleOpen} handleClose={handleClose} doctor={doctor}/>
    </Layout>
  );
}

export default DoctorsView;
