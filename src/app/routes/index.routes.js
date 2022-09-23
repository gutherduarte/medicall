import React from "react";
import PatientsRoutes from "./patients.routes";
import DoctorsRoutes from "./doctors.routes";
import VisitanteRoutes from "./visitante.routes"
import Load from "../pages/shared/load/load.view";
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux-store/actions/auth-actions';
import { onAuthChanged, selectUser } from '../../lib/data/user.data';

class AppRoutes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async handleUserDetail (user) {
    const { setCurrentUser } = this.props;
    try {
      const userDetail = await selectUser(user.uid);
      setCurrentUser(userDetail);
    }
    catch(error) {
      console.error(error);
    }
    this.setState({loading: false});
  };

  listenAuthentication = () => {
    const { setCurrentUser } = this.props;
    onAuthChanged((user) => {
      if(user) {
        this.handleUserDetail(user);
      }
      else {
        setCurrentUser(undefined);
        this.setState({loading: false});
      }
    });
  };

  render() {
    const { loading } = this.state;
    const { currentUser } = this.props;

    if (loading) return <Load />;
    else {
      if (currentUser !== undefined && currentUser.type === 1){
        return <PatientsRoutes user={currentUser} />;
      }
      else if (currentUser !== undefined && currentUser.type === 2){
        return <DoctorsRoutes user={currentUser} />;
      }
      else return <VisitanteRoutes user={currentUser} />;
    }
  }
  async componentDidMount() {
    this.listenAuthentication();
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);
