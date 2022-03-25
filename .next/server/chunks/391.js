"use strict";
exports.id = 391;
exports.ids = [391];
exports.modules = {

/***/ 3645:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ 819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ appActions)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4278);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7413);
/* eslint-disable react-hooks/rules-of-hooks */ 





const setLoadingApp = (payload)=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_2__/* .AppActionType.SET_LOADING */ .$H.SET_LOADING,
            payload
        })
;
const setOnAuthChangeSubApp = (payload)=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_2__/* .AppActionType.SET_ON_AUTH_CHANGE_SUB */ .$H.SET_ON_AUTH_CHANGE_SUB,
            payload
        })
;
const setLangApp = (payload)=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_2__/* .AppActionType.SET_LANG */ .$H.SET_LANG,
            payload
        })
;
const setSelectedRestaurantApp = (payload)=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_2__/* .AppActionType.SET_SELECTED_RESTAURANT */ .$H.SET_SELECTED_RESTAURANT,
            payload
        })
;
const setRestaurantsApp = (payload)=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_2__/* .AppActionType.SET_RESTAURANTS */ .$H.SET_RESTAURANTS,
            payload
        })
;
const toggleDarkModeApp = ()=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_2__/* .AppActionType.TOGGLE_DARK_MODE */ .$H.TOGGLE_DARK_MODE
        })
;
const loadRestaurants = ()=>{
    return async (dispatch)=>{
        try {
            let payload = [];
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(_utils_misc__WEBPACK_IMPORTED_MODULE_4__/* .URLS.API_GET_RESTAURANTS */ .ns.API_GET_RESTAURANTS);
            if (!(data === null || data === void 0 ? void 0 : data.restaurants)) {
                dispatch({
                    type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_2__/* .AppActionType.SET_RESTAURANTS */ .$H.SET_RESTAURANTS,
                    payload: []
                });
                return;
            }
            payload = data.restaurants;
            dispatch({
                type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_2__/* .AppActionType.SET_RESTAURANTS */ .$H.SET_RESTAURANTS,
                payload
            });
        } catch ({ message  }) {
            console.error('loadRestaurants:', message);
            dispatch({
                type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_2__/* .AppActionType.SET_RESTAURANTS */ .$H.SET_RESTAURANTS,
                payload: []
            });
        }
    };
};
const resetStateApp = ()=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_2__/* .AppActionType.RESET */ .$H.RESET
        })
;
const appActions = ()=>(0,redux__WEBPACK_IMPORTED_MODULE_0__.bindActionCreators)({
        setLoadingApp,
        setLangApp,
        toggleDarkModeApp,
        resetStateApp,
        setOnAuthChangeSubApp,
        setSelectedRestaurantApp,
        setRestaurantsApp,
        loadRestaurants
    }, (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)())
;


/***/ }),

/***/ 5590:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ authActions)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4278);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_initClientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3645);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(401);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7413);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_initClientApp__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__]);
([_firebase_initClientApp__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable import/no-anonymous-default-export */ /* eslint-disable react-hooks/rules-of-hooks */ 







// AUTH ACTIONS
const setLoadingAuth = (payload)=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_1__/* .AuthActionType.SET_LOADING */ .Mk.SET_LOADING,
            payload
        })
;
const setIsLoggedAuth = (payload)=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_1__/* .AuthActionType.SET_IS_LOGGED */ .Mk.SET_IS_LOGGED,
            payload
        })
;
const updateUserAuth = (payload)=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_1__/* .AuthActionType.UPDATE_USER */ .Mk.UPDATE_USER,
            payload
        })
;
const loginUserAuth = (payload)=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_1__/* .AuthActionType.LOGIN */ .Mk.LOGIN,
            payload
        })
;
const logoutUserAuth = ()=>(dispatch)=>{
        axios__WEBPACK_IMPORTED_MODULE_5___default().post(_utils_misc__WEBPACK_IMPORTED_MODULE_6__/* .URLS.API_LOGOUT */ .ns.API_LOGOUT, {}, {
            withCredentials: true
        }).then((res)=>console.log(res.data.message)
        ).catch((err)=>console.warn('Logout endpoint failed with:', err)
        );
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signOut)(_firebase_initClientApp__WEBPACK_IMPORTED_MODULE_3__/* .authRef */ .PU).then((_)=>console.log('Successfully logged out!')
        ).catch(({ message  })=>console.warn(message)
        );
        return dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_1__/* .AuthActionType.LOGOUT */ .Mk.LOGOUT
        });
    }
;
const resetAuth = ()=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_1__/* .AuthActionType.RESET */ .Mk.RESET
        })
;
const authActions = ()=>(0,redux__WEBPACK_IMPORTED_MODULE_0__.bindActionCreators)({
        setLoadingAuth,
        setIsLoggedAuth,
        loginUserAuth,
        logoutUserAuth,
        resetAuth,
        updateUserAuth
    }, (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)())
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ cartActions)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4278);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable import/no-anonymous-default-export */ /* eslint-disable react-hooks/rules-of-hooks */ 



// CART ACTIONS
const setLoadingCart = (payload)=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_1__/* .CartActionType.SET_LOADING */ .EU.SET_LOADING,
            payload
        })
;
const setRestaurantUidCart = (payload)=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_1__/* .CartActionType.SET_CART_RESTAURANT */ .EU.SET_CART_RESTAURANT,
            payload
        })
;
const addItemCart = (payload, quantity)=>(dispatch)=>{
        payload.quantity = quantity;
        return dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_1__/* .CartActionType.ADD_ITEM */ .EU.ADD_ITEM,
            payload
        });
    }
;
const removeItemCart = (payload)=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_1__/* .CartActionType.REMOVE_ITEM */ .EU.REMOVE_ITEM,
            payload
        })
;
const updateItemCart = (payload)=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_1__/* .CartActionType.UPDATE_ITEM */ .EU.UPDATE_ITEM,
            payload
        })
;
const updateCart = (payload)=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_1__/* .CartActionType.UPDATE */ .EU.UPDATE,
            payload
        })
;
const resetCart = ()=>(dispatch)=>dispatch({
            type: _declarations_enums_Redux__WEBPACK_IMPORTED_MODULE_1__/* .CartActionType.RESET */ .EU.RESET
        })
;
const cartActions = ()=>(0,redux__WEBPACK_IMPORTED_MODULE_0__.bindActionCreators)({
        setLoadingCart,
        setRestaurantUidCart,
        addItemCart,
        removeItemCart,
        resetCart,
        updateItemCart,
        updateCart
    }, (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)())
;


/***/ }),

/***/ 9391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rO": () => (/* reexport safe */ _appActions__WEBPACK_IMPORTED_MODULE_0__.x),
/* harmony export */   "X$": () => (/* reexport safe */ _authActions__WEBPACK_IMPORTED_MODULE_1__.Y),
/* harmony export */   "gV": () => (/* reexport safe */ _cartActions__WEBPACK_IMPORTED_MODULE_2__.U)
/* harmony export */ });
/* harmony import */ var _appActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(819);
/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5590);
/* harmony import */ var _cartActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7360);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_authActions__WEBPACK_IMPORTED_MODULE_1__]);
_authActions__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$H": () => (/* binding */ AppActionType),
/* harmony export */   "EU": () => (/* binding */ CartActionType),
/* harmony export */   "Mk": () => (/* binding */ AuthActionType)
/* harmony export */ });

var AppActionType;
(function(AppActionType) {
    AppActionType["SET_LOADING"] = 'app_set_loading';
    AppActionType["SET_ON_AUTH_CHANGE_SUB"] = 'app_set_on_auth_change_sub';
    AppActionType["SET_LANG"] = 'app_set_lang';
    AppActionType["SET_SELECTED_RESTAURANT"] = 'app_set_selected_restaurant';
    AppActionType["SET_RESTAURANTS"] = 'app_set_restaurants';
    AppActionType["TOGGLE_DARK_MODE"] = 'app_toggle_dark_mode';
    AppActionType["RESET"] = 'app_reset';
})(AppActionType || (AppActionType = {}));
var CartActionType;
(function(CartActionType) {
    CartActionType["SET_LOADING"] = 'cart_set_loading';
    CartActionType["SET_CART_RESTAURANT"] = 'cart_set_restaurant';
    CartActionType["ADD_ITEM"] = 'cart_add_item';
    CartActionType["REMOVE_ITEM"] = 'cart_remove_item';
    CartActionType["UPDATE_ITEM"] = 'cart_update_item';
    CartActionType["UPDATE"] = 'cart_update';
    CartActionType["RESET"] = 'cart_reset';
    CartActionType["GET_ITEMS_NUMBER"] = 'cart_get_items_number';
})(CartActionType || (CartActionType = {}));
var AuthActionType;
(function(AuthActionType) {
    AuthActionType["SET_LOADING"] = 'auth_set_loading';
    AuthActionType["SET_IS_LOGGED"] = 'auth_set_is_logged';
    AuthActionType["UPDATE_USER"] = 'auth_update_user';
    AuthActionType["RESET"] = 'auth_reset';
    AuthActionType["LOGIN"] = 'auth_login';
    AuthActionType["LOGOUT"] = 'auth_logout';
})(AuthActionType || (AuthActionType = {}));


/***/ })

};
;