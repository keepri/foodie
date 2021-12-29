import { auth } from '#firebase/initServerApp';

interface VerifyTokenResult {
	uid: string;
}

export { verifyToken };

const verifyToken = async (token: string) => {
	const result: VerifyTokenResult = { uid: '' };
	const checkRevoked = true;
	const tokenSplit = token.split(' ');

	if (tokenSplit?.[0] !== 'Foodie') return result;
	if (!tokenSplit?.[1]) return result;

	try {
		const { uid } = await auth.verifyIdToken(tokenSplit?.[1], checkRevoked);

		if (uid) result.uid = uid;
	} catch (error) {
		console.warn('Unsuccessful token verification!');
		throw error;
	}

	return result;
};
