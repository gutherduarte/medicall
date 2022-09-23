import React from 'react';
import detailStyles from './detail.styles';
import Layout from '../../../../components/shared/theme/layout';
import {
  Grid,
  Typography,
  Avatar,
  TextField,
  Button
} from "@material-ui/core";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faPhone,
  faEnvelope,
  faCalendarAlt,
  faVenusMars,
  faMapMarkedAlt,
  faIdCard,
  faMapMarkerAlt,
  faMale,
  faChurch,
  faRing
} from "@fortawesome/free-solid-svg-icons";

const DetailView = (props) => {
  const classes = detailStyles();
  const { data, handleSubmit, handleInputChange, motivo, motivoError, isReplying } = props;

  return(
    <Layout>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Consultas en línea</Typography>
        <Typography className={classes.subtitle}>| Detalle</Typography>
      </div>
      <div className={classes.container}>
        <Grid container className={classes.cardContainer}>
          <Grid container className={classes.personalContainer}>
            <Typography className={classes.fontBold} align="center">
              Datos personales
            </Typography>
            <div className={classes.coverContainer}>
              <Avatar
                className={classes.cover}
                src={data.patientImage}
                align="center"
              />
            </div>
            <div className={classes.nameContainer} align="center">
              <Typography className={classes.name}>
                {data.patient}
              </Typography>
            </div>
            <div className={classes.infoContent} align="center">
              <FontAwesomeIcon icon={faPhone} color={'blue'} className={classes.infoIcon}/>
              <Typography className={classes.infoText} align="center">{data.phone}</Typography>
            </div>
            <div className={classes.infoContent}>
              <FontAwesomeIcon icon={faEnvelope} className={classes.infoIcon} />
              <Typography className={classes.infoText}>
                {data.email}
              </Typography>
            </div>
            <div className={classes.infoContent}>
              <FontAwesomeIcon icon={faCalendarAlt} className={classes.infoIcon} />
              <Typography className={classes.infoText}>
                {data.birthdate}
              </Typography>
            </div>
            <div className={classes.infoContent}>
              <FontAwesomeIcon icon={faVenusMars} className={classes.infoIcon} />
              <Typography className={classes.infoText}>
                {data.genderPatient}
              </Typography>
            </div>
            <div className={classes.infoContent}>
              <FontAwesomeIcon icon={faMapMarkedAlt} className={classes.infoIcon} />
              <Typography className={classes.infoText}>
                {data.locationDate}
              </Typography>
            </div>
            <div className={classes.infoContent}>
              <FontAwesomeIcon icon={faIdCard} className={classes.infoIcon} />
              <Typography className={classes.infoText}>
                {data.identificationCard}
              </Typography>
            </div>
            <div className={classes.infoContent}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={classes.infoIcon} />
              <Typography className={classes.infoText}>
                {data.adress}
              </Typography>
            </div>
            <div className={classes.infoContent}>
              <FontAwesomeIcon icon={faChurch} className={classes.infoIcon} />
              <Typography className={classes.infoText}>
                {data.religion}
              </Typography>
            </div>
            <div className={classes.infoContent}>
              <FontAwesomeIcon icon={faMale} className={classes.infoIcon} />
              <Typography className={classes.infoText}>
                {data.ethnicGroup}
              </Typography>
            </div>
            <div className={classes.infoContent}>
              <FontAwesomeIcon icon={faRing} className={classes.infoIcon} />
              <Typography className={classes.infoText}>
                {data.maritalStatus}
              </Typography>
            </div>
          </Grid>
          <div className={classes.clinicContainer}>
            <Typography className={classes.fontBold} align="center">
              Historia clinica
            </Typography>
            <Grid container className={classes.clinicCard}>
              <Typography className={classes.clinicTitle} align="center">
                Antecedentes familiares patológicos
              </Typography>
              <div className={classes.item}>
                <Typography className={classes.clinicSubTitle}>
                  Enfermedades infecto-contagiosas:
                </Typography>
                <ol>
                  <li className={classes.itemText}>
                    <Typography>
                      Hepatitis
                    </Typography>
                  </li>
                  <li className={classes.itemText}>
                    <Typography>
                      Tosferina
                    </Typography>
                  </li>
                  <li className={classes.itemText}>
                    <Typography>
                      Rubeola
                    </Typography>
                  </li>
                </ol>
              </div>
              <div className={classes.item}>
                <Typography className={classes.clinicSubTitle}>
                  Enfermedades hereditarias:
                </Typography>
                <ol>
                  <li className={classes.itemText}>
                    <Typography>
                      Cardíacas
                    </Typography>
                  </li>
                  <li className={classes.itemText}>
                    <Typography>
                      Oculares
                    </Typography>
                  </li>
                </ol>
              </div>
            </Grid>
            <Typography className={classes.fontBold} align="center">
              Descripcion de la consulta
            </Typography>
            <Grid container className={classes.clinicCard}>
              <Typography className={classes.clinicTitle}>
                Motivos de la consulta
              </Typography>
              <Grid xs={11}>
                <Typography className={classes.textDescripcion}>
                  {data.reasonsConsultation}
                </Typography>
              </Grid>
              <Typography className={classes.clinicTitle}>
                Historia de la enfermedad
              </Typography>
              <Grid xs={11}>
                <Typography className={classes.textDescripcion}>
                  {data.historyDisease}
                </Typography>
              </Grid>
            </Grid>
            {
              data.stateDoctor === 1
              ?
              <>
                <Grid className={classes.fieldsContainer} item lg={12}>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    multiline
                    rows={4}
                    error={motivoError}
                    helperText={motivoError ? 'Campo obligatorio' : null}
                    label="Respuesta"
                    type="text"
                    name="motivo"
                    value={motivo}
                    onChange={handleInputChange}
                  />
                </Grid>
                <div className={classes.buttonContainer}>
                  <Button onClick={handleSubmit} variant="contained" color="primary">
                    {
                      isReplying
                      ?
                      "Enviando..."
                      :
                      "Enviar respuesta"
                    }
                  </Button>
                </div>
              </>
              :
              <>
                <Typography className={classes.clinicTitle}>
                  Respuesta
                </Typography>
                <div className={classes.clinicCard}>
                  <Typography className={classes.textDescripcion}>
                    {data.reply}
                  </Typography>
                </div>
              </>
            }
          </div>
        </Grid>
      </div>
    </Layout>
  )
}

export default DetailView;
