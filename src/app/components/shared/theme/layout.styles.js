import { makeStyles } from '@material-ui/core';

const layoutStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  content: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  body: {
    marginTop: 64
  }
}));

export { layoutStyles };
