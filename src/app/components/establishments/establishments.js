import React from 'react';
import { withRouter } from 'react-router-dom';
import EstablishmentsView from './establishments.view';
import { getEstablishment } from './../../../lib/data/establishment.data';

class Establishments extends React.Component {
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
      <EstablishmentsView
        goDoctors={this.goDoctors}
        data={data}
      />
    );
  }
  async componentDidMount() {
    const establishments = await getEstablishment();
    this.setState({data: establishments});
  }
}

export default withRouter(Establishments);
