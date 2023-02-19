import React from "react";
import patientsListStyles from "../patient-list/patient-list.style";
import Layout from "../../../../components/shared/theme/layout";
import {
  Grid,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  IconButton,
  Tooltip,
  Zoom,
  Avatar,
  TextField,
} from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faCheckSquare,
  faReply,
} from "@fortawesome/free-solid-svg-icons";

const PatientsListView = (props) => {
  const classes = patientsListStyles();
  const {
    data,
    stateDoctor,
    handleChange,
    filtering,
    goPatientsDetails,
    handleChat,
  } = props;

  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.titleContainer}>
          <Typography className={classes.title}>Consultas en línea</Typography>
        </div>
        <div className={classes.container}>
          <Grid container className={classes.cardContainer}>
            <Grid container className={classes.plusEnd}>
              <TextField
                className={classes.selectCite}
                select
                name="stateDoctor"
                label="Tipo de consulta"
                value={stateDoctor}
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
                  Consultas recibidas
                </option>
                <option key={2} value={2}>
                  Consultas contestadas
                </option>
              </TextField>
            </Grid>
            {data &&
              data.map((item) => (
                <>
                  <div className={classes.content}>
                    <Typography className={classes.date}>
                      {item.date}
                    </Typography>
                  </div>
                  <TablePatients
                    data={item.patients}
                    classes={classes}
                    filtering={filtering}
                    goPatientsDetails={goPatientsDetails}
                    i
                    handleChat={handleChat}
                  />
                </>
              ))}
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

const TablePatients = (props) => {
  const { data, classes, filtering, goPatientsDetails, handleChat } = props;

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="a dense table">
        <TableBody>
          {data &&
            data.filter(filtering()).map((row) => (
              <TableRow key={row.id} hover>
                <TableCell align="center">
                  <Avatar
                    className={classes.cardMedia}
                    src={row.patientImage}
                  />
                </TableCell>
                <TableCell align="center">{row.patient}</TableCell>
                <TableCell align="center">{row.time}</TableCell>
                <TableCell align="center">
                  <Tooltip
                    placement="bottom"
                    TransitionComponent={Zoom}
                    title="Chat"
                  >
                    <IconButton>
                      <FontAwesomeIcon
                        icon={faCommentAlt}
                        color={"#2a3150"}
                        className={classes.icon}
                        onClick={handleChat}
                      />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                {row.stateDoctor === 1 ? (
                  <TableCell
                    onClick={() => goPatientsDetails(row)}
                    align="center"
                  >
                    <Tooltip
                      placement="bottom"
                      TransitionComponent={Zoom}
                      title="Contestar"
                    >
                      <IconButton>
                        <FontAwesomeIcon
                          icon={faReply}
                          color={"#3498db"}
                          className={classes.icon}
                        />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                ) : (
                  <TableCell
                    onClick={() => goPatientsDetails(row)}
                    align="center"
                  >
                    <Tooltip
                      placement="bottom"
                      TransitionComponent={Zoom}
                      title="Contestada"
                    >
                      <IconButton>
                        <FontAwesomeIcon
                          icon={faCheckSquare}
                          color={"green"}
                          className={classes.icon}
                        />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                )}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PatientsListView;
