import { makeStyles, withStyles } from '@material-ui/core';
import React from 'react';
import { DialogTitle, Typography, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const profileStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  cover: {
    width: 120,
    height: 100,
    display: 'flex',
    borderRadius: 10,
    
  },
  image: {
    width: '50%',
    height: '50%'
  },
  iconContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  iconRating: {
    fontSize: 20,
    color: '#feb838',
  },
  icon: {
    fontSize: 20,
    color: '#a6a9bc'
  },
  iconText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  iconSubText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#a7aabd'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 10,
  },
  speciality: {
    color: '#6c788e',
    marginBottom: 10,
    marginTop: 10
  },
  info: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
    borderRadius: 5,
    height: 70,
  },
  infoContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconInfo: {
    color: '#000036',
    fontSize: 18,
    marginBottom: 10,
  },
  iconInfoo: {
    color: '#000036',
    fontSize: 28,
  },
  infoText: {
    color: '#000036',
  },
  titleProfile: {
    fontWeight: 'bold',
    color: '#000036',
    marginBottom: 20,
    marginTop: 20
  },
  paragraph: {
    minWidth: 400,
    maxWidth: 400
  },
  establishment: {
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  iconEstablish: {
    color: '#000036',
    fontSize: 18,
    marginRight: 10,
  },
}));

const dialogTitleStyles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1)
  },
  icon: {
    color:'#2a3150',
    fontSize: 16
  }
});

const StyledDialogTitle = withStyles(dialogTitleStyles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <DialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <FontAwesomeIcon className={classes.icon} icon={faArrowLeft} />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

export { profileStyles, StyledDialogTitle };
