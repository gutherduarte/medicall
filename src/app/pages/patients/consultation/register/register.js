import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import RegisterView from "./register.view";
import { getSpecialities } from "../../../../../lib/data/speciality.data";
import { getDoctorsById } from "../../../../../lib/data/doctors.data";
import { createConsulta } from "../../../../../lib/data/consultation.data";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speciality: "",
      doctor: 0,
      reasonsConsultation: "",
      historyDisease: "",
      specialities: [],
      doctors: [],
      specialityError: 0,
      reasonsConsultationError: 0,
      historyDiseaseError: 0,
      doctorError: 0,
      profileDoctor:{},
      user: ""
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(name, value);
  };

  handleSelect = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (name === "speciality") {
      this.loadDoctors(value);
    }
  };

  loadDoctors = async (value) => {
    const doctors = await getDoctorsById(value);
    console.log("doctors", doctors);
    this.setState({ doctors });
  };
  validateRegisterFields = () => {
    const {
      speciality,
      doctor,
      reasonsConsultation,
      historyDisease,
    } = this.state;

    let specialityError = 0;
    let doctorError = 0;
    let reasonsConsultationError = 0;
    let historyDiseaseError = 0;
    if(this.state.profileDoctor===undefined){
      if (speciality === "") specialityError = 1;
      else specialityError = 0;

      if (doctor === 0) doctorError = 1;
      else doctorError = 0;
    }

    if (reasonsConsultation === "") reasonsConsultationError = 1;
    else reasonsConsultationError = 0;

    if (historyDisease === "") historyDiseaseError = 1;
    else historyDiseaseError = 0;

    if (
      doctorError === 0 &&
      reasonsConsultationError === 0 &&
      specialityError === 0 &&
      historyDiseaseError === 0
    ) {
      this.setState({
        doctorError,
        reasonsConsultationError,
        specialityError,
        historyDiseaseError,
      });
      return false;
    } else {
      this.setState({
        doctorError,
        reasonsConsultationError,
        specialityError,
        historyDiseaseError,
      });
      return true;
    }
  };
  goConsultation = () => {
    const { history } = this.props;
    history.push( "/consultation");
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.validateRegisterFields());

    if (this.validateRegisterFields()) {
    } else {
      const { doctor, historyDisease, reasonsConsultation } = this.state;
      const date = new Date();
      if(this.state.profileDoctor===undefined){
      await createConsulta({
        type: 1,
        patient: this.state.user.id,
        stateDoctor: 1,
        state: 2,
        date: date,
        time: date,
        doctor,
        historyDisease,
        reasonsConsultation,
      });
    }else{
       await createConsulta({
        type: 1,
        patient: this.state.user.id,
        stateDoctor: 1,
        state: 2,
        date: date,
        time: date,
        doctor: this.state.profileDoctor.id,
        historyDisease,
        reasonsConsultation,
      });
    }
    this.goConsultation();
    }
  };

  goHistory = () => {
    const { history } = this.props;
    history.push("/clinicHistory");
  };

  render() {
    const {
      speciality,
      doctor,
      reasonsConsultation,
      historyDisease,
      specialities,
      doctors,
      doctorError,
      reasonsConsultationError,
      specialityError,
      historyDiseaseError,
      profileDoctor,
    
    } = this.state;
    const {currentUser } = this.props;
    this.state.user=currentUser;
    
    return (
      <RegisterView
        speciality={speciality}
        doctor={doctor}
        reasonsConsultation={reasonsConsultation}
        historyDisease={historyDisease}
        specialities={specialities}
        doctors={doctors}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        goHistory={this.goHistory}
        handleSelect={this.handleSelect}
        doctorError={doctorError}
        reasonsConsultationError={reasonsConsultationError}
        specialityError={specialityError}
        historyDiseaseError={historyDiseaseError}
        profileDoctor={profileDoctor}
      />
    );
  }
  async componentDidMount() {
    const specialities = await getSpecialities();
    this.setState({ specialities });
    const { state } = this.props.location;
    if (state !== undefined) {
      this.setState ({profileDoctor: state.doctor});
    
    }else{
      this.setState ({profileDoctor: undefined});
    }
  }
}
const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

export default connect( mapStateToProps, null )(withRouter(Register));
