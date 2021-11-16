import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCjgVHY314XDzodJqEAwcqgfPgZxpgW3Go",
  authDomain: "signuser-cdf8e.firebaseapp.com",
  projectId: "signuser-cdf8e",
  storageBucket: "signuser-cdf8e.appspot.com",
  messagingSenderId: "527570223802",
  appId: "1:527570223802:web:351d8a036c7e583d2d3883"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
