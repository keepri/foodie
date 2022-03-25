"use strict";
exports.id = 649;
exports.ids = [649];
exports.modules = {

/***/ 1777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* binding */ useCors)
});

// EXTERNAL MODULE: ./utils/misc.ts + 2 modules
var misc = __webpack_require__(6383);
;// CONCATENATED MODULE: ./controllers/api/runMiddleware.ts

const runMiddleware = (req, res, fn)=>{
    return new Promise((resolve, reject)=>{
        fn(req, res, (result)=>{
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
};

;// CONCATENATED MODULE: ./controllers/api/middleware/useCors.ts



const useCors = async (req, res)=>{
    await runMiddleware(req, res, misc/* cors */.D0);
};


/***/ }),

/***/ 9199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* binding */ objectContainsSameKeys)
});

;// CONCATENATED MODULE: ./controllers/getDeepKeys.ts
const getDeepKeys = (obj)=>{
    let keys = [];
    for(let key in obj){
        keys.push(key);
        if (Array.isArray(obj[key])) {
            obj[key].forEach((entry)=>{
                if (typeof entry === 'object') {
                    keys = [
                        ...keys,
                        ...getDeepKeys(entry)
                    ];
                }
            });
        }
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            keys = [
                ...keys,
                ...getDeepKeys(obj[key])
            ];
        }
    }
    return [
        ...new Set(keys)
    ];
};

;// CONCATENATED MODULE: ./controllers/api/validation/objectContainsSameKeys.ts

const objectContainsSameKeys = (object1, object2, omit)=>{
    const object1Keys = getDeepKeys(object1);
    const object2Keys = getDeepKeys(object2);
    const errors = [];
    let isValid = true;
    const errorFields = [];
    // (omit && omit.some(field => field === obj2key))
    object2Keys.forEach((obj2key)=>{
        const exists = object1Keys.includes(obj2key) || (omit === null || omit === void 0 ? void 0 : omit.includes(obj2key));
        if (!exists) {
            isValid = false;
            errors.push(`${obj2key}`);
            errorFields.push(obj2key);
        }
    });
    errors.length > 0 && console.warn('Missing fields:', errors);
    return {
        isValid,
        errorFields
    };
};


/***/ })

};
;