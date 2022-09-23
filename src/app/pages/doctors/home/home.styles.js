import { makeStyles } from '@material-ui/core/styles';

const homeStyles = makeStyles(theme => ({
  slider: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    width: '100%'
  },
  card: {
    width: '100%',
    backgroundColor: '#3498db',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 26,
    color: 'white',
    marginBottom: 30,
    marginTop: 30
  },
  subTitle: {
    fontSize: 20,
    color: 'white'
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  icon: {
    fontSize: 50,
    color: 'white',
    marginBottom: 30
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 30
  },
  paragraph: {
    fontSize: 14,
    color: 'white'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    height: 100
  },
  footerText: {
    color: '#888'
  }
}));

export { homeStyles };
