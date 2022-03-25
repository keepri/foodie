"use strict";
(() => {
var exports = {};
exports.id = 622;
exports.ids = [622];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 2509:
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

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

/***/ 1548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ restaurants)
});

// EXTERNAL MODULE: ./utils/declarations/enums/REST.ts
var REST = __webpack_require__(4159);
// EXTERNAL MODULE: ./firebase/declarations/enums.ts
var enums = __webpack_require__(167);
// EXTERNAL MODULE: ./firebase/initServerApp.ts
var initServerApp = __webpack_require__(3728);
// EXTERNAL MODULE: ./controllers/api/handleError.ts
var handleError = __webpack_require__(8695);
// EXTERNAL MODULE: ./controllers/api/middleware/useCors.ts + 1 modules
var useCors = __webpack_require__(1777);
// EXTERNAL MODULE: ./controllers/api/validation/verifyToken.ts + 1 modules
var verifyToken = __webpack_require__(864);
;// CONCATENATED MODULE: ./controllers/api/validation/routes/restaurantRouteValidation.ts



// import { isSameUser } from '../isSameUser';


const restaurantRouteValidation = async (req, res)=>{
    // BYPASS FOR ROUTES THAT ARE NOT IMPLEMENTED
    if (req.method === REST/* REQUEST_METHODS.POST */.W.POST || req.method === REST/* REQUEST_METHODS.GET */.W.GET) return;
    if (req.method === REST/* REQUEST_METHODS.PATCH */.W.PATCH || req.method === REST/* REQUEST_METHODS.PUT */.W.PUT) {
        try {
            await (0,verifyToken/* verifyToken */.W)(req);
        // const { tokenUid } = req.body;
        // isSameUser(req, res, tokenUid);
        } catch (error) {
            (0,handleError/* handleError */.S)(error, res);
        }
        const { uid , data  } = req.body;
        if (!uid || !data) {
            // res.status(400).json({ message: MESSAGES.RESTAURANTS_MANDATORY_FIELDS_ALL });
            throw Error(enums/* MESSAGES.RESTAURANTS_MANDATORY_FIELDS_ALL */.X3.RESTAURANTS_MANDATORY_FIELDS_ALL);
        }
    }
    // TEST MANDATORY FIELDS FOR DELETE ROUTE
    if (req.method === REST/* REQUEST_METHODS.DELETE */.W.DELETE) {
        const { uid  } = req.body;
        if (!uid) {
            // res.status(400).json({ message: MESSAGES.RESTAURANTS_MANDATORY_FIELDS_UID });
            throw Error(enums/* MESSAGES.RESTAURANTS_MANDATORY_FIELDS_UID */.X3.RESTAURANTS_MANDATORY_FIELDS_UID);
        }
    }
};

;// CONCATENATED MODULE: ./pages/api/restaurants/index.ts






/* harmony default export */ const restaurants = (async (req, res)=>{
    var ref;
    // INITIAL ROUTE VERIFICATIONS
    try {
        await (0,useCors/* useCors */.m)(req, res);
        await restaurantRouteValidation(req, res);
    } catch (error) {
        (0,handleError/* handleError */.S)(error, res);
    }
    switch((ref = req.method) === null || ref === void 0 ? void 0 : ref.toUpperCase()){
        // GET
        case REST/* REQUEST_METHODS.GET */.W.GET:
            {
                try {
                    const restaurantsCol = await initServerApp/* firestore.collection */.RZ.collection(enums/* COLLECTIONS.RESTAURANTS */.Ul.RESTAURANTS).get();
                    const restaurants = restaurantsCol.docs.map((doc)=>doc.data()
                    );
                    return res.status(200).json({
                        restaurants
                    });
                } catch (error) {
                    (0,handleError/* handleError */.S)(error, res);
                }
                break;
            }
        // POST
        // case REQUEST_METHODS.POST: {
        // 	try {
        // 		const { data } = req.body as RestaurantsRequestBody;
        // 		if (!data) return res.status(401).json({ message: 'Wrong' });
        // 		const restaurantDoc = firestore.collection(COLLECTIONS.RESTAURANTS).doc();
        // 		const restaurantUid = restaurantDoc.id;
        // 		data.uid = restaurantUid;
        // 		await restaurantDoc.set(data as RestaurantSchema);
        // 		return res.status(200).json({ message: MESSAGES.SUCCESS });
        // 	} catch (error) {
        // 		handleError(error, res);
        // 	}
        // 	break;
        // }
        // PATCH
        case REST/* REQUEST_METHODS.PATCH */.W.PATCH:
            {
                try {
                    const { uid , data  } = req.body;
                    const restaurantDoc = initServerApp/* firestore.collection */.RZ.collection(enums/* COLLECTIONS.RESTAURANTS */.Ul.RESTAURANTS).doc(uid);
                    if (!(await restaurantDoc.get()).exists) return res.status(404).json({
                        message: enums/* MESSAGES.NOT_FOUND */.X3.NOT_FOUND
                    });
                    await restaurantDoc.update(data);
                    const restaurant = (await restaurantDoc.get()).data();
                    return res.status(200).json({
                        restaurant
                    });
                } catch (error) {
                    (0,handleError/* handleError */.S)(error, res);
                }
                break;
            }
        // PUT
        case REST/* REQUEST_METHODS.PUT */.W.PUT:
            {
                try {
                    const { uid , data  } = req.body;
                    const restaurantDoc = initServerApp/* firestore.collection */.RZ.collection(enums/* COLLECTIONS.RESTAURANTS */.Ul.RESTAURANTS).doc(uid);
                    if (!(await restaurantDoc.get()).exists) return res.status(404).json({
                        message: enums/* MESSAGES.NOT_FOUND */.X3.NOT_FOUND
                    });
                    data && (data.uid = restaurantDoc.id);
                    await restaurantDoc.set(data);
                    const restaurant = (await restaurantDoc.get()).data();
                    return res.status(200).json({
                        restaurant
                    });
                } catch (error) {
                    (0,handleError/* handleError */.S)(error, res);
                }
                break;
            }
        // DELETE
        case REST/* REQUEST_METHODS.DELETE */.W.DELETE:
            {
                try {
                    const { uid  } = req.body;
                    const restaurantDoc = initServerApp/* firestore.collection */.RZ.collection(enums/* COLLECTIONS.RESTAURANTS */.Ul.RESTAURANTS).doc(uid);
                    if (!(await restaurantDoc.get()).exists) return res.status(404).json({
                        message: enums/* MESSAGES.NOT_FOUND */.X3.NOT_FOUND
                    });
                    await restaurantDoc.delete();
                    return res.status(200).json({
                        message: enums/* MESSAGES.SUCCESS */.X3.SUCCESS
                    });
                } catch (error) {
                    (0,handleError/* handleError */.S)(error, res);
                }
                break;
            }
        default:
            return res.status(405).json({
                message: `Method "${req.method}" not allowed!`
            });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [674,864], () => (__webpack_exec__(1548)));
module.exports = __webpack_exports__;

})();