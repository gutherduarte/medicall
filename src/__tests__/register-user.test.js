import { getPatients } from "../lib/data/patients.data";
import { createUser } from "../lib/data/user.data";

describe("PRUEBAS SPRINT 3", () => {
  test("Validar datos ingresados", () => {});
  test("debería retornar el listado de usuarios con el nuevo usuario agregado", async () => {
    let newUser = {
      firstName: "Saira",
      lastName: "Cienfuegos",
      phone: 88996655,
      gender: 1,
      email: "sairacienfuegosv3@gmail.com",
      password: "cienfuegos",
      type: 1,
    };

    await createUser(newUser);

    const patients = await getPatients();

    let userExist = patients.find((patient) => {
      if (patient.email === newUser.email) {
        return true;
      }
    });

    expect(userExist).toBeTruthy();
  });
});
