import { makeStyles } from '@material-ui/core/styles';
import Image from '../../../../assets/images/background.jpg'

const sliderStyles = makeStyles((theme) => ({
  view: {
    width: '100%',
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.53), rgba(0, 0, 0, 0.53)), url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  },
  container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    textShadow: '0 1px 2px rgba(0, 0, 0, .6)'
  },
  subLabel: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    textShadow: '0 1px 2px rgba(0, 0, 0, .6)'
  },
}));

export default sliderStyles;
