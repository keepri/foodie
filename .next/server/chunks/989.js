exports.id = 989;
exports.ids = [989];
exports.modules = {

/***/ 4922:
/***/ ((module) => {

// Exports
module.exports = {
	"badge": "Badge_badge__eicrr"
};


/***/ }),

/***/ 7139:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__FR1hO",
	"button-selector": "Button_button-selector__iTrvx",
	"tooltip": "Button_tooltip__k14HI",
	"button-simple": "Button_button-simple__wMnLV",
	"button-primary": "Button_button-primary__Tyn_t",
	"button-secondary": "Button_button-secondary___zsQX"
};


/***/ }),

/***/ 6106:
/***/ ((module) => {

// Exports
module.exports = {
	"tooltip": "Tooltip_tooltip__KlJoO"
};


/***/ }),

/***/ 5267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Badge_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4922);
/* harmony import */ var _Badge_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Badge_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Badge = ({ className , info , ...rest })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: [
            (_Badge_module_scss__WEBPACK_IMPORTED_MODULE_2___default().badge),
            className
        ].join(' '),
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: info
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);


/***/ }),

/***/ 989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7139);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6553);
/* harmony import */ var _components_Badge_Badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5267);






const Link = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ children , tooltip , badge , underline , fullWidth , className , button , primary , secondary , href , ...rest }, ref)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            ref: ref,
            style: {
                textDecoration: underline ? 'underline' : 'none'
            },
            className: [
                (_Button_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["button-selector"]),
                button && (_Button_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button),
                fullWidth && 'full-width',
                primary && (_Button_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["button-primary"]),
                secondary && (_Button_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["button-secondary"]),
                className, 
            ].join(' '),
            ...rest,
            children: [
                badge && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Badge_Badge__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    info: badge
                }),
                children,
                tooltip && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: (_Button_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tooltip),
                    text: tooltip
                })
            ]
        })
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ }),

/***/ 6553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tooltip_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6106);
/* harmony import */ var _Tooltip_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Tooltip_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Tooltip = ({ text , className , ...rest })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: [
            (_Tooltip_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tooltip),
            className
        ].join(' '),
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: text
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);


/***/ })

};
;