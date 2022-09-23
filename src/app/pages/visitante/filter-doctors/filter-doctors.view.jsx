import Layout from '../../../components/shared/theme/layout';
import React from 'react';
import { filterDoctorsStyles } from './filter-doctors.styles';
import logo from './../../../../assets/images/Logo.png';

import doctorenmedicina from './../../../../assets/images/doctorenmedicina.png'
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  TableCell
} from '@material-ui/core';


const FilterDoctorsView =  (props) => {
  const classes = filterDoctorsStyles();
  const {goEspeciality,goEstablecimiento,goDoctors } = props;

  return (
     <Layout>
       <div className={classes.titleContainer}>
         <Typography className={classes.title}>Filtros</Typography>
        
       </div>
      <div className={classes.container}>
        <div className={classes.cardContainer}>
          <Grid container spacing={3} className={classes.centerCard}>
            <Grid item xs={3} className={classes.space}>
              <Card onClick={goEspeciality}  className={classes.establishmentCard}>
                <Typography className = {classes.titles}>Especialidades</Typography>
                <CardActionArea className={classes.cardAction} >
                  <CardMedia
                    className={classes.image}
                    image={doctorenmedicina}
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3} className={classes.space}>
              <Card onClick={goEstablecimiento} className={classes.establishmentCard}>
                <Typography className = {classes.titles}>Establecimientos</Typography>
                <CardActionArea  className={classes.cardAction} >
                  <CardMedia
                    className={classes.image}
                    image={logo}
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3} className={classes.space}>
              <Card onClick={goDoctors} className={classes.establishmentCard}>
                <Typography className = {classes.titles}>Rating</Typography>
                <CardActionArea className={classes.cardAction} >
                  <CardMedia
                    className={classes.image}
                    image={logo}
                  />
                </CardActionArea>
             </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
  )
}

export default FilterDoctorsView;
