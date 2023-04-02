import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  tableCelll,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  MenuItem,
} from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Layout from "../../../../components/shared/theme/layout";
import Search from "./../../../../components/search/search";
import { registerStyles } from "./register.styles";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

const RegisterView = (props) => {
  const classes = registerStyles();
  const {
    date,
    time,
    direction,
    doctor,
    profileDoctor,
    type,
    items,
    doctors,
    speciality,
    handleChange,
    handleDateChange,
    handleTimeChange,
    handleSelect,
    handleSubmit,
    specialityError,
    doctorError,
    directionError,
    dateError,
    timeError,
    typeError,
    horasRegistradas,
  } = props;

  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Layout>
        <div className={classes.titleContainer}>
          <Typography className={classes.titleMeeting}>Citas</Typography>
          <Typography className={classes.subtitleMeeting}>
            | Registro
          </Typography>
          <Search />
        </div>
        <div className={classes.form}>
          <Grid container className={classes.cardForm}>
            {profileDoctor === undefined ? (
              <>
                <Grid item lg={5} className={classes.fieldsContainer}>
                  <TextField
                    select
                    name="speciality"
                    label="Especialidad"
                    type="text"
                    helperText={
                      specialityError === 1 ? "Campo obligatorio" : null
                    }
                    error={specialityError === 0 ? false : true}
                    value={speciality}
                    className={classes.textField}
                    onChange={handleSelect}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  >
                    {items &&
                      items.map((option) => (
                        <MenuItem key={option.id} value={option}>
                          {option.name}
                        </MenuItem>
                      ))}
                  </TextField>
                </Grid>
                <Grid item lg={5} className={classes.fieldsContainer}>
                  <TextField
                    select
                    name="doctor"
                    label="Médico"
                    type="text"
                    helperText={doctorError === 1 ? "Campo obligatorio" : null}
                    error={doctorError === 0 ? false : true}
                    value={doctor}
                    className={classes.textField}
                    onChange={handleChange}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  >
                    {doctors.map((option) => (
                      <option key={option.id} value={option.id}>
                        {`${option.firstName} ${option.lastName}`}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </>
            ) : (
              <>
                <Grid item lg={5} className={classes.fieldsContainer}>
                  <Typography>{profileDoctor.specialityName}</Typography>
                </Grid>
                <Grid item lg={5} className={classes.fieldsContainer}>
                  <Typography>{profileDoctor.firstName}</Typography>
                </Grid>
              </>
            )}

            <Grid item lg={5} className={classes.fieldsContainer}>
              <TextField
                name="direction"
                label="Dirección"
                value={direction}
                helperText={directionError === 1 ? "Campo obligatorio" : null}
                error={directionError === 0 ? false : true}
                onChange={handleChange}
                variant="outlined"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                SelectProps={{
                  native: true,
                }}
              />
            </Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item lg={5} className={classes.fieldsContainer}>
                {/* <KeyboardDatePicker
                  className={classes.textField}
                  disableToolbar
                  id="date-picker-inline"
                  name="date"
                  inputVariant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  format="MM/dd/yyyy"
                  margin="normal"
                  label="Fecha"
                  cancelLabel="Cancelar"
                  value={date}
                  helperText={dateError === 1 ? "Campo obligatorio" : null}
                  error={dateError === 0 ? false : true}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  SelectProps={{
                    native: true,
                  }}
                /> */}
                <DatePicker
                  className="date-time"
                  selected={date}
                  onChange={(date) => handleDateChange(date)}
                  showTimeSelect
                  excludeTimes={horasRegistradas}
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </Grid>
              {/* <Grid item lg={5} className={classes.fieldsContainer}>
                <KeyboardTimePicker
                  className={classes.textField}
                  inputVariant="outlined"
                  margin="normal"
                  id="time-picker"
                  label="Hora"
                  name="time"
                  value={time}
                  helperText={timeError === 1 ? "Campo obligatorio" : null}
                  error={timeError === 0 ? false : true}
                  cancelLabel="Cancelar"
                  DialogProps={{ className: classes.timePicker }}
                  onChange={handleTimeChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  SelectProps={{
                    native: true,
                  }}
                />
              </Grid> */}
            </MuiPickersUtilsProvider>
            <Grid className={classes.fieldsContainer} item xs={5}>
              <FormControl className={classes.textField} component="fieldset">
                <Typography className={classes.checkTitle}>Tipo</Typography>
                <RadioGroup
                  className={classes.checkContent}
                  aria-label="tipo"
                  name="type"
                  value={type}
                  helperText={typeError === 1 ? "Campo obligatorio" : null}
                  error={typeError === 0 ? false : true}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="En el consultorio"
                    className={classes.checkButton}
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="A domicilio"
                    className={classes.checkButton}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.buttonContainer}>
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                Registrar cita
              </Button>
            </Grid>
          </Grid>
        </div>
      </Layout>
    </>
  );
};

export default RegisterView;
