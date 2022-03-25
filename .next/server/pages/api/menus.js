"use strict";
(() => {
var exports = {};
exports.id = 879;
exports.ids = [879];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 2509:
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ 8747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ menus)
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
;// CONCATENATED MODULE: ./controllers/api/validation/routes/menuRouteValidation.ts






const menuRouteValidation = async (req)=>{
    // BYPASS FOR ROUTES THAT ARE NOT IMPLEMENTED
    if (req.method === REST/* REQUEST_METHODS.DELETE */.W.DELETE || req.method === REST/* REQUEST_METHODS.GET */.W.GET) return;
    // TEST MANDATORY FIELDS "POST" & CHECK FIELDS SENT TO BE WHAT WE ACCEPT IN THE SCHEMA
    if (req.method === REST/* REQUEST_METHODS.POST */.W.POST || req.method === REST/* REQUEST_METHODS.PUT */.W.PUT || req.method === REST/* REQUEST_METHODS.PATCH */.W.PATCH) {
        try {
            await (0,verifyToken/* verifyToken */.W)(req);
            const { data  } = req.body;
            if (!data) {
                // res.status(400).json({ message: MESSAGES.MENUS_MDANDATORY_FIELDS_DATA });
                throw Error(enums/* MESSAGES.MENUS_MDANDATORY_FIELDS_DATA */.X3.MENUS_MDANDATORY_FIELDS_DATA);
            }
            const { isValid , errorFields  } = (0,objectContainsSameKeys/* objectContainsSameKeys */.G)(data, baseForms/* baseMenu */.V3);
            if (!isValid) {
                // res.status(400).json({ message: MESSAGES.ERROR, errorFields });
                throw Error(enums/* MESSAGES.ERROR */.X3.ERROR + errorFields);
            }
        } catch (error) {
            throw error;
        }
    }
};

;// CONCATENATED MODULE: ./pages/api/menus/index.ts






/* harmony default export */ const menus = (async (req, res)=>{
    var ref;
    // INITIAL ROUTE VERIFICATIONS
    try {
        await (0,useCors/* useCors */.m)(req, res);
        await menuRouteValidation(req);
    } catch (error) {
        (0,handleError/* handleError */.S)(error, res);
    }
    switch((ref = req.method) === null || ref === void 0 ? void 0 : ref.toUpperCase()){
        // PATCH
        case REST/* REQUEST_METHODS.PATCH */.W.PATCH:
            {
                try {
                    const { data , tokenUid  } = req.body;
                    const menuDoc = initServerApp/* firestore.collection */.RZ.collection(enums/* COLLECTIONS.MENUS */.Ul.MENUS).doc(tokenUid);
                    if (!(await menuDoc.get()).exists) return res.status(404).json({
                        message: enums/* MESSAGES.NOT_FOUND */.X3.NOT_FOUND
                    });
                    await menuDoc.update(data);
                    const menu = (await menuDoc.get()).data();
                    return res.status(200).json({
                        menu
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
                    const menuDoc = initServerApp/* firestore.collection */.RZ.collection(enums/* COLLECTIONS.MENUS */.Ul.MENUS).doc(tokenUid);
                    if (!(await menuDoc.get()).exists) return res.status(404).json({
                        message: enums/* MESSAGES.NOT_FOUND */.X3.NOT_FOUND
                    });
                    await menuDoc.set(data);
                    const menu = (await menuDoc.get()).data();
                    return res.status(200).json({
                        menu
                    });
                } catch (error) {
                    (0,handleError/* handleError */.S)(error, res);
                }
                break;
            }
        // POST
        case REST/* REQUEST_METHODS.POST */.W.POST:
            {
                try {
                    const { data , tokenUid  } = req.body;
                    const menuDoc = initServerApp/* firestore.collection */.RZ.collection(enums/* COLLECTIONS.MENUS */.Ul.MENUS).doc(tokenUid);
                    await menuDoc.set(data);
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
var __webpack_exports__ = __webpack_require__.X(0, [674,864,649], () => (__webpack_exec__(8747)));
module.exports = __webpack_exports__;

})();