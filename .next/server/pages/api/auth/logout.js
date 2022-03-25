"use strict";
(() => {
var exports = {};
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 2509:
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 4917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3728);
/* harmony import */ var _declarations_enums_REST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4159);
/* harmony import */ var _controllers_api_handleError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8695);
/* harmony import */ var _controllers_api_validation_verifyToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(864);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6383);







// import nodemailer from 'nodemailer';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    var ref;
    try {
        await (0,_controllers_api_validation_verifyToken__WEBPACK_IMPORTED_MODULE_3__/* .verifyToken */ .W)(req);
    } catch (error) {
        (0,_controllers_api_handleError__WEBPACK_IMPORTED_MODULE_6__/* .handleError */ .S)(error, res);
    }
    switch((ref = req.method) === null || ref === void 0 ? void 0 : ref.toUpperCase()){
        case _declarations_enums_REST__WEBPACK_IMPORTED_MODULE_2__/* .REQUEST_METHODS.POST */ .W.POST:
            {
                try {
                    const { tokenUid  } = req.body;
                    await _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__/* .auth.revokeRefreshTokens */ .I8.revokeRefreshTokens(tokenUid);
                    (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)({
                        res
                    }, _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__/* .COOKIE_NAMES.TOKEN */ .HR.TOKEN, _utils_misc__WEBPACK_IMPORTED_MODULE_5__/* .defaultCookieOptions */ .Rd);
                    return res.status(200).json({
                        message: _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__/* .MESSAGES.LOGOUT_SUCCESS */ .X3.LOGOUT_SUCCESS
                    });
                } catch (error) {
                    (0,_controllers_api_handleError__WEBPACK_IMPORTED_MODULE_6__/* .handleError */ .S)(error, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [674,864], () => (__webpack_exec__(4917)));
module.exports = __webpack_exports__;

})();