"use strict";
(() => {
var exports = {};
exports.id = 259;
exports.ids = [259];
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

/***/ 4364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _declarations_enums_REST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4159);
/* harmony import */ var _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(167);
/* harmony import */ var _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3728);
/* harmony import */ var _controllers_api_handleError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8695);
/* harmony import */ var _controllers_api_middleware_useCors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1777);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    var ref;
    // INITIAL ROUTE VERIFICATIONS
    try {
        await (0,_controllers_api_middleware_useCors__WEBPACK_IMPORTED_MODULE_3__/* .useCors */ .m)(req, res);
    } catch (error) {
        (0,_controllers_api_handleError__WEBPACK_IMPORTED_MODULE_4__/* .handleError */ .S)(error, res);
    }
    switch((ref = req.method) === null || ref === void 0 ? void 0 : ref.toUpperCase()){
        // GET
        case _declarations_enums_REST__WEBPACK_IMPORTED_MODULE_0__/* .REQUEST_METHODS.GET */ .W.GET:
            {
                try {
                    const { uid  } = req.query;
                    if (!uid) return res.status(401).json({
                        message: _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_1__/* .MESSAGES.MENUS_MDANDATORY_FIELDS_UID */ .X3.MENUS_MDANDATORY_FIELDS_UID
                    });
                    const menuDoc = await _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_2__/* .firestore.collection */ .RZ.collection(_firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_1__/* .COLLECTIONS.MENUS */ .Ul.MENUS).doc(uid).get();
                    if (!menuDoc.exists) return res.status(404).json({
                        message: _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_1__/* .MESSAGES.NOT_FOUND */ .X3.NOT_FOUND
                    });
                    const menu = menuDoc.data();
                    return res.status(200).json({
                        menu
                    });
                } catch (error) {
                    (0,_controllers_api_handleError__WEBPACK_IMPORTED_MODULE_4__/* .handleError */ .S)(error, res);
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [674], () => (__webpack_exec__(4364)));
module.exports = __webpack_exports__;

})();