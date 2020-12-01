import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyANtmoCdY9ADDLCO0qTuPxxlZ0gF7qbWZA",
  authDomain: "maru-store-db.firebaseapp.com",
  databaseURL: "https://maru-store-db.firebaseio.com",
  projectId: "maru-store-db",
  storageBucket: "maru-store-db.appspot.com",
  messagingSenderId: "152523787457",
  appId: "1:152523787457:web:2c8d5069b8dc42d2795840",
  measurementId: "G-HFE82EKF55"
}

export const createUseProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;