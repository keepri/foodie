import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDh8jzT_aqjFSMXblgfUvaONVpo8H0GYv4',
	authDomain: 'foodie-55977.firebaseapp.com',
	projectId: 'foodie-55977',
	storageBucket: 'foodie-55977.appspot.com',
	messagingSenderId: '155703867126',
	appId: '1:155703867126:web:ca5e81e97ac95dc9565ed7',
	measurementId: 'G-F3MCGXRK3V',
};

const app = initializeApp(firebaseConfig);

console.log(app);
