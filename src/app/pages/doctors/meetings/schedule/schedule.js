import React from "react";
import { withRouter } from "react-router-dom";
import ScheduleView from "./schedule.view";
import { connect } from 'react-redux';
import { getMeetingsByDate } from "../../../../../lib/data/meetings.data";

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      user: "",
    };
  }


  goPatients = (patients, date) => {
    const { history } = this.props;
    history.push({ pathname: "/patientsList", state: { patients, date}});
  };

  loadData = async () => {
    const dates = await getMeetingsByDate(this.state.user.id);
    this.setState({
      data: dates,
    });
  }

  render() {
    const { data } = this.state;
    const {currentUser } = this.props;
    this.state.user=currentUser;

    return(
      <ScheduleView
        data={data}
        goPatients={this.goPatients}
      />
    );
  }
  componentDidMount() {
    this.loadData();
  }
}
const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});
export default connect( mapStateToProps, null )(withRouter(Schedule));
