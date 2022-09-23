import React from 'react';
import { withRouter } from 'react-router-dom';
import SpecialitiesView from './specialities.view';
import { getSpecialities } from './../../../lib/data/speciality.data';


class Specialities extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  goDoctors = (id) => {
    const { history } = this.props;
    history.push({pathname: "/doctors", state: {id: id}});
  }

  render() {
    const { data } = this.state;
    return (
      <SpecialitiesView
        goDoctors={this.goDoctors}
        data={data}
      />
    );
  }
  async componentDidMount() {
    const specialities = await getSpecialities();
    this.setState({data: specialities});
  }
}

export default withRouter(Specialities);
