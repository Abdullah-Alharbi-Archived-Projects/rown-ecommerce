import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import firebaseConfig from "./config"; // this is an object from https://console.firebase.google.com/

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return undefined;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnapShot = await userRef.get();

  if (!userSnapShot.exists) {
    // create user profile in firestore
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("Unable to create user profile.", error);
    }
  }

  return userRef;
};

export default firebase;
