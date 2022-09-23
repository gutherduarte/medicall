import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchView from './search.view'

class Search extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        id:"",
      };
    }
    goDoctors = () => {
      const { history } = this.props;
      history.push({pathname: "/doctors", state: {id: this.state.id}});
    } 
    handleInputChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
      console.log(name, value);
    };
    render() {
      const{ id }=this.state
      
     
        return (
          <SearchView
          id={id}
          goDoctors={this.goDoctors}
          handleInputChange={this.handleInputChange}
          />
        );
      }
 }
 
export default withRouter(Search);
