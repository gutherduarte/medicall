import db from "./config";
import { getDoctors } from "./doctors.data";
import getPatients from "./patients.data";
import { format } from "date-fns";

const MEETINGS_KEY = "Meetings";

const monthNames = [
  "Enero",
  "Febreror",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Deciembre",
];
const getMeetingsUser = async (id) => {
  const doctors = await getDoctors();
  const querysnapshot = await db
    .collection(MEETINGS_KEY)
    .where("patient", "==", id)
    .get();
  const meetings = [];
  querysnapshot.forEach((document) => {
    doctors.forEach((element) => {
      if (document.data().doctor === element.id) {
        meetings.push({
          id: document.id,
          date: document
            .data()
            .date.toDate()
            .toLocaleDateString(),
          time: format(document.data().time.toDate(), "p"),
          patient: document.data().patient,
          doctor: `${element.firstName} ${element.lastName}`,
          type: document.data().type,
          state: document.data().state,
          image: element.image,
        });
      }
    });
  });
  return meetings;
};

const getMeetingsDoctor = async (id) => {
  const patients = await getPatients();
  const querysnapshot = await db
    .collection(MEETINGS_KEY)
    .where("doctor", "==", id)
    .get();
  const meetings = [];
  querysnapshot.forEach((document) => {
    patients.forEach((element) => {
      if (document.data().patient === element.id) {
        meetings.push({
          id: document.id,
          date: document.data().date.toDate(),
          time: format(document.data().time.toDate(), "p"),
          // patient: document.data().patient,
          // doctor: `${element.firstName} ${element.lastName}`,
          // type: document.data().type,
          // state: document.data().state,
          // image: element.image,
        });
      }
    });
  });
  return meetings;
};

const getMeetings = async () => {
  const doctors = await getDoctors();
  const querysnapshot = await db
    .collection(MEETINGS_KEY)
    .orderBy("date")
    .get();
  const meetings = [];
  querysnapshot.forEach((document) => {
    doctors.forEach((element) => {
      if (document.data().doctor === element.id) {
        meetings.push({
          id: document.id,
          date: document
            .data()
            .date.toDate()
            .toLocaleDateString(),
          time: format(document.data().time.toDate(), "p"),
          patient: document.data().patient,
          doctor: `${element.firstName} ${element.lastName}`,
          type: document.data().type,
          state: document.data().state,
          image: element.image,
        });
      }
    });
  });
  return meetings;
};

const getMeetingsByDate = async (id) => {
  const patients = await getPatients();
  const querysnapshot = await db
    .collection(MEETINGS_KEY)
    .orderBy("date", "desc")
    .get();
  const dates = [];
  const meetings = [];
  querysnapshot.forEach((document) => {
    patients.forEach((item) => {
      if (document.data().patient === item.id) {
        if (document.data().doctor === id) {
          meetings.push({
            id: document.id,
            doctor: document.data().doctor,
            state: document.data().state,
            type: document.data().type,
            time: format(document.data().time.toDate(), "p"),
            date: document
              .data()
              .date.toDate()
              .toLocaleDateString(),
            dateValue: document.data().date.toDate(),
            timeValue: document.data().time.toDate(),
            patient: `${item.firstName} ${item.lastName}`,
            patientImage: item.image,
            email: item.email,
            birthdate: item.birthdate.toDate().toLocaleDateString(),
            genderPatient: item.gender === 1 ? "Femenino" : "Masculino",
            identificationCard: item.identificationCard,
            adress: item.adress,
            maritalStatus:
              item.maritalStatus === 1
                ? "Solter@"
                : item.maritalStatus === 2
                ? "Casad@"
                : item.maritalStatus === 3
                ? "Viud@"
                : "Divorciad@",
            religion:
              item.religion === 1
                ? "Católico"
                : item.religion === 2
                ? "Mormón"
                : item.maritalStatus === 3
                ? "Evangélico"
                : item.maritalStatus === 4
                ? "Testigo de Jehová"
                : "Otro",
            ethnicGroup:
              item.ethnicGroup === 1
                ? "Mestizo"
                : item.ethnicGroup === 2
                ? "Miskito"
                : item.ethnicGroup === 3
                ? "Rama"
                : item.ethnicGroup === 4
                ? "Garífuna"
                : item.ethnicGroup === 5
                ? "Chorotega"
                : "Creole",
            phone: item.phone,
            locationDate: item.locationDate,
            identificationCard: item.identificationCard,
          });
          dates.push({
            id: document.id,
            date: document
              .data()
              .date.toDate()
              .toLocaleDateString(),
            day: format(document.data().date.toDate(), "d"),
            month:
              monthNames[
                document
                  .data()
                  .date.toDate()
                  .getMonth()
              ],
            year: document
              .data()
              .date.toDate()
              .getFullYear(),
          });
        }
      }
    });
  });

  const groupDates = [];
  dates.forEach((item, index) => {
    if (index < dates.length - 1) {
      if (
        item.day !== dates[index + 1].day ||
        item.month !== dates[index + 1].month
      ) {
        groupDates.push({
          id: item.id,
          date: item.date,
          day: item.day,
          month: item.month,
          year: item.year,
        });
      }
    } else {
      groupDates.push({
        id: item.id,
        date: item.date,
        day: item.day,
        month: item.month,
        year: item.year,
      });
    }
  });

  const groupDatesWithPatients = [];
  groupDates.forEach((item) => {
    const array = [];
    meetings.forEach((element) => {
      if (item.date === element.date) {
        array.push({ ...element });
      }
    });
    groupDatesWithPatients.push({
      day: item.day,
      month: item.month,
      year: item.year,
      patients: array,
    });
  });

  return groupDatesWithPatients;
};

const updateMeeting = async (id, value) => {
  const { date, time } = value;
  await db
    .collection(MEETINGS_KEY)
    .doc(id)
    .update({
      date: date,
      time: time,
    });
};
const createMeeting = async (Meeting) => {
  await db
    .collection(MEETINGS_KEY)
    .doc()
    .set(Meeting);
};

export {
  getMeetingsUser,
  getMeetings,
  getMeetingsByDate,
  updateMeeting,
  createMeeting,
  getMeetingsDoctor,
};
