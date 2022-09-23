import React from "react";
import RegisterView from "./register.view";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSpecialities } from "../../../../../lib/data/speciality.data";
import { getDoctorsById } from "../../../../../lib/data/doctors.data";
import { createMeeting } from "../../../../../lib/data/meetings.data";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      time: null,
      direction: '',
      doctor: '',
      speciality: '',
      type: "0",
      items: [],
      doctors: [],
      specialityError:0,
      doctorError: 0,
      directionError: 0,
      dateError: 0,
      timeError: 0,
      typeError: 0,
      profileDoctor:{},
      user: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDateChange = (date) => {
    this.setState({ date });
  };

  handleTimeChange = (time) => {
    this.setState({ time });
  };

  loadDoctors = async (value) => {
    const doctors = await getDoctorsById(value);
    console.log('doctors', doctors);
    this.setState({doctors});
  }

  handleSelect = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (name === 'speciality') {
      this.loadDoctors(value);
    }
  };

  validateRegisterFields = () => {
    const {
      date,
      time,
      direction,
      doctor,
      speciality,
      type,
    } = this.state;

    let specialityError= 0;
    let doctorError = 0;
    let directionError= 0;
    let dateError= 0;
    let timeError= 0;
    let typeError= 0;

   if(this.state.profileDoctor===undefined){
      if (speciality ===""){
        specialityError = 1
      } 
      else{specialityError = 0}

      if (doctor === "") doctorError = 1;
      else doctorError = 0;
    }

      if (direction === "") directionError = 1;
      else directionError = 0;

      if (date === null) dateError = 1;
      else dateError = 0;

      if (time === null) timeError = 1;
      else timeError = 0;

      if (type === "0") typeError = 1;
      else typeError = 0;
    
    if (specialityError===0 && directionError===0 && dateError===0 &&
      timeError===0 && typeError===0 && doctorError===0 ) {
      this.setState({
        specialityError,
        directionError, 
        dateError,
        timeError, 
        typeError,
        doctorError,
      });
      return false;
    }
    else {
      this.setState({
        specialityError,
        directionError, 
        dateError,
        timeError, 
        typeError,
        doctorError,
      });
      return true;
    }

  }
  goMeeting = () => {
    const { history } = this.props;
    history.push( "/meetings");
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.validateRegisterFields());
   if(this.validateRegisterFields()){
   }else{
     let {
      date,
      time,
      direction,
      doctor,
      type ,
    } = this.state;
    type=parseInt(type)
    if(this.state.profileDoctor===undefined){
      await createMeeting({ date,
      time,
      direction,
      doctor,
      speciality:this.state.speciality.id,
      type,
      state:2,
      patient: this.state.user.id
    });
    }else{
       await createMeeting({ date,
      time,
      direction,
      doctor:this.state.profileDoctor.id,
      speciality:this.state.profileDoctor.speciality,
      type,
      state:2,
      patient: this.state.user.id,

    })
   }
   this.goMeeting();
 }
}
  
  render() {
    const {
      date,
      time,
      direction,
      doctor,
      type,
      speciality,
      items,
      doctors,
      specialityError,
      doctorError,
      directionError,
      dateError,
      timeError,
      typeError,
      profileDoctor,
    } = this.state;
     const {currentUser } = this.props;
    this.state.user=currentUser;
    console.log(this.state.user)
    return (
      <RegisterView
        date={date}
        time={time}
        direction={direction}
        doctor={doctor}
        type={type}
        speciality={speciality}
        items={items}
        doctors={doctors}
        specialityError={specialityError}
        doctorError={doctorError}
        directionError={directionError}
        dateError={dateError}
        timeError={timeError}
        typeError={typeError}
        handleSelect={this.handleSelect}
        handleChange={this.handleChange}
        handleDateChange={this.handleDateChange}
        handleTimeChange={this.handleTimeChange}
        profileDoctor={profileDoctor}
        handleSubmit={this.handleSubmit}
      />
    );
  }
  async componentDidMount() {
    const items = await getSpecialities();
    this.setState({ items });
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
