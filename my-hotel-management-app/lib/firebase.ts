import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBbJK4RKucHk77YLA4AeGZTQ1QTt11v1qA",
  authDomain: "hotel-management-76ba5.firebaseapp.com",
  projectId: "hotel-management-76ba5",
  storageBucket: "hotel-management-76ba5.appspot.com",
  messagingSenderId: "955030802766",
  appId: "1:955030802766:web:942bdb47f6ff347ecb8e1f"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export { firestore };