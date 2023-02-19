import db from "./config";
import firebase from "./index";
import "firebase/auth";

const USER_KEY = "Users";

const queryUser = () => {
  return db.collection(USER_KEY);
};

export const selectUser = async (userId) => {
  const document = await queryUser()
    .doc(userId)
    .get();

  if (document.exists) {
    const user = {
      id: document.id,
      ...document.data(),
    };
    return user;
  } else {
    return null;
  }
};

export const currentUser = () => {
  const user = firebase.auth().currentUser;
  if (user) {
    return user;
  } else {
    return null;
  }
};

export const signIn = async (email, password) => {
  await firebase.auth().signInWithEmailAndPassword(email, password);
};

export const createUser = async (user) => {
  const { email, password } = user;
  const result = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  await queryUser()
    .doc(result.user.uid)
    .set(user);

  return result.user.uid;
};

export const signOut = async () => {
  await firebase.auth().signOut();
};

export const onAuthChanged = (response) => {
  firebase.auth().onAuthStateChanged(response);
};
