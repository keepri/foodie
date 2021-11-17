export const fetcher = async (url: string) => {
	const baseUrl =
		process.env.NODE_ENV === 'development'
			? 'http://localhost:3000'
			: 'http://localhost:3000';

	try {
		const res = await fetch(`${baseUrl}${url}`);

		if (res) return res.json();
	} catch (err) {
		console.warn('Fetcher failed with:', err);
		throw err;
	}
};
