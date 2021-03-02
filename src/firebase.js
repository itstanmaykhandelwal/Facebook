import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCg_D39NjgXHlvBYVrUO7qvHHX2oONr2Kk",
    authDomain: "facebook-clone-4b4d0.firebaseapp.com",
    projectId: "facebook-clone-4b4d0",
    storageBucket: "facebook-clone-4b4d0.appspot.com",
    messagingSenderId: "247365171893",
    appId: "1:247365171893:web:836743cbe920b32f49dcfc",
    measurementId: "G-5GWVD362PQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider} 
  export default db