import React from 'react';
import { withRouter } from 'react-router-dom';
import DoctorsView from './doctors.view';
import { getDoctorsById, getDoctorsRanking } from './../../../../lib/data/doctors.data';

class Doctors extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    const {data}=this.state;
    return (
      <DoctorsView
        data={data}
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
