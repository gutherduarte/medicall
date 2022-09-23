import React from "react";
import PatientsListView from "../patient-list/patients-list.view";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getDoctorConsultations } from "../../../../../lib/data/consultation.data";

class PatientsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      stateDoctor: 0,
       user: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  goPatientsDetails = (row) => {
    const { history } = this.props;
    history.push({ pathname: "/detail", state: { row: row } });
  };

  filtering = () => {
    const { stateDoctor } = this.state;
    return (x) => {
      return x.stateDoctor === parseInt(stateDoctor) || parseInt(stateDoctor) === 0 || false;
    };
  };


  render() {
    const { data, stateDoctor } = this.state;
    const {currentUser } = this.props;
    this.state.user=currentUser;
    return (
      <PatientsListView
        data={data}
        type={stateDoctor}
        handleChange={this.handleChange}
        filtering={this.filtering}
        goPatientsDetails={this.goPatientsDetails}
      />
    );
  }

  async componentDidMount() {
    const patients = await getDoctorConsultations(this.state.user);

    this.setState({
      data: patients,
    });
  }
}
const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});
export default connect( mapStateToProps, null )(withRouter(PatientsList));
