import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import doctors from "../doctors"
import {updateRating,createRating,ratingExists,getRatingDoctor} from './../../../../../lib/data/doctorRating.data'
import ProfileView from './profile.view';

class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      score:0,
      doctor:{},
      user: "",
    };
  }
  goRegisterMeeting = (doctor) => {
    const { history } = this.props;
    history.push({pathname: "/meetingsRegister",  state: { doctor: doctor }});
  }
  goRegisterConsultation = (doctor) => {
    const { history } = this.props;
    history.push({pathname: "/consultationsRegister", state: { doctor: doctor }});
  }
  handleChange = async (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
   /* await createRating({
        patient: this.state.user.id,
        doctor:this.state.doctor.id,
        score:parseInt(value),
       
      });*/
    await ratingExists(this.state.user.id,this.state.doctor.id,value);
    //await getRatingDoctor(this.state.doctor.id);
   // updateRating(this.state.user.id,this.state.doctor.id,value);
  };

  render(){
    const { open, handleClose, doctor } = this.props;
    this.state.doctor=doctor;
     const {currentUser } = this.props;
    this.state.user=currentUser;
    return(
      <ProfileView
        open={open}
        handleClose={handleClose}
        doctor={doctor}
        handleChange={this.handleChange}
        goRegisterMeeting={this.goRegisterMeeting}
        goRegisterConsultation={this.goRegisterConsultation}
      />
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});
export default connect( mapStateToProps, null )(withRouter(Profile));
