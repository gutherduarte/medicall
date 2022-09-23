import db from './config';
import { getSpeciality } from './speciality.data';
import { getEstablishment } from './establishment.data';

const DOCTORS_KEY = "Users";

const getDoctors = async () => {
  const specialities = await getSpeciality();
  const querysnapshot = await db.collection(DOCTORS_KEY)
  .orderBy("firstName")
  .where("type", "==", 2)
  .get();
  const doctors = [ ];
  querysnapshot.forEach(document => {
    specialities.forEach(item => {
      if (document.data().speciality === item.id){
        doctors.push({
          id: document.id,
          specialityName: item.name,
          ...document.data()
        });
      }
    });
  });
  return doctors;
}

const getDoctorsRanking = async () => {
  const specialities = await getSpeciality();
  const establishments = await getEstablishment();
  const querysnapshot = await db.collection(DOCTORS_KEY)
  .orderBy("Rating","desc")
  .get();
  const doctors = [ ];
  
   querysnapshot.forEach(document => {
    specialities.forEach(item => {
     establishments.forEach(element => {
       if ( document.data().type === 2 && document.data().speciality === item.id && 
            document.data().establishment === element.id ){
            doctors.push({
            id: document.id,
            specialityName: item.name,
            establishmentName: element.name,
            location: element.location,
            rating: document.data().Rating,
            ...document.data()
            });
          }
        });
      });
    });

  return doctors;
}

const getDoctorsById = async (id) => {
  const doctores = await getDoctors();
  const specialities = await getSpeciality();
  const establishments = await getEstablishment();
  const doctors = [];
  let firstQuery= undefined;
  let secondQuery= undefined;
  if(typeof id === "string"){

  }else if(id.hasOwnProperty("location")){
    secondQuery = await db.collection(DOCTORS_KEY).orderBy("Rating","desc").get();
  }else{
    firstQuery = await db.collection(DOCTORS_KEY).orderBy("Rating","desc").get();
  }

  if (firstQuery===undefined && secondQuery!==undefined) {
    secondQuery.forEach(document => {
      specialities.forEach(item => {
         console.log("hola")
          if (document.data().speciality === item.id){
            if (document.data().establishment === id.id){
              doctors.push({
              id: document.id,
              specialityName: item.name,
              establishmentName: id.name,
              location: id.location,
              rating:document.data().Rating,
              ...document.data()
            });
          }
        }

    });
  });
  }else if(firstQuery===undefined){
    doctores.forEach(document => {
     specialities.forEach(item => {
        establishments.forEach(element => {
          if (document.speciality === item.id 
              && document.establishment === element.id 
              ){
              if(document.firstName.includes(id)
              ||document.lastName.includes(id)){
                  doctors.push({
                  id: document.id,
                  specialityName: item.name,
                  establishmentName: element.name,
                  location: element.location,
                  rating:document.Rating,
                  ...document
              });
            }
          }
        });
      });
    });
  }
  else {
    firstQuery.forEach(document => {
   
        establishments.forEach(element => {
          if (document.data().speciality === id.id){
            if (document.data().establishment === element.id){
                doctors.push({
                id: document.id,
                specialityName: id.name,
                establishmentName: element.name,
                location: element.location,
                rating:document.data().Rating,
                ...document.data()
              });
            }
          }
        });
  
    });
  }
  return doctors;
}

export { getDoctors, getDoctorsById,getDoctorsRanking };
