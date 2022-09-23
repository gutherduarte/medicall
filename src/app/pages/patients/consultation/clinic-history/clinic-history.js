import React from "react";
import ClinicHistoryView from "./clinic-history.view";
class ClinicHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      idNumber: "",
      fechaDeNacimiento: null,
      lugarDeNacimiento: "",
      sexo: "",
      edad: "",
      telefono: "",
      grupoEtnico: "",
      direccion: "",
      estadoCivil: "",
      religion: "",
      procedencia: "",
      nombreDelPadre: "",
      nombreDeLaMadre: "",
      tratamientoIndicado: "",
      hepatitis: false,
      sifilis: false,
      colera: false,
      tosferina: false,
      sarampion: false,
      varicela: false,
      rubeola: false,
      pariotiditis: false,
      meningitis: false,
      impetigo: false,
      tifoidea: false,
      malaria: false,
      escabiasis: false,
      tina: false,
      alergias: false,
      diabetes: false,
      hipertension: false,
      reumatica: false,
      renales: false,
      oculares: false,
      cardiacas: false,
      musculares: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDateChange = (fechaDeNacimiento) => {
    this.setState({fechaDeNacimiento});
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChangeCheck = (e) => {
    const { name, checked } = e.target;
    this.setState({[name]: checked});
  };

  render() {
    const {
      firstName,
      lastName,
      idNumber,
      fechaDeNacimiento,
      lugarDeNacimiento,
      sexo,
      edad,
      telefono,
      grupoEtnico,
      direccion,
      estadoCivil,
      religion,
      procedencia,
      nombreDelPadre,
      nombreDeLaMadre,
      tratamientoIndicado,
      hepatitis,
      sifilis,
      colera,
      tosferina,
      sarampion,
      varicela,
      rubeola,
      pariotiditis,
      meningitis,
      impetigo,
      tifoidea,
      malaria,
      escabiasis,
      tina,
      alergias,
      diabetes,
      hipertension,
      reumatica,
      renales,
      oculares,
      cardiacas,
      musculares,
    } = this.state;

    return (
      <ClinicHistoryView
        firstName={firstName}
        lastName={lastName}
        idNumber={idNumber}
        fechaDeNacimiento={fechaDeNacimiento}
        lugarDeNacimiento={lugarDeNacimiento}
        sexo={sexo}
        edad={edad}
        telefono={telefono}
        grupoEtnico={grupoEtnico}
        direccion={direccion}
        estadoCivil={estadoCivil}
        religion={religion}
        procedencia={procedencia}
        nombreDelPadre={nombreDelPadre}
        nombreDeLaMadre={nombreDeLaMadre}
        tratamientoIndicado={tratamientoIndicado}
        hepatitis={hepatitis}
        sifilis={sifilis}
        colera={colera}
        tosferina={tosferina}
        sarampion={sarampion}
        varicela={varicela}
        rubeola={rubeola}
        pariotiditis={pariotiditis}
        meningitis={meningitis}
        impetigo={impetigo}
        tifoidea={tifoidea}
        malaria={malaria}
        escabiasis={escabiasis}
        tina={tina}
        alergias={alergias}
        diabetes={diabetes}
        hipertension={hipertension}
        reumatica={reumatica}
        renales={renales}
        oculares={oculares}
        cardiacas={cardiacas}
        musculares={musculares}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        handleChangeCheck = { this.handleChangeCheck }
        handleDateChange = {this.handleDateChange}
      />
    );
  }
}
export default ClinicHistory;
