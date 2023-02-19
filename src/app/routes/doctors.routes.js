import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./../pages/doctors/home/home";
import Meetings from "./../pages/doctors/meetings/schedule/schedule";
import PatientsList from "./../pages/doctors/meetings/patients-list/patients-list";
import Consultation from "./../pages/doctors/consultation/patient-list/patient-list";
import PatientsDetails from "./../pages/doctors/meetings/patients-details/patients-details";
import Detail from "./../pages/doctors/consultation/detail/detail";
import Login from "../pages/shared/login/login";
import ConsultationChat from "./../pages/patients/consultation/chat/chat";

class DoctorsRoutes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { user } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/meetings" component={Meetings} />
          <Route exact path="/patientsList" component={PatientsList} />
          <Route exact path="/consultation" component={Consultation} />
          <Route exact path="/consultationsChat" component={ConsultationChat} />
          <Route exact path="/patientsDetails" component={PatientsDetails} />
          <Route exact path="/detail" component={Detail} />
          {user === undefined && (
            <Route exact path="/Login" component={Login} />
          )}
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default DoctorsRoutes;
