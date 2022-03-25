import { firebaseConfig } from '#utils/misc';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// init firebase
if (!getApps().length) initializeApp(firebaseConfig);

// firebase refs
const firestoreRef = getFirestore();
const authRef = getAuth();
const storageRef = getStorage();

export { authRef, firestoreRef, storageRef };
