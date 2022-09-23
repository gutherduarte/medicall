import React from 'react';
import Search from './../../../../components/search/search';
import Layout from '../../../../components/shared/theme/layout';
import {
  Typography,
  TextField,
  Button,
  IconButton,
  Tooltip,
  Grid,
  Zoom,
  MenuItem
} from '@material-ui/core';
import { registerStyles  } from './register.styles';
import {
  faFileAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RegisterView = (props) => {
  const {
    speciality,
    doctor,
    reasonsConsultation,
    historyDisease,
    doctors,
    specialities,
    handleInputChange,
    handleSubmit,
    handleSelect,
    goHistory,
    doctorError,
    reasonsConsultationError,
    specialityError,
    historyDiseaseError,
    profileDoctor,
  } = props;

  const classes = registerStyles();

  return(
    <>
      <Layout>
        <div className={classes.titleContainer}>
          <Typography className={classes.title}>Consultas</Typography>
          <Typography className={classes.subtitle}>| Registro</Typography>
         <Search align="center"/>
        </div>
         
        <Grid className={classes.form}>
       
          <div className={classes.cardForm}>
            <div className={classes.iconButtonContainer}>
              <Tooltip
                className={classes.iconButton}
                placement="bottom"
                TransitionComponent={Zoom}
                title="Llenar historia clínica"
              >
                <IconButton onClick={goHistory}>
                  <FontAwesomeIcon icon={faFileAlt} className={classes.icon} />
                </IconButton>
              </Tooltip>
            </div>
            <Grid className={classes.container} container>

              {
                profileDoctor=== undefined
                 ? 
                   <>
                    <Grid className={classes.fieldsContainer} item lg={6}>      
                      <TextField
                        className={classes.textField}
                        variant="outlined"
                        select
                        label="Especialidad"
                        type="text"
                        name="speciality"
                        helperText={
                          specialityError === 1 ? 'Campo obligatorio' : null
                        }
                        error={specialityError === 0 ? false : true}
                        
                        InputLabelProps={{
                              shrink: true,
                            }}
                          
                        value={speciality}
                        onChange={handleSelect}
                      >
                        {
                          specialities && specialities.map(option => (
                            <MenuItem key={option.id} value={option}>
                              {option.name}
                            </MenuItem>
                          ))
                        }
                      </TextField>
                    </Grid>
                    <Grid className={classes.fieldsContainer} item lg={6}>
                      <TextField
                        className={classes.textField}
                        variant="outlined"
                        select
                        label="Médico"
                        type="text"
                        name="doctor"
                        helperText={
                          doctorError === 1 ? 'Campo obligatorio' : null
                        }
                        error={doctorError === 0 ? false : true}
                      
                        InputLabelProps={{
                              shrink: true,
                            }}
                          
                        value={doctor}
                        onChange={handleSelect}
                      >
                        {
                          doctors && doctors.map(option => (
                            <MenuItem key={option.id} value={option.id}>
                              {`${option.firstName} ${option.lastName}`}
                            </MenuItem>
                          ))
                        }
                      </TextField>
                    </Grid>
                   </>
                 :
                   <>
                     <Grid item lg={5} className={classes.fieldsContainer}>
                      <Typography >{profileDoctor.specialityName}</Typography>
                     </Grid>
                    <Grid item lg={5} className={classes.fieldsContainer}>
                      <Typography >{profileDoctor.firstName}</Typography>
                    </Grid>
                   </>
              }


              <Grid className={classes.fieldsContainer} item lg={6}>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  multiline
                  rows={4}
                  label="Motivo de la consulta"
                  type="text"
                  name="reasonsConsultation"
                   helperText={
                    reasonsConsultationError === 1 ? 'Campo obligatorio' : null
                  }
                  error={reasonsConsultationError === 0 ? false : true}
                 
                  InputLabelProps={{
                        shrink: true,
                      }}
                      SelectProps={{
                        native: true,
                      }}
                  value={reasonsConsultation}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid className={classes.fieldsContainer} item lg={6}>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  multiline
                  rows={4}
                  label="Historia de la enfermedad"
                  type="text"
                  name="historyDisease"
                  helperText={
                    historyDiseaseError === 1 ? 'Campo obligatorio' : null
                  }
                  error={historyDiseaseError === 0 ? false : true}
                   
                  InputLabelProps={{
                        shrink: true,
                      }}
                      SelectProps={{
                        native: true,
                      }}
                  value={historyDisease}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Grid>
              <div className={classes.buttonContainer}>
                <Button onClick={handleSubmit} variant="contained" color="primary">Guardar</Button>
              </div>
            </Grid>
          </div>
       </Grid>
      </Layout>
    </>
  )
}

export default RegisterView;