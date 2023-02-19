import {
  createConsulta,
  getConsultationsUser,
} from "../lib/data/consultation.data";

describe("PRUEBAS SPRINT 2", () => {
  test("debería retorna listado de consultas", () => {});
  test("debería retornar el listado de consultas con la nueva consulta agregada", async () => {
    const newConsultation = {
      date: new Date(
        "Tue Nov 22 2022 11:07:31 GMT-0600 (hora estándar central)"
      ),
      doctor: "KMtgLfhFHpejUEHXj6fjDRvF8jA2",
      historyDisease: "NO HAY",
      patient: "phtsagoSetMFP8jAkjRQHLx6OjB3",
      reasonsConsultation: "ORINAR CONSTANTEMENTE",
      state: 2,
      stateDoctor: 1,
      time: new Date(
        "Tue Nov 22 2022 11:07:31 GMT-0600 (hora estándar central)"
      ),
      type: 1,
    };

    await createConsulta(newConsultation);
    const obtainedConsultations = await getConsultationsUser(
      "phtsagoSetMFP8jAkjRQHLx6OjB3"
    );

    const expectedConsultation = {
      birthdate: "10/17/1987",
      date: "11/22/2022",
      doctor: "Charlie Mike Argueta Figueroa ",
      doctorImage:
        obtainedConsultations[obtainedConsultations.length - 1].doctorImage,
      email: "mauricio@gmail.com",
      genderPatient: "Masculino",
      id: obtainedConsultations[obtainedConsultations.length - 1].id,
      patient: "Mauricio Eli Díaz Mena",
      patientImage:
        obtainedConsultations[obtainedConsultations.length - 1].patientImage,
      phone: 87676765,
      state: 2,
      time: obtainedConsultations[obtainedConsultations.length - 1].time,
      type: 1,
    };

    expect(obtainedConsultations[obtainedConsultations.length - 1]).toEqual(
      expectedConsultation
    );
  });
});
