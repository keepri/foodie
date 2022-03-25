"use strict";
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 4453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Badge_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5267);
/* harmony import */ var _components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6553);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7139);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4__);





const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ children , className , tooltip , badge , simple , type , fullWidth , primary , secondary , ...rest }, ref)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        ref: ref,
        type: type !== null && type !== void 0 ? type : 'button',
        className: [
            (_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["button-selector"]),
            simple ? (_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["button-simple"]) : (_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button),
            fullWidth && 'full-width',
            primary && (_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["button-primary"]),
            secondary && (_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["button-secondary"]),
            className, 
        ].join(' '),
        ...rest,
        children: [
            badge && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Badge_Badge__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                info: badge
            }),
            children,
            tooltip && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: (_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tooltip),
                text: tooltip
            })
        ]
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ })

};
;