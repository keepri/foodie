import { HelloData } from '#pages/api/hello';

export const baseUrl =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3000'
		: 'http://localhost:3000';

export enum ApiUrls {
	hello = '/api/hello',
}

export const fetcher = {
	get: async (url: ApiUrls, config?: RequestInit) => {
		try {
			const res = await fetch(`${baseUrl}${url}`, config);

			if (res) {
				if (url === ApiUrls.hello)
					return { ...res, data: await res.json<HelloData>() };
			}

			return { ...res, data: null };
		} catch (err) {
			console.warn('Fetcher failed with:', err);
			throw err;
		}
	},
};
