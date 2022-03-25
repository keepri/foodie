(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5007:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 150:
/***/ ((module) => {

// Exports
module.exports = {
	"logo": "Logo_logo___yD0t",
	"logo-text": "Logo_logo-text__DNUSq"
};


/***/ }),

/***/ 8366:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "NavbarMain_navbar__DEY0P",
	"navbar-sign-in": "NavbarMain_navbar-sign-in__RCDsg",
	"navbar-list": "NavbarMain_navbar-list__eGhWU"
};


/***/ }),

/***/ 8419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5007);
/* harmony import */ var _Icon_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Icon_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);




const Icon = ({ icon , size  })=>{
    const alt1 = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>{
        const iconPathSplit = icon.split('/');
        var ref;
        const alt = (ref = iconPathSplit[iconPathSplit.length - 1].split('.')[0]) !== null && ref !== void 0 ? ref : `icon-alt-${Math.random() * 100}`;
        return alt;
    }, [
        icon
    ]);
    const iconSize = size === 'small' ? 20 : size === 'medium' ? 25 : size === 'large' ? 30 : 25;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: (_Icon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon),
        src: icon,
        width: iconSize,
        height: iconSize,
        alt: `${alt1}-icon`
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 6398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Footer = ({})=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {}));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 863:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9391);
/* harmony import */ var _controllers_subscribeOnAuthChange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4101);
/* harmony import */ var _declarations_enums_Head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6208);
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7413);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_actions__WEBPACK_IMPORTED_MODULE_5__, _controllers_subscribeOnAuthChange__WEBPACK_IMPORTED_MODULE_6__]);
([_redux_actions__WEBPACK_IMPORTED_MODULE_5__, _controllers_subscribeOnAuthChange__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Head = ({ keywords =_declarations_enums_Head__WEBPACK_IMPORTED_MODULE_7__/* .KEYWORDS.HOME */ .Pb.HOME , title =_declarations_enums_Head__WEBPACK_IMPORTED_MODULE_7__/* .TITLE.HOME */ .R.HOME , desc =_declarations_enums_Head__WEBPACK_IMPORTED_MODULE_7__/* .DESCRIPTION.HOME */ .dz.HOME , ogTitle =_declarations_enums_Head__WEBPACK_IMPORTED_MODULE_7__/* .OG_TITLE.HOME */ .Pk.HOME , ogDesc =_declarations_enums_Head__WEBPACK_IMPORTED_MODULE_7__/* .OG_DESCRIPTION.HOME */ .rq.HOME , previewImage ,  })=>{
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const url = typeof location !== 'undefined' && location.href;
    const { loginUserAuth  } = (0,_redux_actions__WEBPACK_IMPORTED_MODULE_5__/* .useAuthActions */ .X$)();
    const { setOnAuthChangeSubApp  } = (0,_redux_actions__WEBPACK_IMPORTED_MODULE_5__/* .useAppActions */ .rO)();
    const unsubscribeOnAuthChange = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(({ app  })=>app.unsubscribeOnAuthChange
    );
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        (0,_controllers_subscribeOnAuthChange__WEBPACK_IMPORTED_MODULE_6__/* .subscribeOnAuthChange */ .O)({
            loginUserAuth,
            setOnAuthChangeSubApp
        });
        return unsubscribeOnAuthChange && unsubscribeOnAuthChange();
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                children: [
                    _utils_misc__WEBPACK_IMPORTED_MODULE_8__/* .siteName */ .aD,
                    " | ",
                    title
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                httpEquiv: "X-UA-Compatible",
                content: "ie=edge"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "keywords",
                content: keywords
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: desc
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                httpEquiv: "Content-Type",
                content: "text/html;charset=UTF-8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: ogTitle
            }, "ogtitle"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }, "ogtype"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: previewImage !== null && previewImage !== void 0 ? previewImage : '/images/preview.jpeg'
            }, "ogimage"),
            url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: url
            }, "ogurl"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:locale",
                content: locale !== null && locale !== void 0 ? locale : 'ro_RO'
            }, "oglocale"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: ogDesc
            }, "ogdesc"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:site_name",
                content: _utils_misc__WEBPACK_IMPORTED_MODULE_8__/* .siteName */ .aD
            }, "ogsitename")
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Head);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var _Logo_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(150);
/* harmony import */ var _Logo_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Logo_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Buttons_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(989);
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7413);






const Logo = ({ className , ...rest })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Buttons_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        href: _utils_misc__WEBPACK_IMPORTED_MODULE_4__/* .URLS.HOME */ .ns.HOME,
        className: [
            (_Logo_module_scss__WEBPACK_IMPORTED_MODULE_5___default().logo),
            className
        ].join(' '),
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                src: '/images/f.png',
                width: 55,
                height: 60,
                objectFit: "contain",
                alt: "F-logo"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_Logo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["logo-text"]),
                children: "oodie"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 4573:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavbarMain_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8366);
/* harmony import */ var _NavbarMain_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_NavbarMain_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9391);
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7413);
/* harmony import */ var _components_Buttons_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4453);
/* harmony import */ var _components_Buttons_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(989);
/* harmony import */ var _components_Logo_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8234);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8419);
/* harmony import */ var _controllers_getLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2242);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_actions__WEBPACK_IMPORTED_MODULE_3__]);
_redux_actions__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Navbar = ({ className , ...rest })=>{
    const lang = (0,_controllers_getLang__WEBPACK_IMPORTED_MODULE_9__/* .getLang */ .V)();
    const { auth: { isLogged  } , cart: { items  } ,  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(({ auth , cart  })=>({
            auth,
            cart
        })
    );
    const { logoutUserAuth  } = (0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__/* .useAuthActions */ .X$)();
    const { 0: cartItemCount , 1: setCartItemCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const itemCount = items.length > 0 ? items.length : undefined;
        setCartItemCount(itemCount);
    }, [
        items
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: [
            'container',
            (_NavbarMain_module_scss__WEBPACK_IMPORTED_MODULE_10___default().navbar),
            className
        ].join(' '),
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo_Logo__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: (_NavbarMain_module_scss__WEBPACK_IMPORTED_MODULE_10___default()["navbar-list"]),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Buttons_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: _utils_misc__WEBPACK_IMPORTED_MODULE_4__/* .URLS.CART */ .ns.CART,
                            tooltip: lang.cartTooltip,
                            badge: cartItemCount,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                icon: '/images/icons/cloche.svg',
                                size: "medium"
                            })
                        })
                    }),
                    isLogged && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Buttons_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: _utils_misc__WEBPACK_IMPORTED_MODULE_4__/* .URLS.ORDERS */ .ns.ORDERS,
                            tooltip: lang.ordersTooltip,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                icon: '/images/icons/orders.svg',
                                size: "medium"
                            })
                        })
                    }),
                    isLogged && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Buttons_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: _utils_misc__WEBPACK_IMPORTED_MODULE_4__/* .URLS.SETTINGS */ .ns.SETTINGS,
                            tooltip: lang.settingsTooltip,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                icon: '/images/icons/settings.svg',
                                size: "medium"
                            })
                        })
                    }),
                    isLogged && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Buttons_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            simple: true,
                            onMouseUp: ()=>logoutUserAuth()
                            ,
                            tooltip: lang.signOutTooltip,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                icon: '/images/icons/sign-out.svg',
                                size: "medium"
                            })
                        })
                    }),
                    !isLogged && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: (_NavbarMain_module_scss__WEBPACK_IMPORTED_MODULE_10___default()["navbar-sign-in"]),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Buttons_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                href: _utils_misc__WEBPACK_IMPORTED_MODULE_4__/* .URLS.LOGIN */ .ns.LOGIN,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        icon: '/images/icons/profile.svg',
                                        size: "medium"
                                    }),
                                    lang.signIn
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ subscribeOnAuthChange)
/* harmony export */ });
/* harmony import */ var _firebase_initClientApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7413);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_initClientApp__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);
([_firebase_initClientApp__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const subscribeOnAuthChange = ({ loginUserAuth , setOnAuthChangeSubApp  })=>{
    const unsubscribe = _firebase_initClientApp__WEBPACK_IMPORTED_MODULE_0__/* .authRef.onAuthStateChanged */ .PU.onAuthStateChanged(async (user)=>{
        if (user) {
            try {
                const token = await user.getIdToken();
                !user.emailVerified && _utils_misc__WEBPACK_IMPORTED_MODULE_3__/* .isProduction */ .yv && await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.sendEmailVerification)(user);
                const { data: { user: userInfo  } ,  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(_utils_misc__WEBPACK_IMPORTED_MODULE_3__/* .URLS.API_LOGIN */ .ns.API_LOGIN, {
                    token
                });
                loginUserAuth({
                    token,
                    user: userInfo
                });
            } catch ({ code , message  }) {
                // TODO handle errors
                console.log('On auth state change error:', code, message);
            }
        }
    });
    setOnAuthChangeSubApp(unsubscribe);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1858:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6398);
/* harmony import */ var _components_Navigation_NavbarMain_NavbarMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navigation_NavbarMain_NavbarMain__WEBPACK_IMPORTED_MODULE_3__]);
_components_Navigation_NavbarMain_NavbarMain__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import Header from '#modules/Header/Header';

const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigation_NavbarMain_NavbarMain__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_initClientApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3281);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7413);
/* harmony import */ var _modules_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1858);
/* harmony import */ var _components_Layout_Head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(863);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_initClientApp__WEBPACK_IMPORTED_MODULE_1__, _modules_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__, _components_Layout_Head__WEBPACK_IMPORTED_MODULE_8__]);
([_firebase_initClientApp__WEBPACK_IMPORTED_MODULE_1__, _modules_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__, _components_Layout_Head__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












(axios__WEBPACK_IMPORTED_MODULE_5___default().defaults.baseURL) = _utils_misc__WEBPACK_IMPORTED_MODULE_6__/* .baseUrl */ .FH;
(axios__WEBPACK_IMPORTED_MODULE_5___default().defaults.withCredentials) = true;
const Foodie = ({ Component , pageProps  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
        store: _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store */ .h,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Head__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Foodie);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ store)
});

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./utils/declarations/enums/Redux.ts
var Redux = __webpack_require__(4278);
// EXTERNAL MODULE: ./utils/misc.ts + 3 modules
var misc = __webpack_require__(7413);
;// CONCATENATED MODULE: ./redux/reducers/authReducer.ts


const authReducer = (state = misc/* initAuthState */.UY, action)=>{
    switch(action.type){
        // SET_LOADING
        case Redux/* AuthActionType.SET_LOADING */.Mk.SET_LOADING:
            {
                return {
                    ...state,
                    loading: action.payload
                };
            }
        // SET_IS_LOGGED
        case Redux/* AuthActionType.SET_IS_LOGGED */.Mk.SET_IS_LOGGED:
            {
                return {
                    ...state,
                    isLogged: action.payload
                };
            }
        // UPDATE_USER
        case Redux/* AuthActionType.UPDATE_USER */.Mk.UPDATE_USER:
            {
                return {
                    ...state,
                    user: {
                        ...state.user,
                        ...action.payload
                    }
                };
            }
        // LOGIN
        case Redux/* AuthActionType.LOGIN */.Mk.LOGIN:
            {
                const { token , user  } = action.payload;
                return {
                    ...state,
                    token,
                    user: user !== null && user !== void 0 ? user : state.user,
                    isLogged: true
                };
            }
        // LOGOUT
        case Redux/* AuthActionType.LOGOUT */.Mk.LOGOUT:
            {
                return misc/* initAuthState */.UY;
            }
        // RESET
        case Redux/* AuthActionType.RESET */.Mk.RESET:
            {
                return misc/* initAuthState */.UY;
            }
        default:
            {
                return state;
            }
    }
};

;// CONCATENATED MODULE: ./utils/declarations/enums/LocalStorage.ts

var LS;
(function(LS) {
    LS["CART"] = 'cart';
})(LS || (LS = {}));

;// CONCATENATED MODULE: ./redux/reducers/cartReducer.ts



const localSavedCart = misc/* isClientSide */.S_ && localStorage.getItem(LS.CART);
const cartReducer = (state = localSavedCart ? JSON.parse(localSavedCart) : misc/* initCartState */.Kd, action)=>{
    switch(action.type){
        // SET_LOADING
        case Redux/* CartActionType.SET_LOADING */.EU.SET_LOADING:
            {
                return {
                    ...state,
                    loading: action.payload
                };
            }
        // SET_CART_RESTAURANT
        case Redux/* CartActionType.SET_CART_RESTAURANT */.EU.SET_CART_RESTAURANT:
            {
                return {
                    ...state,
                    restaurant: action.payload
                };
            }
        // ADD_ITEM
        case Redux/* CartActionType.ADD_ITEM */.EU.ADD_ITEM:
            {
                const itemToAdd = action.payload;
                const stateItems = state.items;
                const existItem = stateItems.find((item)=>item.uid === itemToAdd.uid
                );
                const items = existItem ? stateItems.map((item)=>item.name === itemToAdd.name ? {
                        ...item,
                        quantity: item.quantity + 1
                    } : item
                ) : [
                    ...stateItems,
                    itemToAdd
                ];
                const total = state.total + itemToAdd.price;
                const cartState = {
                    ...state,
                    items,
                    total
                };
                localStorage.setItem(LS.CART, JSON.stringify(cartState));
                return cartState;
            }
        // UPDATE_ITEM
        case Redux/* CartActionType.UPDATE_ITEM */.EU.UPDATE_ITEM:
            {
                const { update , index  } = action.payload;
                // get the cart items from state
                const items = state.items;
                if (update.quantity !== undefined) {
                    // get quantity of item
                    const itemQuantity = items[index].quantity;
                    // set new cart total
                    state.total = 'quantity' in update && update.quantity ? update.quantity < itemQuantity ? state.total - items[index].price : state.total + items[index].price : state.total;
                }
                // update the item
                items[index] = {
                    ...items[index],
                    ...update
                };
                const cartState = {
                    ...state,
                    items
                };
                localStorage.setItem(LS.CART, JSON.stringify(cartState));
                return cartState;
            }
        // UPDATE
        case Redux/* CartActionType.UPDATE */.EU.UPDATE:
            {
                return {
                    ...state,
                    ...action.payload
                };
            }
        // REMOVE_ITEM
        case Redux/* CartActionType.REMOVE_ITEM */.EU.REMOVE_ITEM:
            {
                const item = state.items[action.payload];
                const items = state.items.filter((_, index)=>index !== action.payload
                );
                const total = state.total - item.price;
                const cartState = {
                    ...state,
                    items,
                    total
                };
                items.length ? localStorage.setItem(LS.CART, JSON.stringify(cartState)) : localStorage.removeItem(LS.CART);
                return cartState;
            }
        // RESET
        case Redux/* CartActionType.RESET */.EU.RESET:
            {
                localStorage.removeItem(LS.CART);
                return misc/* initCartState */.Kd;
            }
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./redux/reducers/appReducer.ts


const appReducer = (state = misc/* initAppState */.SU, action)=>{
    switch(action.type){
        // SET_LOADING
        case Redux/* AppActionType.SET_LOADING */.$H.SET_LOADING:
            {
                return {
                    ...state,
                    loading: action.payload
                };
            }
        // SET_ON_AUTH_CHANGE_SUB
        case Redux/* AppActionType.SET_ON_AUTH_CHANGE_SUB */.$H.SET_ON_AUTH_CHANGE_SUB:
            {
                return {
                    ...state,
                    unsubscribeOnAuthChange: action.payload
                };
            }
        // SET_LANG
        case Redux/* AppActionType.SET_LANG */.$H.SET_LANG:
            {
                return {
                    ...state,
                    appLang: action.payload
                };
            }
        // SET_RESTAURANTS
        case Redux/* AppActionType.SET_RESTAURANTS */.$H.SET_RESTAURANTS:
            {
                return {
                    ...state,
                    restaurants: action.payload
                };
            }
        // SET_SELECTED_RESTAURANT
        case Redux/* AppActionType.SET_SELECTED_RESTAURANT */.$H.SET_SELECTED_RESTAURANT:
            {
                return {
                    ...state,
                    selectedRestaurant: action.payload
                };
            }
        // RESET
        case Redux/* AppActionType.RESET */.$H.RESET:
            {
                return misc/* initAppState */.SU;
            }
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./redux/reducers/index.ts




const rootReducer = (0,external_redux_.combineReducers)({
    cart: cartReducer,
    auth: authReducer,
    app: appReducer
});

;// CONCATENATED MODULE: ./redux/store/index.ts



const store = (0,external_redux_.createStore)(rootReducer, {}, (0,external_redux_.applyMiddleware)((external_redux_thunk_default())));


/***/ }),

/***/ 6208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ TITLE),
/* harmony export */   "dz": () => (/* binding */ DESCRIPTION),
/* harmony export */   "Pb": () => (/* binding */ KEYWORDS),
/* harmony export */   "rq": () => (/* binding */ OG_DESCRIPTION),
/* harmony export */   "Pk": () => (/* binding */ OG_TITLE)
/* harmony export */ });

var TITLE;
(function(TITLE) {
    TITLE["HOME"] = 'Home';
})(TITLE || (TITLE = {}));
var DESCRIPTION;
(function(DESCRIPTION) {
    DESCRIPTION["HOME"] = 'Descriere temporară';
})(DESCRIPTION || (DESCRIPTION = {}));
var OG_DESCRIPTION;
(function(OG_DESCRIPTION) {
    OG_DESCRIPTION["HOME"] = 'Descriere temporară';
})(OG_DESCRIPTION || (OG_DESCRIPTION = {}));
var OG_TITLE;
(function(OG_TITLE) {
    OG_TITLE["HOME"] = 'Foodie. Cea mai bună m\xe2ncare la un click distanță!';
})(OG_TITLE || (OG_TITLE = {}));
var KEYWORDS;
(function(KEYWORDS) {
    KEYWORDS["HOME"] = '';
})(KEYWORDS || (KEYWORDS = {}));


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3582:
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ 3392:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [628,675,676,664,242,413,989,391,453], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();