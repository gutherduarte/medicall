import { getPatients } from "../lib/data/patients.data";

describe("PRUEBAS SPRINT 4", () => {
  test("validar campos: correo y contraseña", () => {});
  test("debería retornar true si se encuentra un usuario con el correo y contraseña ingresados", async () => {
    let email = "miriam@gmail.com";
    let password = "miriam";

    const patients = await getPatients();

    let userExist = patients.find((patient) => {
      if (patient.email === email && patient.password === password) {
        return true;
      }
    });

    expect(userExist).toBeTruthy();
  });
});
