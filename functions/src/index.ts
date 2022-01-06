import { https, logger } from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = https.onRequest((_, res) => {
	logger.info('Hello logs!', { structuredData: true });
	res.status(200).json({ msg: 'Hello from Firebase!' });
});
