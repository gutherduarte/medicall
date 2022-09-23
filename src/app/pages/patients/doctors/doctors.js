import React from 'react';
import { withRouter } from 'react-router-dom';
import DoctorsView from './doctors.view';
import { getDoctorsById , getDoctorsRanking } from './../../../../lib/data/doctors.data';

class Doctors extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      data: [],
      open: false,
      doctor: {},
      value:2,
    };
  }

  handleOpen = (doctor) => {
    this.setState({open: true, doctor: doctor});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const {data, open, doctor, value}=this.state;
    return (
      <DoctorsView
        data={data}
        open={open}
        doctor={doctor}
        handleClose={this.handleClose}
        handleOpen={this.handleOpen}
        value={value}
      />
    );
  }
  async componentDidMount() {
    
    const { state } = this.props.location;
    if (state !== undefined){
      if(state==="Rating"){
        const doctors = await getDoctorsRanking();
        this.setState ({data: doctors});
      }else if (state !== "Rating") {
        const doctors = await getDoctorsById(state.id);
        this.setState ({data: doctors});
      }
    }
  }
}

export default withRouter(Doctors);
