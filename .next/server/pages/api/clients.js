"use strict";
(() => {
var exports = {};
exports.id = 338;
exports.ids = [338];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 2509:
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ 6484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ clients)
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
// EXTERNAL MODULE: ./utils/baseForms.ts
var baseForms = __webpack_require__(6286);
// EXTERNAL MODULE: ./controllers/api/validation/objectContainsSameKeys.ts + 1 modules
var objectContainsSameKeys = __webpack_require__(9199);
// EXTERNAL MODULE: ./controllers/api/validation/verifyToken.ts + 1 modules
var verifyToken = __webpack_require__(864);
;// CONCATENATED MODULE: ./controllers/api/validation/routes/clientRouteValidation.ts



// import { isSameUser } from '../isSameUser';



const clientRouteValidation = async (req)=>{
    // BYPASS FOR ROUTES THAT ARE NOT IMPLEMENTED
    if (req.method === REST/* REQUEST_METHODS.GET */.W.GET) return;
    // ROUTE SECURITY
    try {
        await (0,verifyToken/* verifyToken */.W)(req);
    } catch (error) {
        throw error;
    }
    if (req.method === REST/* REQUEST_METHODS.POST */.W.POST) {
    // const tokenUid = req.body.tokenUid;
    // try {
    // 	isSameUser(req, res, tokenUid);
    // } catch (error) {
    // 	throw error;
    // }
    }
    // TEST MANDATORY FIELDS "PATCH", "PUT" & CHECK FIELDS SENT TO BE WHAT WE ACCEPT IN THE SCHEMA
    if (req.method === REST/* REQUEST_METHODS.PATCH */.W.PATCH || req.method === REST/* REQUEST_METHODS.PUT */.W.PUT) {
        const { data  } = req.body;
        if (!data) {
            // res.status(400).json({ message: MESSAGES.CLIENTS_MANDATORY_FIELDS_DATA });
            throw Error(enums/* MESSAGES.CLIENTS_MANDATORY_FIELDS_DATA */.X3.CLIENTS_MANDATORY_FIELDS_DATA);
        }
        const { isValid , errorFields  } = (0,objectContainsSameKeys/* objectContainsSameKeys */.G)(data, baseForms/* baseClient */.nF);
        if (!isValid) {
            // res.status(400).json({ message: MESSAGES.ERROR, errorFields });
            throw Error(enums/* MESSAGES.ERROR */.X3.ERROR + errorFields);
        }
    }
};

;// CONCATENATED MODULE: ./pages/api/clients/index.ts






/* harmony default export */ const clients = (async (req, res)=>{
    var ref;
    // INITIAL ROUTE VERIFICATIONS
    try {
        await (0,useCors/* useCors */.m)(req, res);
        await clientRouteValidation(req);
    } catch (error) {
        (0,handleError/* handleError */.S)(error, res);
    }
    switch((ref = req.method) === null || ref === void 0 ? void 0 : ref.toUpperCase()){
        // GET
        case REST/* REQUEST_METHODS.POST */.W.POST:
            {
                try {
                    const { tokenUid  } = req.body;
                    const clientDoc = await initServerApp/* firestore.collection */.RZ.collection(enums/* COLLECTIONS.CLIENTS */.Ul.CLIENTS).doc(tokenUid).get();
                    if (!clientDoc.exists) return res.status(404).json({
                        message: enums/* MESSAGES.NOT_FOUND */.X3.NOT_FOUND
                    });
                    const client = clientDoc.data();
                    return res.status(200).json({
                        client
                    });
                } catch (error) {
                    (0,handleError/* handleError */.S)(error, res);
                }
                break;
            }
        // PATCH
        case REST/* REQUEST_METHODS.PATCH */.W.PATCH:
            {
                try {
                    const { data , tokenUid  } = req.body;
                    const clientDoc = initServerApp/* firestore.collection */.RZ.collection(enums/* COLLECTIONS.CLIENTS */.Ul.CLIENTS).doc(tokenUid);
                    if (!(await clientDoc.get()).exists) return res.status(404).json({
                        message: enums/* MESSAGES.NOT_FOUND */.X3.NOT_FOUND
                    });
                    await clientDoc.update(data);
                    const client = (await clientDoc.get()).data();
                    return res.status(200).json({
                        client
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
                    const { data , tokenUid  } = req.body;
                    const clientDoc = initServerApp/* firestore.collection */.RZ.collection(enums/* COLLECTIONS.CLIENTS */.Ul.CLIENTS).doc(tokenUid);
                    if (!(await clientDoc.get()).exists) return res.status(404).json({
                        message: enums/* MESSAGES.NOT_FOUND */.X3.NOT_FOUND
                    });
                    await clientDoc.set(data);
                    const client = (await clientDoc.get()).data();
                    return res.status(200).json({
                        client
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
var __webpack_exports__ = __webpack_require__.X(0, [674,864,649], () => (__webpack_exec__(6484)));
module.exports = __webpack_exports__;

})();