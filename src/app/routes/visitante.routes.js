import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./../pages/visitante/home/home";
import FilterDoctors from "./../pages/visitante/filter-doctors/filter-doctors";
import Login from '../pages/shared/login/login';
import Doctors from "./../pages/visitante/doctors/doctors";
import Specialities from "./../components/specialities/specialities";
import Establishments from "./../components/establishments/establishments";


class VisitanteRoutes extends React.Component {
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
          <Route exact path="/filterdoctors" component={FilterDoctors} />
          <Route exact path="/doctors" component={Doctors} />
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

export default VisitanteRoutes;