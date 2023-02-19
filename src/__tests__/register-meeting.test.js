import { createMeeting, getMeetingsUser } from "../lib/data/meetings.data";

describe("PRUEBAS SPRINT 1", () => {
  test("debería retorna listado de citas", () => {});
  test("debería retornar el listado de citas con la nueva cita agregada", async () => {
    const newMeeting = {
      date: new Date(
        "Thu Nov 24 2022 08:21:00 GMT-0600 (hora estándar central)"
      ),
      direction: "REMASA 2C AL OESTE",
      doctor: "1l08xzfU6rgQv6GSsQ40uoC9wff2",
      patient: "phtsagoSetMFP8jAkjRQHLx6OjB3",
      speciality: "Js3iWAzl8UQlS7mhLwFd",
      state: 2,
      time: new Date(
        "Tue Nov 22 2022 13:00:41 GMT-0600 (hora estándar central)"
      ),
      type: 2,
    };

    await createMeeting(newMeeting);
    const obtainedMeetings = await getMeetingsUser(
      "phtsagoSetMFP8jAkjRQHLx6OjB3"
    );

    const expectedMeetings = {
      date: "11/24/2022",
      doctor: "Junior Ulisses Hurtado Cabrera",
      id: obtainedMeetings[obtainedMeetings.length - 1].id,
      image: obtainedMeetings[obtainedMeetings.length - 1].image,
      patient: "phtsagoSetMFP8jAkjRQHLx6OjB3",
      state: 2,
      time: "1:00 PM",
      type: 2,
    };

    expect(obtainedMeetings[obtainedMeetings.length - 1]).toEqual(
      expectedMeetings
    );
  });
});
