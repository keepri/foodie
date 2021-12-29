import { getDeepKeys } from '#controllers/getDeepKeys';

type ReturnType = { isValid: boolean; errorFields: string[] };

export const objectContainsSameKeys = <T>(object1: Partial<T>, object2: T): ReturnType => {
	const object1Keys = getDeepKeys(object1);
	const object2Keys = getDeepKeys(object2);

	let isValid = true;
	const errorFields: string[] = [];

	object1Keys.forEach(key => {
		const exists = object2Keys.some(restaurantKey => restaurantKey === key);

		if (!exists) {
			isValid = false;
			errorFields.push(key);
		}
	});

	return { isValid, errorFields };
};
