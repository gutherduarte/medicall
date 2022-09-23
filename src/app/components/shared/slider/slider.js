import React from 'react';
import SliderView from './slider.view';

const data = [
  {
    label: 'MediCall',
    subLabel: 'Aplicación web para gestionar la agenda de citas de tu consultorio.',
  },
  {
    label: 'Mejora la atención a tu paciente',
    subLabel: 'En tiempos de COVID envía a tus pacientes su cita a través de MediCall y facilita su movilidad.',
  },
  {
    label: 'Incrementa tus ingresos',
    subLabel: 'Con MediCall reduces las inasistencias, mejoras el servicio a tu paciente, haces más fácil el trabajo de tu asistente y te conviertes en dueñ@ de tu tiempo y de tu agenda. Así ganas tu y ganamos todos en el sistema de salud. '
  },
];

class Slider extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      data: data
    };
  }

  handleStepChange = (step) => {
    this.setState({activeStep: step});
  };

  render() {

    const { activeStep, data } = this.state;
  return (
      <SliderView
        handleStepChange={ this.handleStepChange }
        activeStep={ activeStep }
        data={data}
      />
    );
  }
}

export default Slider;
