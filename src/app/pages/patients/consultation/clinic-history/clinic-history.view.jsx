import React from 'react';
import Layout from '../../../../components/shared/theme/layout';
import {
  Typography,
  TextField,
  Button,
  Checkbox,
  Grid,
  MenuItem
} from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,} from '@material-ui/pickers';
import { clinicHistoryStyles  } from './clinic-history.styles';

const ClinicHistoryView = (props) => {
  const {
    firstName,
    lastName,
    idNumber,
    fechaDeNacimiento,
    lugarDeNacimiento,
    sexo,
    edad,
    telefono,
    grupoEtnico,
    direccion,
    estadoCivil,
    religion,
    procedencia,
    nombreDelPadre,
    nombreDeLaMadre,
    tratamientoIndicado,
    hepatitis,
    sifilis,
    colera,
    tosferina,
    sarampion,
    varicela,
    rubeola,
    pariotiditis,
    meningitis,
    impetigo,
    tifoidea,
    malaria,
    escabiasis,
    tina,
    alergias,
    diabetes,
    hipertension,
    reumatica,
    renales,
    oculares,
    cardiacas,
    musculares,
    handleInputChange,
    handleSubmit,
    handleChangeCheck,
    handleDateChange
  } = props;

  const classes = clinicHistoryStyles();

  return(
    <>
      <Layout>
        <div className={classes.root}>
          <div className={classes.titleContainer}>
            <Typography className={classes.title}>Consultas</Typography>
            <Typography className={classes.subtitle}>| Registro | Historia clínica</Typography>
          </div>
          <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.cardForm}>
              <Grid container>
                <Grid className={classes.subTitleContainer} item lg={12}>
                  <Typography className={classes.subTitle}>Datos personales</Typography>
                </Grid>
                <Grid className={classes.fieldsContainer} item lg={4}>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    label="Nombre"
                    type="text"
                    name="firstName"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={firstName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid className={classes.fieldsContainer} item lg={4}>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    label="Apellido"
                    type="text"
                    name="lastName"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={lastName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid className={classes.fieldsContainer} item lg={4}>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    label="Cedula"
                    type="text"
                    name="idNumber"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={idNumber}
                    onChange={handleInputChange}
                  />
                </Grid>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item lg={4} className={classes.fieldsContainer}>
                    <KeyboardDatePicker
                      className={classes.textField}
                      disableToolbar
                      id="date-picker-inline"
                      name="fecha"
                      inputVariant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      format="MM/dd/yyyy"
                      margin="normal"
                      label="Fecha"
                      cancelLabel="Cancelar"
                      value={fechaDeNacimiento}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
                <Grid className={classes.fieldsContainer} item lg={4}>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    label="Lugar de nacimiento"
                    type="text"
                    name="lugarDeNacimiento"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={lugarDeNacimiento}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid className={classes.fieldsContainer} item lg={4}>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    select
                    label="Sexo"
                    type="text"
                    name="sexo"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={sexo}
                    onChange={handleInputChange}
                  >
                    <MenuItem key={0} value={0}>
                    </MenuItem>
                    <MenuItem key={1} value={1}>
                      Masculino
                    </MenuItem>
                    <MenuItem key={2} value={2}>
                      Femenino
                    </MenuItem>
                  </TextField>
                </Grid>
                <Grid className={classes.fieldsContainer} item lg={4}>
                  <TextField
                    variant="outlined"
                    className={classes.textField}
                    label="Edad"
                    type="number"
                    name="edad"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={edad}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid className={classes.fieldsContainer} item lg={4}>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    label="Telefono"
                    type="number"
                    name="telefono"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={telefono}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid className={classes.fieldsContainer} item lg={4}>
                  <TextField
                    select
                    className={classes.textField}
                    variant="outlined"
                    label="Grupo etnico"
                    type="text"
                    name="grupoEtnico"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={grupoEtnico}
                    onChange={handleInputChange}
                  >
                    <MenuItem key={1} value={1}>
                      Mestizo
                    </MenuItem>
                    <MenuItem key={2} value={2}>
                      Miskito
                    </MenuItem>
                    <MenuItem key={3} value={3}>
                      Rama
                    </MenuItem>
                    <MenuItem key={4} value={4}>
                      Garífuna
                    </MenuItem>
                    <MenuItem key={5} value={5}>
                      Chorotega
                    </MenuItem>
                    <MenuItem key={6} value={6}>
                      Creole
                    </MenuItem>
                  </TextField>
                </Grid>
                <Grid className={classes.fieldsContainer} item lg={4}>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    label="Direccion"
                    type="text"
                    name="direccion"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={direccion}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid className={classes.fieldsContainer} item lg={4}>
                  <TextField
                    select
                    className={classes.textField}
                    variant="outlined"
                    label="Estado civil"
                    type="text"
                    name="estadoCivil"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={estadoCivil}
                    onChange={handleInputChange}
                  >
                    <MenuItem key={1} value={1}>
                      Soltero
                    </MenuItem>
                    <MenuItem key={2} value={2}>
                      Casado
                    </MenuItem>
                    <MenuItem key={3} value={3}>
                      Viudo
                    </MenuItem>
                    <MenuItem key={4} value={4}>
                      Divorciado
                    </MenuItem>
                  </TextField>
                </Grid>
                <Grid className={classes.fieldsContainer} item lg={4}>
                  <TextField
                    select
                    variant="outlined"
                    className={classes.textField}
                    label="Religion"
                    type="texto"
                    name="religion"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={religion}
                    onChange={handleInputChange}
                  >
                    <MenuItem key={1} value={1}>
                      Católico
                    </MenuItem>
                    <MenuItem key={2} value={2}>
                      Mormón
                    </MenuItem>
                    <MenuItem key={3} value={3}>
                      Evangélico
                    </MenuItem>
                    <MenuItem key={4} value={4}>
                      Testigo de Jehová
                    </MenuItem>
                    <MenuItem key={5} value={5}>
                      Otro
                    </MenuItem>
                  </TextField>
                </Grid>
                <Grid className={classes.fieldsContainer} item lg={4}>
                  <TextField
                    variant="outlined"
                    className={classes.textField}
                    label="Procedencia"
                    type="text"
                    name="procedencia"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={procedencia}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid className={classes.fieldsContainer} item lg={4}>
                  <TextField
                    variant="outlined"
                    className={classes.textField}
                    label="Nombre del padre"
                    type="text"
                    name="nombreDelPadre"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={nombreDelPadre}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid className={classes.fieldsContainer} item lg={4}>
                  <TextField
                    variant="outlined"
                    className={classes.textField}
                    label="Nombre de la madre"
                    type="text"
                    name="nombreDeLaMadre"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={nombreDeLaMadre}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid className={classes.fieldsContainer} item lg={4}>
                  <TextField
                    variant="outlined"
                    className={classes.textField}
                    label="Tratamiento indicado"
                    type="text"
                    name="tratamientoIndicado"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={tratamientoIndicado}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid className={classes.subTitleContainer} item lg={12}>
                  <Typography className={classes.subTitle}>Enfermedades infecto-contagiosas</Typography>
                </Grid>
                <div className={classes.checkContainer}>
                  <Grid className={classes.content} container>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        checked={hepatitis}
                        name="hepatitis"
                        onChange={handleChangeCheck}
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Hepatitis
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        checked={sifilis}
                        name="sifilis"
                        onChange={handleChangeCheck}
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Sífilis
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={colera}
                        name="colera"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Cólera
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={tosferina}
                        name="tosferina"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Tosferina
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={sarampion}
                        name="sarampion"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                    <Typography>
                      Sarampión
                    </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={varicela}
                        name="varicela"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Varicela
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={rubeola}
                        name="rubeola"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Rubeola
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={pariotiditis}
                        name="pariotiditis"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Pariotiditis
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={meningitis}
                        name="meningitis"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Meningitis
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={impetigo}
                        name="impetigo"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Impétigo
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={tifoidea}
                        name="tifoidea"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Tifoidea
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={malaria}
                        name="malaria"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Malaria
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={escabiasis}
                        name="escabiasis"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Escabiasis
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={tina}
                        name="tina"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Tiña
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <Grid className={classes.subTitleContainer} item lg={12}>
                  <Typography className={classes.subTitle}>Enfermedades hereditarias</Typography>
                </Grid>
                <div className={classes.checkContainer}>
                  <Grid className={classes.content} container>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={alergias}
                        name="alergias"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Alergias
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={diabetes}
                        name="diabetes"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Diabetes
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={hipertension}
                        name="hipertension"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Hipertensión
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={reumatica}
                        name="reumatica"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Reumática
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={renales}
                        name="renales"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Renales
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={oculares}
                        name="oculares"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Oculares
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={cardiacas}
                        name="cardiacas"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Cardíacas
                      </Typography>
                    </Grid>
                    <Grid className={classes.check} item lg={4}>
                      <Checkbox
                        value={musculares}
                        name="musculares"
                        color="primary"
                        onChange={handleChangeCheck}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Typography>
                        Musculares
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <div className={classes.buttonContainer}>
                <Button variant="contained" color="primary">Guardar</Button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </>
  )
}

export default ClinicHistoryView;
