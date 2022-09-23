import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ListItem } from "@material-ui/core";

const StyledListItem = withStyles({
  root: {
    color: 'white',
    "&.MuiListItem-button:hover": {
      backgroundColor: '#3e456a'
    }
  },
})(ListItem);

const sideBarStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: 240,
    backgroundColor: '#2a3150',
    color: 'white',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: '#2a3150',
    color: 'white',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  icon: {
    color: '#979eba',
    fontSize: 18
  }
}));

export { sideBarStyles, StyledListItem };
