"use strict";
(() => {
var exports = {};
exports.id = 908;
exports.ids = [908];
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

/***/ 9539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3728);
/* harmony import */ var _declarations_enums_REST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4159);
/* harmony import */ var _controllers_api_handleError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8695);
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6383);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);






// import nodemailer from 'nodemailer';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    var ref;
    switch((ref = req.method) === null || ref === void 0 ? void 0 : ref.toUpperCase()){
        case _declarations_enums_REST__WEBPACK_IMPORTED_MODULE_2__/* .REQUEST_METHODS.POST */ .W.POST:
            {
                try {
                    const { token  } = req.body;
                    if (!token) return res.status(401).json({
                        message: _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__/* .MESSAGES.UNAUTHORIZED_NO_TOKEN */ .X3.UNAUTHORIZED_NO_TOKEN
                    });
                    // const sessionCookie = await auth.createSessionCookie(token, {expiresIn: 604800000}) // 604800000 = one week in milliseconds
                    const checkRevoked = true;
                    const { uid  } = await _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__/* .auth.verifyIdToken */ .I8.verifyIdToken(token, checkRevoked);
                    const userDoc = await _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__/* .firestore.collection */ .RZ.collection(_firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.CLIENTS */ .Ul.CLIENTS).doc(uid).get();
                    if (!userDoc.exists) {
                        await _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__/* .auth.revokeRefreshTokens */ .I8.revokeRefreshTokens(uid);
                        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)({
                            res
                        }, _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__/* .COOKIE_NAMES.TOKEN */ .HR.TOKEN);
                        return res.status(404).json({
                            message: _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__/* .MESSAGES.NOT_FOUND */ .X3.NOT_FOUND
                        });
                    }
                    const user = userDoc.data();
                    const tokenCookie = 'Bearer ' + token;
                    (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)({
                        res
                    }, _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__/* .COOKIE_NAMES.TOKEN */ .HR.TOKEN, tokenCookie, _utils_misc__WEBPACK_IMPORTED_MODULE_3__/* .defaultCookieOptions */ .Rd);
                    return res.status(200).json({
                        user,
                        message: _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__/* .MESSAGES.LOGIN_ACCOUNT_SUCCESS */ .X3.LOGIN_ACCOUNT_SUCCESS
                    });
                } catch (error) {
                    (0,_controllers_api_handleError__WEBPACK_IMPORTED_MODULE_5__/* .handleError */ .S)(error, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [674], () => (__webpack_exec__(9539)));
module.exports = __webpack_exports__;

})();