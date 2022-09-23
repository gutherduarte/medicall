import db from "./config";
import { format } from "date-fns";
import { getDoctors } from "./doctors.data";
import getPatients from "./patients.data";

const CONSULTATION_KEY = "Consultation";

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
const getConsultationsUser = async (id) => {
  const doctors = await getDoctors();
  const patients = await getPatients();
  const querysnapshot = await db
    .collection(CONSULTATION_KEY)
    .where("patient","==",id)
    .get();
  const consultations = [];
  querysnapshot.forEach((document) => {
    doctors.forEach((element) => {
      patients.forEach((item) => {
        if (document.data().doctor === element.id) {
          if (document.data().patient === item.id) {
            consultations.push({
              id: document.id,
              date: document.data().date.toDate().toLocaleDateString(),
              time: format(document.data().time.toDate(), "p"),
              patient: `${item.firstName} ${item.lastName}`,
              patientImage: item.image,
              phone: item.phone,
              email: item.email,
              genderPatient: item.gender === 1 ? "Femenino" : "Masculino",
              birthdate: item.birthdate.toDate().toLocaleDateString(),
              doctor: `${element.firstName} ${element.lastName} `,
              state: document.data().state,
              type: document.data().type,
              doctorImage: element.image,
            });
          }
        }
      });
    });
  });
  return consultations;
};

const getConsultations = async () => {
  const doctors = await getDoctors();
  const patients = await getPatients();
  const querysnapshot = await db
    .collection(CONSULTATION_KEY)
    .orderBy("date", "desc")
    .get();
  const consultations = [];
  querysnapshot.forEach((document) => {
    doctors.forEach((element) => {
      patients.forEach((item) => {
        if (document.data().doctor === element.id) {
          if (document.data().patient === item.id) {
            consultations.push({
              id: document.id,
              date: document.data().date.toDate().toLocaleDateString(),
              time: format(document.data().time.toDate(), "p"),
              patient: `${item.firstName} ${item.lastName}`,
              patientImage: item.image,
              phone: item.phone,
              email: item.email,
              genderPatient: item.gender === 1 ? "Femenino" : "Masculino",
              birthdate: item.birthdate.toDate().toLocaleDateString(),
              doctor: `${element.firstName} ${element.lastName} `,
              state: document.data().state,
              type: document.data().type,
              doctorImage: element.image,
            });
          }
        }
      });
    });
  });
  return consultations;
};

const getDoctorConsultations = async (user) => {
  const doctors = await getDoctors();
  const patients = await getPatients();
  const querysnapshot = await db
    .collection(CONSULTATION_KEY)
    .orderBy("date", "desc")
    .get();
  const consultations = [];
  querysnapshot.forEach((document) => {
  
      patients.forEach((item) => {
        if (document.data().doctor === user.id) {
          if (document.data().patient === item.id) {
            consultations.push({
              id: document.id,
              reply: document.data().reply,
              date: `${format(document.data().date.toDate(), "d")} ${
                monthNames[document.data().date.toDate().getMonth()]
              } ${document.data().date.toDate().getFullYear()}`,
              reasonsConsultation: document.data().reasonsConsultation,
              historyDisease: document.data().historyDisease,
              time: format(document.data().time.toDate(), "p"),
              patient: `${item.firstName} ${item.lastName}`,
              patientImage: item.image,
              phone: item.phone,
              email: item.email,
              birthdate: item.birthdate.toDate().toLocaleDateString(),
              genderPatient: item.gender === 1 ? "Femenino" : "Masculino",
              locationDate: item.locationDate,
              identificationCard: item.identificationCard,
              adress: item.adress,
              maritalStatus: item.maritalStatus === 1
              ?
              "Solter@"
              :
              item.maritalStatus === 2
              ?
              "Casad@"
              :
              item.maritalStatus === 3
              ?
              "Viud@"
              :
              "Divorciad@",
              religion: item.religion === 1
              ?
              "Católico"
              :
              item.religion === 2
              ?
              "Mormón"
              :
              item.maritalStatus === 3
              ?
              "Evangélico"
              :
              item.maritalStatus === 4
              ?
              "Testigo de Jehová"
              :
              "Otro",
              ethnicGroup: item.ethnicGroup === 1
              ?
              "Mestizo"
              :
              item.ethnicGroup === 2
              ?
              "Miskito"
              :
              item.ethnicGroup === 3
              ?
              "Rama"
              :
              item.ethnicGroup === 4
              ?
              "Garífuna"
              :
              item.ethnicGroup === 5
              ?
              "Chorotega"
              :
              "Creole",
              doctor: `${user.firstName} ${user.lastName} `,
              state: document.data().state,
              type: document.data().type,
              stateDoctor: document.data().stateDoctor,
            });
          }
        }
      });
  
  });

  const groupDates = [];
  consultations.forEach((item, index) => {
    if (index < consultations.length - 1) {
      if (item.date !== consultations[index + 1].date) {
        groupDates.push({
          date: item.date,
        });
      }
    } else {
      groupDates.push({
        date: item.date,
      });
    }
  });

  const groupConsultations = [];
  groupDates.forEach((element) => {
    const array = [];
    consultations.forEach((item) => {
      if (element.date === item.date) {
        array.push({
          ...item,
        });
      }
    });
    groupConsultations.push({
      date: element.date,
      patients: array,
    });
  });
  return groupConsultations;
};

const getConsultationsByDate = async () => {
  const querysnapshot = await db
    .collection(CONSULTATION_KEY)
    .orderBy("date", "desc")
    .get();
  const dates = [];
  querysnapshot.forEach((document) => {
    dates.push({
      id: document.id,
      day: format(document.data().date.toDate(), "d"),
      month: monthNames[document.data().date.toDate().getMonth()],
      year: document.data().date.toDate().getFullYear(),
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
          day: item.day,
          month: item.month,
          year: item.year,
        });
      }
    } else {
      groupDates.push({
        id: item.id,
        day: item.day,
        month: item.month,
        year: item.year,
      });
    }
  });
  return groupDates;
};
const createConsulta = async (Consulta) => {
  await db.collection(CONSULTATION_KEY).doc().set(Consulta);
};

const updateConsultation = async (id, value) => {
  await db.collection(CONSULTATION_KEY).doc(id).update({
    "reply": value,
    "stateDoctor": 2
  });
}

export {
  getConsultationsUser,
  getConsultations,
  getConsultationsByDate,
  getDoctorConsultations,
  createConsulta,
  updateConsultation
};
