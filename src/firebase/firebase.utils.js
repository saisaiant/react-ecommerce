import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA0zKUD0AaI1ObS4bkGQ__jXZCmW9nVfBY",
  authDomain: "crwn-db-16e3d.firebaseapp.com",
  databaseURL: "https://crwn-db-16e3d.firebaseio.com",
  projectId: "crwn-db-16e3d",
  storageBucket: "crwn-db-16e3d.appspot.com",
  messagingSenderId: "912224367649",
  appId: "1:912224367649:web:4612e81ccfdde26ddb5f60",
  measurementId: "G-S9ZNYWJ7LW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
