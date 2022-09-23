import db from './config';
import { getDoctors } from "./doctors.data";

const RATING= "Doctor-Rating";

const getRatingDoctor = async (id) => {
  const querysnapshot = await db.collection(RATING).get();
    let rating=0;
    let i=0;
    let score=0; 
    querysnapshot.forEach(document => {
      if(document.data().doctor===id){
        i++;
         console.log(score)
        score = score+document.data().score;
        rating = score/i;
        console.log(score)
      }
    });
    console.log(rating,i,score)
    updateRatingDoctor(id,rating);
}
const updateRatingDoctor = async (id, rating) => {
  
   await db.collection("Users")
    .doc(id)
    .update({"Rating": parseInt(rating)
    });
}




const getRating = async () => {
  const querysnapshot = await db.collection(RATING).get();
  const rating = [];
  querysnapshot.forEach(document => {
    rating.push({
      id: document.id,
      ...document.data()
    });
  });
  return rating;
}
const getRatingDes = async () => {
  const querysnapshot = await db.collection(RATING).orderBy("score","desc").get();
  const rating = [];
  querysnapshot.forEach(document => {
    rating.push({
      id: document.id,
      ...document.data()
    });
  });
  return rating;
}
const updateRating = async (idPatient,idDoctor, value) => {
  const rating= await getRating();
  let id= "";
  rating.forEach(document => {
    if(document.patient===idPatient){
      if(document.doctor===idDoctor){
       id=document.id;
      }
    }
  })
   await db.collection(RATING)
    .doc(id)
    .update({"score": parseInt(value)
    });
}
const ratingExists = async (idPatient,idDoctor, value) => {
  const rating= await getRating();
  let exists= false;
  rating.forEach(document => {
    if(document.patient===idPatient){
      if(document.doctor===idDoctor){
       exists=true;
      }
    }
  })
  if(exists===true){
    setTimeout(() => {
      updateRating(idPatient,idDoctor, value);
     }, 0 | 2000);
  }else{
    await createRating({
        patient: idPatient,
        doctor: idDoctor,
        score:parseInt(value),
      })
  }
  setTimeout(() => {
    getRatingDoctor(idDoctor)
   }, 0 | 6000); 
  
}
const createRating = async (Rating) => {
  await db.collection(RATING).doc().set(Rating);
};
export { 
  createRating,
  getRating, 
  updateRating, 
  getRatingDes, 
  ratingExists,
  getRatingDoctor,
};