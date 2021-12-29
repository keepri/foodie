export const getDeepKeys = (obj: any) => {
	let keys: string[] = [];

	for (let key in obj) {
		keys.push(key);

		if (Array.isArray(obj[key])) {
			(obj[key] as unknown as Array<any>).forEach(entry => {
				if (typeof entry === 'object') {
					keys = [...keys, ...getDeepKeys(entry)];
				}
			});
		}

		if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			keys = [...keys, ...getDeepKeys(obj[key])];
		}
	}

	return [...new Set(keys)];
};
