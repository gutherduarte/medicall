import React from "react";
import { withRouter } from "react-router-dom";
import ConsultationView from "./consultation.view";
class Consultation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
  

    return (
      <ConsultationView />
    );
  }
}
export default withRouter(Consultation);
