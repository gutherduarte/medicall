import firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyBJ1p9hEKtKjQ1kzGm5D130wkTSCHCL7tc",
  authDomain: "medicall-3dced.firebaseapp.com",
  databaseURL: "https://medicall-3dced.firebaseio.com",
  projectId: "medicall-3dced",
  storageBucket: "medicall-3dced.appspot.com",
  messagingSenderId: "663908802543",
  appId: "1:663908802543:web:e29c12c7ca228d0f6a601a",
  measurementId: "G-VS7C38BVJL"
};

// Initialize Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;