import React from "react";
import PatientsListView from "./patients-list.view";
import { withRouter } from "react-router-dom";

class PatientsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      open: false,
      date: '',
      id: '',
      dateValue: null,
      timeValue: null,
    };
  }

  handleOpen = (row) => {
    const { dateValue, timeValue, id } = row;
    this.setState({
      open: true,
      dateValue,
      timeValue,
      id
    });
  }

  handleClose = () => {
    this.setState({open: false});
  }

  goPatientsDetail = (row) => {
    const { date } = this.state;
    const { history } = this.props;
    history.push({ pathname: "/patientsDetails", state: { row, date}});
  };

  render() {
    const { data, date, open, dateValue, timeValue, id } = this.state;
    return (
      <PatientsListView
        data={data}
        goPatientsDetail={this.goPatientsDetail}
        date={date}
        dateValue={dateValue}
        timeValue={timeValue}
        id={id}
        open={open}
        handleClose={this.handleClose}
        handleOpen={this.handleOpen}
      />
    );
  }
  async componentDidMount() {
    const { state } = this.props.location;
    if (state !== undefined) {
      this.setState({
        data: state.patients,
        date: state.date
      });
    }
  }
}
export default withRouter(PatientsList);
