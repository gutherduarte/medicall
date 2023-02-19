import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ListView from "./list.view";
import { getConsultationsUser } from "./../../../../../lib/data/consultation.data";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      type: 0,
      user: {},
    };
  }

  goRegister = () => {
    const { history } = this.props;
    history.push("/consultationsRegister");
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  filtering = () => {
    const { type } = this.state;
    return (x) => {
      return x.type === parseInt(type) || parseInt(type) === 0 || false;
    };
  };

  goChat = () => {
    const { history } = this.props;
    history.push("/consultationsChat");
  };

  render() {
    const { data, type } = this.state;
    const { currentUser } = this.props;
    this.state.user = currentUser;

    return (
      <ListView
        data={data}
        goRegister={this.goRegister}
        type={type}
        handleChange={this.handleChange}
        filtering={this.filtering}
        handleChat={this.goChat}
      />
    );
  }

  async componentDidMount() {
    const data = await getConsultationsUser(this.state.user.id);

    this.setState({
      data,
    });
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, null)(withRouter(List));
