import db from "./config";

const PATIENTS_KEY = "Users";

const getPatients = async () => {
  const querysnapshot = await db
    .collection(PATIENTS_KEY)
    .orderBy("firstName")
    .where("type", "==", 1)
    .get();
  const patients = [];

  querysnapshot.forEach((document) => {
    patients.push({
      id: document.id,
      ...document.data(),
    });
  });
  return patients;
};

export default getPatients;
