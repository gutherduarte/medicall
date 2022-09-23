import React from "react";
import listStyles from './list.styles';
import Layout from '../../../../components/shared/theme/layout';
import {
  faPlus,
  faCalendarAlt,
  faCalendarTimes,
  faCalendarCheck
} from "@fortawesome/free-solid-svg-icons";
import Search from './../../../../components/search/search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  TextField,
  Avatar
} from '@material-ui/core';

const ListView =  (props) => {
  const classes= listStyles();
  const { data, type, handleChange, goRegister, filtering,  } = props;

  return(
    <>
      <Layout>
        <div className={classes.titleContainer}>
          <Typography className={classes.titleMeeting}>Citas</Typography>
          <Search/>
        </div>
        
        <div className={classes.container}>
          <Grid container className={classes.cardContainer}>
            <Grid className={classes.plusEnd}>
              <TextField
                className={classes.select}
                select
                name="type"
                label="Tipo de cita"
                value={type}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                <option key={0} value={0}>
                  Todas
                </option>
                <option key={1} value={1}>
                  En el consultorio
                </option>
                <option key={2} value={2}>
                  A domicilio
                </option>
              </TextField>
              <Tooltip
                style={{width: 50, height: 50}}
                placement="bottom"
                TransitionComponent={Zoom}
                title="Añadir cita"
              >
                <IconButton onClick={goRegister} >
                  <FontAwesomeIcon icon={faPlus} className={classes.icon} />
                </IconButton>
              </Tooltip>
            </Grid>
            <TableContainer className={classes.table}component={Paper}>
              <Table aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell className={classes.textBold} align="center">Médico</TableCell>
                    <TableCell className={classes.textBold} align="center">Hora</TableCell>
                    <TableCell className={classes.textBold} align="center">Fecha</TableCell>
                    <TableCell  align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data && data.filter(filtering()).map((row) => (
                    <Tooltip
                      placement="bottom"
                      TransitionComponent={Zoom}
                      title={
                        row.state === 1
                        ?
                        "Cita realizada"
                        :
                        row.state === 2
                        ?
                        "Cita pendiente"
                        :
                        "Cita cancelada"
                      }
                    >
                      <TableRow key={row.id} hover>
                        <TableCell align="center" className= {classes.cardImage}>
                          <Avatar className={classes.cardMedia} src={row.image}></Avatar>
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                          {row.doctor}
                        </TableCell>
                        <TableCell align="center">{row.time}</TableCell>
                        <TableCell align="center">{row.date}</TableCell>
                        <TableCell>
                          <FontAwesomeIcon
                            icon={
                              row.state === 1
                              ?
                              faCalendarCheck
                              :
                              row.state === 2
                              ?
                              faCalendarAlt
                              :
                              faCalendarTimes
                            }
                            color={
                              row.state === 1
                              ?
                              'green'
                              :
                              row.state === 2
                              ?
                              'blue'
                              :
                              'red'
                            }
                            className={classes.icon}
                          />
                        </TableCell>
                      </TableRow>
                    </Tooltip>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </div>
      </Layout>
    </>
  )
}

export default ListView;
