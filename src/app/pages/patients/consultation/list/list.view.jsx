import React from "react";
import listStyles from './list.styles';
import Search from './../../../../components/search/search'
import Layout from '../../../../components/shared/theme/layout';
import {
  faPlus,
  faCalendarAlt,
  faCalendarTimes,
  faCalendarCheck
} from "@fortawesome/free-solid-svg-icons";
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

  const { data, goRegister, type, handleChange, filtering } = props;

  const classes= listStyles();

  return(
    <>
    
      <Layout>
        <div className={classes.titleContainer}>
        <Typography className={classes.title} >
          Consultas
        </Typography>
         <Search />
         </div>
        <div className={classes.container}>
          <Grid container className={classes.cardContainer}>
            <Grid className={classes.plusEnd}>
              <TextField
                className={classes.select}
                select
                name="type"
                label="Tipo de consulta"
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
                  En línea
                </option>
                <option key={2} value={2}>
                  Presencial
                </option>
              </TextField>
              <Tooltip
                style={{width: 50, height: 50}}
                placement="bottom"
                TransitionComponent={Zoom}
                title="Realizar Consulta"
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
                      <TableCell  className={classes.textBold} align="center">Médico</TableCell>
                      <TableCell className={classes.textBold} align="center">Hora</TableCell>  
                      <TableCell className={classes.textBold} align="center" >Fecha</TableCell>
                      <TableCell></TableCell>
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
                        "Consulta realizada"
                        :
                        row.state === 2
                        ?
                        "Consulta pendiente"
                        :
                        row.state === 3
                        ?
                        "Consulta cancelada"
                        :
                        "Consulta realizada"
                      }
                    >
                      <TableRow key={row.id} hover>
                        <TableCell align="center" className= {classes.cardImage}>
                          <Avatar className={classes.cardMedia} src={row.doctorImage}></Avatar>
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
                              row.state === 3
                              ?
                              faCalendarTimes
                              :
                              faCalendarCheck
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
                              row.state ===3
                              ?
                              'red'
                              :
                              "green"
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
