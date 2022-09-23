import { makeStyles } from '@material-ui/core/styles';

const loginStyles = makeStyles (theme => ({
  root: {
    width: '100%',
    marginTop: 80,
    marginBottom: 10,
  },
  contentAll: {
    width: '100%',
    maxWidth: 900,
    margin: 'auto',
    position: 'relative',
  },
  backBox: {
    width:'100%',
    height: 500,
    padding: '30px 20px',
    display: 'flex',
    justifyContent:'space-around',
    alignItems: 'center',
    backdropFilter:'blur(10px)',
    color: 'white',
    backgroundColor:'#3498db',
    borderRadius: 5,
  },
  spaceTitle: {
    marginTop: 25,
    fontSize: 22,
    fontWeight: 400,
  },
  spaceTop: {
    marginTop: 25,
  },
  button: {
    marginTop: 25,
    backgroundColor:'#46A2FD',
    fontWeight:'bold',
    cursor: 'pointer',
    border: '2px solid #fff',
    fontSize: 14,
    color: 'white',
    outline: 'none',
    transition: theme.transitions.create({
      duration: theme.transitions.duration.standard
    }),
    '&:hover': {
      backgroundColor:'rgba(0, 128, 255, 1)',
      color:'white',
    },
  },
  titleRegister: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: '#46A2FD',
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#46A2FD',
    fontWeight: '600',
  },
  inputStyle: {
    width:'100%',
    marginTop: 15,
    border: 'none',
    fontSize: 16,
    outline: 'none',
  },
  inputLogin: {
    width:'80%',
    marginTop: 15,
    border: 'none',
    fontSize: 16,
  },
  buttonLogin: {
    marginTop: 30,
  },
  centerButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  buttonRegister: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor:'#46A2FD',
    fontWeight:'bold',
    cursor: 'pointer',
    border: '2px solid #fff',
    fontSize: 14,
    color: '#fff',
    outline: 'none',
    transition: 'all 300ms',
    '&:hover': {
      backgroundColor:'rgba(0, 128, 255, 1)',
      color:'white',
    },
  },
  contentLoginForm: {
    width: '100%',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '2px solid #ccc',
    position: 'absolute',
    borderRadius: 5,
    opacity: 1,
  },
  contentRegisterForm: {
    width:'100%',
    top: -70,
    padding: '10px',
    border: '2px solid #ccc',
    backgroundColor: '#fff',
    position: 'absolute',
    borderRadius: 5,
  },
  open: {
    display : 'block',
  },
  close: {
    display: 'none',
  },
  openRegister: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor:'red',
    width:'100%',
    maxWidth: 460,
    position: 'relative',
    top: '-420px',
    left: '10px'
  },
  closeRegister: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'red',
    width: '100%',
    maxWidth: 460,
    position: 'relative',
    top: '-400px',
    left: '410px'
  },
  boxOpen: {
    opacity: 0
  },
  boxClose: {
    opacity: 1
  },
}));

export { loginStyles };
