import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    apiKey: "AIzaSyAiZDNSC_LSxf1-azjziDlI6jutFS1DNWc",
    authDomain: "appid-1d56d.firebaseapp.com",
    projectId: "appid-1d56d",
    storageBucket: "appid-1d56d.appspot.com",
    messagingSenderId: "947495301271",
    appId: "1:947495301271:web:9ca797736330ca671d39d2",
    measurementId: "G-B9WNK4GWX6"

};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, firstName, lastName, photoURL } = user;
    try {
      await userRef.set({
        firstName,
        lastName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
}
