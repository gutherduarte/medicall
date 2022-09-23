import db from './config';
import { getDoctors } from './doctors.data';

const ESTABLISHMENT_KEY = "Establishments";

const getEstablishment = async () => {
  const querysnapshot = await db.collection(ESTABLISHMENT_KEY).orderBy("name").get();
  const doctors = await getDoctors();
  const establishment = [ ];
  querysnapshot.forEach(document => {
    let doctorsQuantity = 0;
    doctors.forEach(item => {
      if (document.id === item.establishment){
        doctorsQuantity = doctorsQuantity + 1;
      }
    });
    establishment.push({
      id: document.id,
      doctorsQuantity: doctorsQuantity,
      ...document.data()
    });
  });
  return establishment;
}

export { getEstablishment };
