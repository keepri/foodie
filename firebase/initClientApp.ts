import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string),
	authDomain: JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string),
	projectId: JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string),
	storageBucket: JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string),
	messagingSenderId: JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string),
	appId: JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string),
	measurementId: JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID as string),
};

// init firebase
if (!getApps().length) initializeApp(firebaseConfig);

// firebase refs
const firestoreRef = getFirestore();
const authRef = getAuth();
const storageRef = getStorage();

export { authRef, firestoreRef, storageRef };
