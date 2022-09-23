import React from "react";
import DetailView from "./detail.view";
import { updateConsultation } from "../../../../../lib/data/consultation.data";
import { withRouter } from "react-router-dom";

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      motivo: '',
      motivoError: false,
      isReplying: false
    };
  }

  validateField = () => {
    const { motivo } = this.state;
    let motivoError = false;

    if (motivo === '') motivoError = true;
    else motivoError = false;

    if (!motivoError) {
      this.setState({motivoError});
      return false;
    }
    else {
      this.setState({motivoError});
      return true;
    }
  }

  goConsultation = () => {
    const { history } = this.props;
    history.push("/consultation");
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { motivo, data } = this.state;
    const error = this.validateField();
    if (!error) {
      this.setState({ isReplying: true });
      updateConsultation(data.id, motivo).then(() => {
        this.setState({motivo: "", isReplying: false});
        this.goConsultation();
      }).catch((e) => {
        this.setState({isReplying: false});
        console.log(e)
      });
    }
  };

  render() {
    const { data, motivo, isReplying, motivoError } = this.state;
    return (
      <DetailView
        data={data}
        handleInputChange = {this.handleInputChange}
        handleSubmit= {this.handleSubmit}
        motivo={motivo}
        isReplying={isReplying}
        motivoError={motivoError}
      />
    );
  }

  async componentDidMount() {
    const { state } = this.props.location;
    if (state !== undefined) {
      this.setState({ data: state.row });
    }
  }
}

export default withRouter(Detail);
