"use strict";
(() => {
var exports = {};
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 2509:
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ 1333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3728);
/* harmony import */ var _declarations_enums_REST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4159);
/* harmony import */ var _controllers_api_handleError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8695);
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6383);





// import nodemailer from 'nodemailer';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    var ref;
    switch((ref = req.method) === null || ref === void 0 ? void 0 : ref.toUpperCase()){
        case _declarations_enums_REST__WEBPACK_IMPORTED_MODULE_2__/* .REQUEST_METHODS.POST */ .W.POST:
            {
                try {
                    const { email , password , name , phone  } = req.body;
                    const actionCodeSettings = {
                        url: _utils_misc__WEBPACK_IMPORTED_MODULE_3__/* .URLS.LOGIN */ .ns.LOGIN
                    };
                    const user = await _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__/* .auth.createUser */ .I8.createUser({
                        email,
                        password
                    });
                    if (!user) return res.status(500).json({
                        message: _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__/* .MESSAGES.CREATE_ACCOUNT_ERROR */ .X3.CREATE_ACCOUNT_ERROR
                    });
                    const newUserInfo = {
                        name,
                        phone,
                        orders: []
                    };
                    await _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__/* .firestore.collection */ .RZ.collection(_firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.CLIENTS */ .Ul.CLIENTS).doc(user.uid).create(newUserInfo);
                    const verificationEmail = await _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__/* .auth.generateEmailVerificationLink */ .I8.generateEmailVerificationLink(email, actionCodeSettings);
                    if (!verificationEmail) return res.status(500).json({
                        message: _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__/* .MESSAGES.VERIF_EMAIL_ERROR */ .X3.VERIF_EMAIL_ERROR
                    });
                    return res.status(200).json({
                        user,
                        verificationEmail,
                        message: _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__/* .MESSAGES.CREATE_ACCOUNT_SUCCESS */ .X3.CREATE_ACCOUNT_SUCCESS
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
var __webpack_exports__ = __webpack_require__.X(0, [674], () => (__webpack_exec__(1333)));
module.exports = __webpack_exports__;

})();