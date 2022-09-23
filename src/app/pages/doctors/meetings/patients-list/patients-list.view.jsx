import React from 'react';
import patientsListStyles from './patients-list.styles';
import Layout from '../../../../components/shared/theme/layout';
import {
  Grid,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableContainer,
  Paper,
  IconButton,
  Tooltip,
  Zoom,
  Avatar
} from "@material-ui/core";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faNotesMedical, faTimes, faCalendarAlt ,faPhoneSquareAlt} from "@fortawesome/free-solid-svg-icons";
import RescheduleDialog from '../../../../components/reschedule/reschedule';

const PatientsListView = (props) => {
  const classes = patientsListStyles();
  const {
    data,
    goPatientsDetail,
    date,
    open,
    dateValue,
    timeValue,
    id,
    handleOpen,
    handleClose,
  } = props;

  return(
    <Layout>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Citas</Typography>
        <Typography className={classes.subtitle}>| {date} | Pacientes</Typography>
      </div>
      <div className={classes.container}>
        <Grid container className={classes.cardContainer}>
          <TableContainer className={classes.table} component={Paper}>
            <Table aria-label="a dense table">
              <TableHead>
                <TableRow >
                  <TableCell></TableCell>
                  <TableCell className={classes.textBold}>Paciente</TableCell>
                  <TableCell className={classes.textBold} align="center">Hora</TableCell>
                  <TableCell></TableCell>
                  <TableCell className={classes.textBold} align="center">Opciones</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data && data.map((row) => (
                  <TableRow key={row.id} hover>
                    <TableCell align="center">
                      <Avatar className={classes.cardMedia} src={row.patientImage}></Avatar>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.patient}
                    </TableCell>
                    <TableCell align="center">{row.time}</TableCell>
                    <TableCell onClick={() => goPatientsDetail(row)} align="center">
                      <Tooltip placement="bottom" TransitionComponent={Zoom}
                        title='Historia Clinica'>
                        <IconButton  >
                          <FontAwesomeIcon icon={faNotesMedical} color={'#3498db'}
                          className={classes.icon}/>
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell align="center" >
                      <Tooltip placement="bottom" TransitionComponent={Zoom} title='Reprogramar'>
                        <IconButton onClick={() => handleOpen(row)}>
                          <FontAwesomeIcon icon={faCalendarAlt} color={'#2a3150'}
                          className={classes.icon}/>
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell align="center">
                      <Tooltip placement="bottom" TransitionComponent={Zoom} title='Cancelar'>
                        <IconButton>
                          <FontAwesomeIcon icon={faTimes} color={'red'}
                          className={classes.icon}/>
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </div>
      {
        open
        ?
        <RescheduleDialog
          open={open}
          handleClose={handleClose}
          date={dateValue}
          time={timeValue}
          id={id}
        />
        :
        null
      }
    </Layout>
  );
}

export default PatientsListView;
