import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDh8jzT_aqjFSMXblgfUvaONVpo8H0GYv4',
	authDomain: 'foodie-55977.firebaseapp.com',
	projectId: 'foodie-55977',
	storageBucket: 'foodie-55977.appspot.com',
	messagingSenderId: '155703867126',
	appId: '1:155703867126:web:ca5e81e97ac95dc9565ed7',
	measurementId: 'G-F3MCGXRK3V',
};

// init firebase
if (!getApps().length) initializeApp(firebaseConfig);

// db ref
export const db = getFirestore();
