import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAz5MOdcYc-V56Gx4iOPyJhPre5mdKrbFk",
  authDomain: "create-hooks-blog-609a1.firebaseapp.com",
  projectId: "create-hooks-blog-609a1",
  storageBucket: "create-hooks-blog-609a1.appspot.com",
  messagingSenderId: "484509368688",
  appId: "1:484509368688:web:9116bbc327f22a60d04fb5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
