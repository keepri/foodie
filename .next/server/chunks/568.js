exports.id = 568;
exports.ids = [568];
exports.modules = {

/***/ 7333:
/***/ ((module) => {

// Exports
module.exports = {
	"checkbox": "Checkbox_checkbox__exCc_"
};


/***/ }),

/***/ 6488:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "Input_input__lvORT",
	"label": "Input_label__CWIqo"
};


/***/ }),

/***/ 5232:
/***/ ((module) => {

// Exports
module.exports = {
	"sign-in-google": "SignInGoogle_sign-in-google__xbG7P",
	"fullWidth": "SignInGoogle_fullWidth___t8FZ"
};


/***/ }),

/***/ 1647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7333);
/* harmony import */ var _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Checkbox = ({ className , text , checked , onCheck , ...rest })=>{
    const handleChange = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((e)=>{
        onCheck(e);
    }, [
        onCheck
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
        className: [
            (_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default().checkbox),
            className
        ].join(' '),
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "checkbox",
                checked: checked,
                onChange: handleChange
            }),
            text
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);


/***/ }),

/***/ 5998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6488);
/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Input_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Input = ({ label , labelStyle , labelClassName , type ='text' , className , name , error , errorMsg , ...rest })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: name !== null && name !== void 0 ? name : type,
                style: labelStyle,
                className: [
                    (_Input_module_scss__WEBPACK_IMPORTED_MODULE_2___default().label),
                    labelClassName
                ].join(' '),
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                autoCorrect: "off",
                autoComplete: "off",
                autoCapitalize: "none",
                name: name !== null && name !== void 0 ? name : type,
                type: type,
                className: [
                    (_Input_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input),
                    error && 'error-input',
                    className
                ].join(' '),
                ...rest
            }),
            error && errorMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "error-message",
                children: errorMsg
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ 9478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_getLang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2242);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var _SignInGoogle_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5232);
/* harmony import */ var _SignInGoogle_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SignInGoogle_module_scss__WEBPACK_IMPORTED_MODULE_4__);





const SignInGoogle = ({ className , fullWidth , text , onMouseUp , ...rest })=>{
    const lang = (0,_controllers_getLang__WEBPACK_IMPORTED_MODULE_1__/* .getLang */ .V)();
    const handleGoogleSignIn = react__WEBPACK_IMPORTED_MODULE_2___default().useCallback(async (e)=>{
        onMouseUp && onMouseUp(e);
    }, [
        onMouseUp
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: "button",
        className: [
            (_SignInGoogle_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["sign-in-google"]),
            fullWidth && (_SignInGoogle_module_scss__WEBPACK_IMPORTED_MODULE_4___default().fullWidth),
            className
        ].join(' '),
        onMouseUp: handleGoogleSignIn,
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                src: '/images/icons/google.svg',
                width: 20,
                height: 20,
                alt: "google-icon"
            }),
            text !== null && text !== void 0 ? text : lang.signInWithGoogle
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInGoogle);


/***/ }),

/***/ 6069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ privateRoute)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7413);
/* eslint-disable react-hooks/rules-of-hooks */ 




const privateRoute = ({ whenIsLoggedIs , disabled  })=>{
    const isLogged1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ auth: { isLogged  }  })=>isLogged
    );
    const { replace  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(()=>{
        isLogged1 === whenIsLoggedIs && !disabled && replace(_utils_misc__WEBPACK_IMPORTED_MODULE_3__/* .URLS.HOME */ .ns.HOME);
    }, [
        isLogged1,
        disabled,
        whenIsLoggedIs
    ]);
};


/***/ }),

/***/ 3645:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PU": () => (/* binding */ authRef),
/* harmony export */   "Q6": () => (/* binding */ firestoreRef)
/* harmony export */ });
/* unused harmony export storageRef */
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7413);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// init firebase
if (!(0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.getApps)().length) (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(_utils_misc__WEBPACK_IMPORTED_MODULE_0__/* .firebaseConfig */ .qe);
// firebase refs
const firestoreRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)();
const authRef = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)();


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;