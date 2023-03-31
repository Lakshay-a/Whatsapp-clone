import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJCa9AOOz-Nows96oOmeNenI8TkQojm9c",
  authDomain: "whatsapp-clone-ce849.firebaseapp.com",
  projectId: "whatsapp-clone-ce849",
  storageBucket: "whatsapp-clone-ce849.appspot.com",
  messagingSenderId: "667042848218",
  appId: "1:667042848218:web:68b09b049ff67010f5b4e3",
  measurementId: "G-0KNN11L77L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;