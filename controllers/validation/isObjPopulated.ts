// DO NOT ASK... Not proud, but kinda proud. xD

export const isObjPopulated = (obj: object, exceptions?: string[]): boolean => {
  let isPopulated = true;

  for (const key in obj) {
    const objKeys =
      typeof obj?.[key] === 'object' &&
      !Array.isArray(obj?.[key]) &&
      Object.keys(obj?.[key]);

    if (objKeys && objKeys?.length > 0) {
      const nestedObj = obj?.[key];
      // console.log('nested obj:', nestedObj);

      for (let i = 0; i < objKeys.length; i++) {
        // console.log(
        //   'nested obj key:',
        //   objKeys[i],
        //   'value:',
        //   nestedObj?.[objKeys[i]],
        // );
        if (
          !nestedObj?.[objKeys[i]] ||
          nestedObj?.[objKeys[i]]?.length === 0 ||
          nestedObj?.[objKeys[i]] === ''
        ) {
          !exceptions?.some(field => field === objKeys[i]) &&
            (isPopulated = false);
        }
      }
    } else if (!obj?.[key] || obj[key].length === 0 || obj[key] === '') {
      !exceptions?.some(field => field === key) && (isPopulated = false);
    }
  }

  // console.log('done');
  return isPopulated;
};
