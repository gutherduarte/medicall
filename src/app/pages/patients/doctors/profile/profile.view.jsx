import React from "react";
import doctorenmedicina from "./../../../../../assets/images/doctorenmedicina.png"
import { profileStyles, StyledDialogTitle } from './profile.styles';
import {
  Dialog,
  DialogContent,
  Slide,
  Avatar,
  Grid,
  IconButton,
  Typography
  
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from '@material-ui/lab/Rating';
import {
  faStar,
  faUser,
  faPhone,
  faMapMarkerAlt,
  faHome,
  faEnvelope,
  faFileMedical,
  faNotesMedical
} from "@fortawesome/free-solid-svg-icons";
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

  const ProfileView  = (props)=>{
  const { handleClose, open, doctor,goRegisterMeeting ,goRegisterConsultation,handleChange} = props;
  const classes = profileStyles();

  return(
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <StyledDialogTitle id="customized-dialog-title" onClose={handleClose}/>
        <DialogContent>
          <Grid container className={classes.content}>
            <Grid item xs={6}>
              <Avatar
                variant="square"
                className={classes.cover}
                src={doctor.image}
              />
            </Grid>
            <Grid item xs={4}>
              <Grid container className={classes.iconContent}>
                <Grid item xs={4}>
                  <FontAwesomeIcon icon={faStar} className={classes.iconRating}/>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.iconText}> {doctor.rating} </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.iconSubText}>100 RESEÑAS</Typography>
                </Grid>
              </Grid>
              <Grid container className={classes.iconContent}>
                <Grid item xs={4}>
                  <FontAwesomeIcon icon={faUser} className={classes.icon} />
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.iconText}>80</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.iconSubText}>PACIENTES</Typography>
                </Grid>
              </Grid>
              <Grid container className={classes.iconContent}>
                <Rating
                  name="score"
                  value={doctor.Rating}
                  precision={0.5}
                  onChange={handleChange}
                />
               </Grid>
            </Grid>
          </Grid>
          <Typography className={classes.name}>
            {`${doctor.firstName} ${ doctor.lastName}`}
          </Typography>
          <Typography className={classes.speciality}>
            {doctor.specialityName}
          </Typography>
          <div className={classes.info}>
            <div className={classes.infoContent}>
              <FontAwesomeIcon icon={faPhone} className={classes.iconInfo}/>
              <Typography className={classes.infoText}>
                {doctor.phone}
              </Typography>
            </div>
            <div className={classes.infoContent}>
              <FontAwesomeIcon icon={faEnvelope} className={classes.iconInfo} />
              <Typography className={classes.infoText}>
                {doctor.email}
              </Typography>
            </div>
          </div>
          <div className={classes.info}>
            <div className={classes.infoContent}>
              <IconButton onClick={() => goRegisterMeeting(doctor)}>
                <FontAwesomeIcon icon={faFileMedical} className={classes.iconInfoo} />
              </IconButton>
              <Typography className={classes.infoText}>
                  Citas
              </Typography>
            </div>
            <div className={classes.infoContent}>
              <IconButton onClick={() => goRegisterConsultation(doctor)}>
                <FontAwesomeIcon icon={faNotesMedical} className={classes.iconInfoo} />
              </IconButton>
              <Typography className={classes.infoText}>
                  Consulta
              </Typography>
            </div>
          </div>
          <div>
            <Typography className={classes.titleProfile}>Biografía</Typography>
            <Typography className={classes.paragraph}>
              {doctor.biography}
            </Typography>
            <Typography className={classes.titleProfile}>Establecimiento</Typography>
            <div className={classes.establishment}>
              <FontAwesomeIcon icon={faHome} className={classes.iconEstablish} />
              <Typography className={classes.spaceNumer}>
                {doctor.establishmentName}
              </Typography>
            </div>
            <div className={classes.establishment}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={classes.iconEstablish} />
              <Typography className={classes.spaceNumer}>
                {doctor.location}
              </Typography>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProfileView;
