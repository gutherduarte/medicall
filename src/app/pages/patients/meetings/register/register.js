import React, { useState } from "react";
import RegisterView from "./register.view";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getSpecialities } from "../../../../../lib/data/speciality.data";
import { getDoctorsById } from "../../../../../lib/data/doctors.data";
import {
  createMeeting,
  getMeetingsDoctor,
} from "../../../../../lib/data/meetings.data";

import { setHours, setMinutes } from "date-fns";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      time: null,
      direction: "",
      doctor: "",
      speciality: "",
      type: "0",
      items: [],
      doctors: [],
      specialityError: 0,
      doctorError: 0,
      directionError: 0,
      dateError: 0,
      timeError: 0,
      typeError: 0,
      profileDoctor: {},
      user: "",
      horasRegistradas: [],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDateChange = (date) => {
    let time = date;
    this.setState({ date });
    this.setState({ time });
  };

  loadDoctors = async (value) => {
    const doctors = await getDoctorsById(value);
    console.log("doctors", doctors);
    this.setState({ doctors });
  };

  handleSelect = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (name === "speciality") {
      this.loadDoctors(value);
    }
  };

  validateRegisterFields = () => {
    const { date, time, direction, doctor, speciality, type } = this.state;

    let specialityError = 0;
    let doctorError = 0;
    let directionError = 0;
    let dateError = 0;
    let timeError = 0;
    let typeError = 0;

    if (this.state.profileDoctor === undefined) {
      if (speciality === "") {
        specialityError = 1;
      } else {
        specialityError = 0;
      }

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

    if (
      specialityError === 0 &&
      directionError === 0 &&
      dateError === 0 &&
      timeError === 0 &&
      typeError === 0 &&
      doctorError === 0
    ) {
      this.setState({
        specialityError,
        directionError,
        dateError,
        timeError,
        typeError,
        doctorError,
      });
      return false;
    } else {
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
  };
  goMeeting = () => {
    const { history } = this.props;
    history.push("/meetings");
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.validateRegisterFields());
    if (this.validateRegisterFields()) {
    } else {
      let { date, time, direction, doctor, type } = this.state;
      type = parseInt(type);
      if (this.state.profileDoctor === undefined) {
        await createMeeting({
          date,
          time,
          direction,
          doctor,
          speciality: this.state.speciality.id,
          type,
          state: 2,
          patient: this.state.user.id,
        });
      } else {
        await createMeeting({
          date,
          time,
          direction,
          doctor: this.state.profileDoctor.id,
          speciality: this.state.profileDoctor.speciality,
          type,
          state: 2,
          patient: this.state.user.id,
        });
      }
      this.goMeeting();
    }
  };

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
      horasRegistradas,
    } = this.state;
    const { currentUser } = this.props;
    this.state.user = currentUser;

    const handleTime = (time) => {
      const times = {
        "1": 13,
        "2": 14,
        "3": 15,
        "4": 16,
        "5": 17,
        "6": 18,
        "7": 19,
        "8": 20,
        "9": 21,
        "10": 22,
        "11": 23,
        "12": 24,
      };

      return times[time];
    };

    const getDoctorMeet = async () => {
      if (profileDoctor.id) {
        let estado = [];
        const meetings = await getMeetingsDoctor(profileDoctor.id);
        meetings.map((meet) => {
          if (
            meet.date.toString().slice(0, 15) === date.toString().slice(0, 15)
          ) {
            let index = meet.time.toString().indexOf(":");

            let hour = parseInt(meet.time.toString().slice(0, index));

            let min = parseInt(
              meet.time.toString().slice(index + 1, index + 3)
            );

            if (meet.time.toString().includes("PM")) {
              hour = handleTime(meet.time.toString().slice(0, index));
            }

            estado.push(setHours(setMinutes(new Date(), min), hour));
          }
        });
        this.state.horasRegistradas = estado;
      }
    };
    getDoctorMeet();
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
        profileDoctor={profileDoctor}
        handleSubmit={this.handleSubmit}
        horasRegistradas={horasRegistradas}
      />
    );
  }
  async componentDidMount() {
    const items = await getSpecialities();
    this.setState({ items });
    const { state } = this.props.location;
    if (state !== undefined) {
      this.setState({ profileDoctor: state.doctor });
    } else {
      this.setState({ profileDoctor: undefined });
    }
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, null)(withRouter(Register));
