import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./../pages/patients/home/home";
import Meetings from "./../pages/patients/meetings/meetings";
import MeetingsRegister from "./../pages/patients/meetings/register/register";
import FilterDoctors from "./../pages/patients/filter-doctors/filter-doctors"
import Specialities from "./../components/specialities/specialities";
import Establishments from "./../components/establishments/establishments";
import Doctors from "./../pages/patients/doctors/doctors";
import Consultation from "./../pages/patients/consultation/consultation";
import ConsultationRegister from "./../pages/patients/consultation/register/register";
import ClinicHistory from "./../pages/patients/consultation/clinic-history/clinic-history";
import Login from '../pages/shared/login/login';

class PatientsRoutes extends React.Component {
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
          <Route exact path="/meetingsRegister" component={MeetingsRegister} />
          <Route exact path="/consultation" component={Consultation} />
          <Route exact path="/filterdoctors" component={FilterDoctors} />
          <Route exact path="/doctors" component={Doctors} />
          <Route exact path="/consultationsRegister" component={ConsultationRegister} />
          <Route exact path="/clinicHistory" component={ClinicHistory} />
          <Route exact path="/establishments" component={Establishments} />
          <Route exact path="/specialities" component={Specialities} />
          
          
          {
            user === undefined && <Route exact path="/Login" component={Login} />
          }
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default PatientsRoutes;
