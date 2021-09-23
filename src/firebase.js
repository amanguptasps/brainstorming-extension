// import firebase from "firebase/compat/app"

// firebase.initializeApp(firebaseConfig)

export default firebase

import firebase from "firebase"
// import { firebaseConfig } from '';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth
export const db = firebase.database()
export const myStorage = firebase.storage()
export const firestoreDB = firebase.firestore()

export const checkCurrentUser = () => {
  return firebase.auth().currentUser
}

export const signInWithCustomToken = (token) => {
  firebase
    .auth()
    .signInWithCustomToken(token)
    .then((res) => {
      return res
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}
