import admin from 'firebase-admin';

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert({
			projectId: JSON.parse(process.env.FIREBASE_PROJECT_ID as string),
			privateKey: JSON.parse(process.env.FIREBASE_PRIVATE_KEY as string),
			clientEmail: JSON.parse(process.env.FIREBASE_CLIENT_EMAIL as string),
		}),
	});
}

const firestore = admin.firestore();
const auth = admin.auth();
const storage = admin.storage();

export { firestore, auth, storage };
