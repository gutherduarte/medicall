import db from './config';
import { getDoctors } from './doctors.data';

const SPECIALTY_KEY = "Specialities";

const getSpeciality = async () => {
  const querysnapshot = await db.collection(SPECIALTY_KEY).orderBy("name").get();
  const specialities = [];
  querysnapshot.forEach(document => {
    specialities.push({
      id: document.id,
      ...document.data()
    });
  });
  return specialities;
}


const getSpecialities = async () => {
  const querysnapshot = await db.collection(SPECIALTY_KEY).orderBy("name").get();
  const doctors = await getDoctors();
  const specialities = [];
  querysnapshot.forEach(document => {
    let doctorsQuantity = 0;
    doctors.forEach(item => {
      if (document.id === item.speciality){
        doctorsQuantity = doctorsQuantity + 1;
      }
    });
    specialities.push({
      id: document.id,
      doctorsQuantity: doctorsQuantity,
      ...document.data()
    });
  });
  return specialities;
}

export { getSpecialities, getSpeciality };
