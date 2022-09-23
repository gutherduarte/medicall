import React from 'react';
import { withRouter } from 'react-router-dom';
import FilterDoctorsView from './filter-doctors.view';

class FilterDoctors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  goDoctors = () => {
    const { history } = this.props;
    history.push({pathname: "/doctors", state: "Rating"});
  } 
  goEspeciality = () => {
    const { history } = this.props;
    history.push("/specialities");
  }
  goEstablecimiento = () => {
    const { history } = this.props;
    history.push( "/establishments");
  }

  render() {
    return (
      <FilterDoctorsView 
        goDoctors={this.goDoctors}
        goEspeciality={this.goEspeciality}
        goEstablecimiento= {this.goEstablecimiento}
      />
    );
  }
}

export default withRouter(FilterDoctors);
