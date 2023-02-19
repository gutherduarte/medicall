import React from "react";
import SideBarView from "./side-bar.view";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../lib/data/user.data";

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submenu: false,
    };
  }

  handleOpenSubmenu = () => {
    const { submenu } = this.state;
    this.setState({ submenu: !submenu });
  };

  goHome = () => {
    const { history } = this.props;
    history.push("/home");
  };

  goMeetings = () => {
    const { history } = this.props;
    history.push("/meetings");
  };

  goConsultation = () => {
    const { history } = this.props;
    history.push("/consultation");
  };

  goDoctors = () => {
    const { history } = this.props;
    history.push("filterdoctors");
  };
  goLogin = () => {
    const { history } = this.props;
    history.push("/login");
  };
  goSignOut = () => {
    const { history } = this.props;
    history.push("/home");
    signOut();
  };

  render() {
    const { submenu } = this.state;
    const { open, handleClose, currentUser } = this.props;

    return (
      <SideBarView
        open={open}
        submenu={submenu}
        handleOpenSubmenu={this.handleOpenSubmenu}
        handleClose={handleClose}
        goMeetings={this.goMeetings}
        goConsultation={this.goConsultation}
        goHome={this.goHome}
        goDoctors={this.goDoctors}
        goLogin={this.goLogin}
        user={currentUser}
        goSignOut={this.goSignOut}
      />
    );
  }
}

const mapStateToProps = (state) => (
  window.localStorage.setItem(
    "currentUser",
    JSON.stringify(state.auth.currentUser)
  ),
  {
    currentUser: state.auth.currentUser,
  }
);

export default connect(mapStateToProps, null)(withRouter(SideBar));
