import React from 'react';
import Layout from '../../../components/shared/theme/layout';
import Slider from '../../../components/shared/slider/slider';
import { homeStyles } from './home.styles';
import { Typography, Grid } from '@material-ui/core';
import {
  faHeart,
  faDollarSign,
  faSmile,
  faDatabase,
  faFile,
  faUserFriends
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const classes = homeStyles();
  return (
    <Layout>
      <div className={classes.body}>
        <div className={classes.slider}>
          <Slider></Slider>
        </div>
        <div className={classes.card}>
          <Typography className={classes.title}>Con MediCall podrás:</Typography>
          <Grid className={classes.infoContainer} container>
            <Grid className={classes.info} item lg={3}>
              <FontAwesomeIcon icon={faHeart} className={classes.icon} />
              <Typography className={classes.subTitle}>Reducir las inasistencias</Typography>
              <p className={classes.paragraph}>MediCall automatiza en un 90% el proceso de confirmación y cancelación de citas por parte del paciente. Esto permite minimizar las inasistencias y mejorar la comunicación paciente-consultorio.</p>
            </Grid>
            <Grid className={classes.info} item lg={3}>
              <FontAwesomeIcon icon={faDollarSign} className={classes.icon} />
              <Typography className={classes.subTitle}>Mejorar tus ingresos</Typography>
              <p className={classes.paragraph}>Al reducir las inasistencias y mejorar el porcentaje de respuesta del paciente, los especialistas elevarán sus ingresos y optimizarán el tiempo de atención con el fin de atender pacientes en lista de espera.</p>
            </Grid>
            <Grid className={classes.info} item lg={3}>
              <FontAwesomeIcon icon={faSmile} className={classes.icon} />
              <Typography className={classes.subTitle}>Mejorar la atención a tus pacientes</Typography>
              <p className={classes.paragraph}>Medicall mantiene al paciente informado de sus citas vía email (sms y Whatsapp próximamente), así como de cualquier cambio que se presente en el proceso de atención.</p>
            </Grid>
          </Grid>
          <Grid className={classes.infoContainer} container>
            <Grid className={classes.info} item lg={3}>
              <FontAwesomeIcon icon={faDatabase} className={classes.icon} />
              <Typography className={classes.subTitle}>MediCall es BIG-DATA</Typography>
              <p className={classes.paragraph}>Con MediCall podrás obtener la base de datos de tus pacientes y el histórico de citas de tu consultorio en el momento en que lo desees. Esta data te será muy útil a la hora de hacer informes y tomar decisiones estratégicas para tu consultorio.</p>
            </Grid>
            <Grid className={classes.info} item lg={3}>
              <FontAwesomeIcon icon={faFile} className={classes.icon} />
              <Typography className={classes.subTitle}>MediCall son informes</Typography>
              <p className={classes.paragraph}>Diariamente podrás observar el listado de pacientes con quienes tienes cita con información importante para tu gestión y seguimiento proveída a través de la historia clínica.</p>
            </Grid>
            <Grid className={classes.info} item lg={3}>
              <FontAwesomeIcon icon={faUserFriends} className={classes.icon} />
              <Typography className={classes.subTitle}>MediCall es multiconsulta</Typography>
              <p className={classes.paragraph}>Con MediCall podrás recibir asistencia para realizar consultas presenciales o en línea.</p>
            </Grid>
          </Grid>
        </div>
        <div className={classes.footer}>
          <Typography className={classes.footerText}>© {new Date().getFullYear()} MediCall by The Leyends. Todos los derechos reservados.</Typography>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
