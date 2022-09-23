import { makeStyles } from '@material-ui/core/styles';

const doctorsStyles = makeStyles(theme => ({
  title: {
    fontSize: 20,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#39393b'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
    borderRadius: 3
  },
  content: {
    width: '80%'
  },
  cardRoot: {
    maxWidth: 345,
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-around',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardMedia: {
    marginBottom:10,
    width: 80,
    height: 80,
  },
  spaceName:{
    fontWeight: 'bold',
    marginBottom: 10,
  },
  spaceText:{
    marginBottom: 10,
    color: '#757575'
  },
  contentButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    margin: 10,
  },
  txtButton:{
    fontSize: 15,
    color:'#2a3150',
    display: 'flex',
    justifyContent: 'flex-end',
    textTransform: 'none',
    fontWeight: 'bold',
  },
}));

export { doctorsStyles };
