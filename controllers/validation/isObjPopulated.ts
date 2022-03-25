// DO NOT ASK... Not proud, but kinda proud. xD

export const isObjPopulated = (obj: object, exceptions?: string[]): boolean => {
	let isPopulated = true;

	for (const key in obj) {
		const object = obj as any;
		const objKeys =
			typeof object?.[key] === 'object' && !Array.isArray(object?.[key]) && Object.keys(object?.[key]);

		if (objKeys && objKeys?.length > 0) {
			const nestedObj = object?.[key];
			// console.log('nested obj:', nestedObj);

			for (let i = 0; i < objKeys.length; i++) {
				// console.log(
				//   'nested obj key:',
				//   objKeys[i],
				//   'value:',
				//   nestedObj?.[objKeys[i]],
				// );
				if (!nestedObj?.[objKeys[i]] || nestedObj?.[objKeys[i]]?.length === 0 || nestedObj?.[objKeys[i]] === '') {
					!exceptions?.some(field => field === objKeys[i]) && (isPopulated = false);
				}
			}
		} else if (!object?.[key] || object[key].length === 0 || object[key] === '') {
			!exceptions?.some(field => field === key) && (isPopulated = false);
		}
	}

	// console.log('done');
	return isPopulated;
};
