import { makeStyles } from '@material-ui/core/styles';

const loadStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: '#2a3150',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: '30%',
    height: '30%'
  }
}));

export default loadStyles;
