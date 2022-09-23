import Paper from '@material-ui/core/Paper';
import React from 'react';
import {SearchStyles} from './search.styles'
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import {
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SearchView = (props) => {
    const classes = SearchStyles();
    const {id,goDoctors,handleInputChange}=props;
    return (
      <Paper component="form" className={classes.root}>
        <InputBase
          
          className={classes.input}
          placeholder="Búsqueda directa"
          name="id"
          value={id}
          onChange={handleInputChange}
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton 
        type="submit" 
        className={classes.iconButton} 
        aria-label="search"
       
        onClick={() => goDoctors()}
        >
          <FontAwesomeIcon icon={faSearch}/>
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
      </Paper>
    );
  }
  export default SearchView;