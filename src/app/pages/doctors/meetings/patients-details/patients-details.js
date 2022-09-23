import React from "react";
import PatientsDetailsView from "./patients-details.view";

class PatientsDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      date: ''
    };
  }
  render() {
    const { data, date } = this.state;
    return <PatientsDetailsView data={data} date={date} />;
  }

  async componentDidMount() {
    const { state } = this.props.location;
    if (state !== undefined) {
      this.setState({
        data: state.row,
        date: state.date
      });
    }
  }
}
export default PatientsDetails;
