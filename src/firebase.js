import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfjhGZ-6Pbs0YEi1fUvRcAAJg3YtvrK34",
  authDomain: "edumart-14023.firebaseapp.com",
  databaseURL: "https://edumart-14023-default-rtdb.firebaseio.com",
  projectId: "edumart-14023",
  storageBucket: "edumart-14023.appspot.com",
  messagingSenderId: "561385383735",
  appId: "1:561385383735:web:c6da4f2e3d94e303bf5cb2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
