import { getDeepKeys } from '#controllers/getDeepKeys';

type ReturnType = { isValid: boolean; errorFields: string[] };

export const objectContainsSameKeys = <T>(object1: Partial<T>, object2: T, omit?: string[]): ReturnType => {
	const object1Keys = getDeepKeys(object1);
	const object2Keys = getDeepKeys(object2);
	const errors: string[] = [];

	let isValid = true;
	const errorFields: string[] = [];

	// (omit && omit.some(field => field === obj2key))
	object2Keys.forEach(obj2key => {
		const exists = object1Keys.includes(obj2key) || omit?.includes(obj2key);

		if (!exists) {
			isValid = false;
			errors.push(`${obj2key}`);
			errorFields.push(obj2key);
		}
	});

	errors.length > 0 && console.warn('Missing fields:', errors);

	return { isValid, errorFields };
};
