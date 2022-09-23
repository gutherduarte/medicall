import { makeStyles } from '@material-ui/core/styles';
const SearchStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
     marginLeft: '17%',
      alignItems: 'center',
      width: 400,
    },
    input: {
      
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

  export { SearchStyles };