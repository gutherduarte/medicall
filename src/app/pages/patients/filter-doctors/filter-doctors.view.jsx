import Layout from '../../../components/shared/theme/layout';
import React from 'react';
import { filterDoctorsStyles } from './filter-doctors.styles';
import Search from './../../../components/search/search';
import doctorenmedicina from './../../../../assets/images/doctorenmedicina.png';
import bestRating from './../../../../assets/images/bestRating.png';
import establishment from './../../../../assets/images/establishment.png';
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
} from '@material-ui/core';


const FilterDoctorsView =  (props) => {
  const classes = filterDoctorsStyles();
  const {goEspeciality,goEstablecimiento,goDoctors } = props;

  return (
     <Layout>
       <div className={classes.titleContainer}>
         <Typography className={classes.title}>Filtros de búsqueda</Typography>
         <Search/>
       </div>
      <div className={classes.container}>
        <div className={classes.cardContainer}>
          <Grid container spacing={3} className={classes.centerCard}>
            <Grid item xs={4}>
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
            <Grid item xs={4}>
              <Card onClick={goEstablecimiento} className={classes.establishmentCard}>
                <Typography className = {classes.titles}>Establecimientos</Typography>
                <CardActionArea  className={classes.cardAction} >
                  <CardMedia
                    className={classes.image}
                    image={establishment}
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card onClick={goDoctors} className={classes.establishmentCard}>
                <Typography className = {classes.titles}>Mejor Calificación</Typography>
                <CardActionArea className={classes.cardAction} >
                  <CardMedia
                    className={classes.image}
                    image={bestRating}
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
