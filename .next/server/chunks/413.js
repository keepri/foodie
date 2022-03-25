"use strict";
exports.id = 413;
exports.ids = [413];
exports.modules = {

/***/ 5710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ul": () => (/* binding */ COLLECTIONS),
/* harmony export */   "zO": () => (/* binding */ MENU_ITEM_STATUS),
/* harmony export */   "AX": () => (/* binding */ RESTAURANT_STATUS),
/* harmony export */   "DF": () => (/* binding */ ORDER_STATUS),
/* harmony export */   "HR": () => (/* binding */ COOKIE_NAMES)
/* harmony export */ });
/* unused harmony exports STORAGE_FOLDERS, ACCOUNT_TYPE, MESSAGES */
var STORAGE_FOLDERS;
(function(STORAGE_FOLDERS) {
    STORAGE_FOLDERS["RESTAURANTS"] = 'restaurants';
    STORAGE_FOLDERS["USERS"] = 'users';
})(STORAGE_FOLDERS || (STORAGE_FOLDERS = {}));
var COLLECTIONS;
(function(COLLECTIONS) {
    COLLECTIONS["USERS"] = 'users';
    COLLECTIONS["RESTAURANTS"] = 'restaurants';
    COLLECTIONS["CLIENTS"] = 'clients';
    COLLECTIONS["ORDERS"] = 'orders';
    COLLECTIONS["REVIEWS"] = 'reviews';
    COLLECTIONS["MENUS"] = 'menus';
})(COLLECTIONS || (COLLECTIONS = {}));
var MENU_ITEM_STATUS;
(function(MENU_ITEM_STATUS) {
    MENU_ITEM_STATUS["AVAILABLE"] = 'available';
    MENU_ITEM_STATUS["UNAVAILABLE"] = 'unavailable';
})(MENU_ITEM_STATUS || (MENU_ITEM_STATUS = {}));
var RESTAURANT_STATUS;
(function(RESTAURANT_STATUS) {
    RESTAURANT_STATUS["CLOSED"] = 'closed';
    RESTAURANT_STATUS["OPEN"] = 'open';
    RESTAURANT_STATUS["UNAVAILABLE"] = 'unavailable';
})(RESTAURANT_STATUS || (RESTAURANT_STATUS = {}));
var ORDER_STATUS;
(function(ORDER_STATUS) {
    ORDER_STATUS["PENDING"] = 'pending';
    ORDER_STATUS["ACCEPTED"] = 'accepted';
    ORDER_STATUS["COMPLETED"] = 'completed';
    ORDER_STATUS["CANCELED"] = 'canceled';
})(ORDER_STATUS || (ORDER_STATUS = {}));
var ACCOUNT_TYPE;
(function(ACCOUNT_TYPE) {
    ACCOUNT_TYPE["CLIENT"] = 'client';
    ACCOUNT_TYPE["RESTAURANT"] = 'restaurant';
    ACCOUNT_TYPE["ADMIN"] = 'admin';
})(ACCOUNT_TYPE || (ACCOUNT_TYPE = {}));
var COOKIE_NAMES;
(function(COOKIE_NAMES) {
    COOKIE_NAMES["TOKEN"] = 'foodie_token';
})(COOKIE_NAMES || (COOKIE_NAMES = {}));
var MESSAGES;
(function(MESSAGES) {
    MESSAGES[// GENERIC
    "SUCCESS"] = 'Success!';
    MESSAGES["ERROR"] = 'Error!';
    MESSAGES["NOT_FOUND"] = 'Not found!';
    MESSAGES[// ACCOUNTS
    "VERIF_EMAIL_ERROR"] = 'Account created! Server failed to generate verification email!';
    MESSAGES["CREATE_ACCOUNT_SUCCESS"] = 'Successfully created account!';
    MESSAGES["LOGIN_ACCOUNT_SUCCESS"] = 'Successfully logged account in!';
    MESSAGES["LOGOUT_SUCCESS"] = 'Successfully logged account out!';
    MESSAGES["CREATE_ACCOUNT_ERROR"] = 'Server Error! User not created.';
    MESSAGES[// SECURITY
    "UNAUTHORIZED_NOT_SAME_USER"] = 'Not same user. Access denied!';
    MESSAGES["UNAUTHORIZED_NO_TOKEN"] = 'No token. Access denied!';
    MESSAGES["UNAUTHORIZED_TOKEN"] = 'Invalid token. Access denied!';
    MESSAGES[// RESTAURANTS
    "RESTAURANTS_MANDATORY_FIELDS_ALL"] = 'Mandatory fields: "uid", "data"!';
    MESSAGES["RESTAURANTS_MANDATORY_FIELDS_UID"] = 'Mandatory fields: "uid"!';
    MESSAGES["RESTAURANTS_MANDATORY_FIELDS_DATA"] = 'Mandatory fields: "data"!';
    MESSAGES[// ORDERS
    "ORDERS_MANDATORY_FIELDS_ALL"] = 'Mandatory fields: "uid", "accountType", "data"!';
    MESSAGES["ORDERS_MANDATORY_FIELDS_UID_ACCOUNT_TYPE"] = 'Mandatory fields: "uid", "accountType"!';
    MESSAGES["ORDERS_MANDATORY_FIELDS_UID_DATA"] = 'Mandatory fields: "uid", "data"!';
    MESSAGES["ORDERS_MANDATORY_FIELDS_DATA"] = 'Mandatory fields: "data"!';
    MESSAGES[// CLIENTS
    "CLIENTS_MANDATORY_FIELDS_DATA"] = 'Mandatory fields: "data"!';
    MESSAGES[// REVIEWS
    "REVIEWS_MDANDATORY_FIELDS_UID"] = 'Mandatory fields: "uid"!';
    MESSAGES["REVIEWS_MDANDATORY_FIELDS_DATA"] = 'Mandatory fields: "data"!';
    MESSAGES[// MENUS
    "MENUS_MDANDATORY_FIELDS_UID"] = 'Mandatory fields: "uid"!';
    MESSAGES["MENUS_MDANDATORY_FIELDS_DATA"] = 'Mandatory fields: "data"!';
})(MESSAGES || (MESSAGES = {}));


/***/ }),

/***/ 7413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ns": () => (/* binding */ URLS),
  "FH": () => (/* binding */ baseUrl),
  "IX": () => (/* binding */ defaultItemPhoto),
  "DE": () => (/* binding */ defaultRestaurantLogo),
  "Un": () => (/* binding */ defaultRestaurantPhoto),
  "qe": () => (/* binding */ firebaseConfig),
  "SU": () => (/* binding */ initAppState),
  "UY": () => (/* binding */ initAuthState),
  "Kd": () => (/* binding */ initCartState),
  "S_": () => (/* binding */ isClientSide),
  "yv": () => (/* binding */ isProduction),
  "uQ": () => (/* binding */ reEmail),
  "CA": () => (/* binding */ rePhone),
  "aD": () => (/* binding */ siteName)
});

// UNUSED EXPORTS: cors, defaultCookieOptions

;// CONCATENATED MODULE: ./utils/declarations/enums/Currency.ts
var CURRENCY;
(function(CURRENCY) {
    CURRENCY["RON"] = "RON";
})(CURRENCY || (CURRENCY = {}));

;// CONCATENATED MODULE: ./utils/declarations/enums/Langs.ts
var Langs;
(function(Langs) {
    Langs["en"] = "en";
})(Langs || (Langs = {}));

// EXTERNAL MODULE: external "cors"
var external_cors_ = __webpack_require__(3582);
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_);
// EXTERNAL MODULE: ./firebase/declarations/enums.ts
var enums = __webpack_require__(5710);
;// CONCATENATED MODULE: ./utils/baseForms.ts


const baseMenuItem = {
    uid: '',
    status: enums/* MENU_ITEM_STATUS.AVAILABLE */.zO.AVAILABLE,
    name: '',
    description: '',
    quantity: 1,
    price: 0,
    info: '',
    photo: ''
};
const baseCategory = {
    name: '',
    items: []
};
const baseAddress = {
    country: '',
    county: '',
    city: '',
    street: '',
    number: 0,
    alias: '',
    extra: ''
};
const baseCosts = {
    packaging: 0,
    delivery: 0,
    minOrder: 0,
    noDeliveryAfterMinOrder: false
};
const baseHours = {
    mon: '',
    tue: '',
    wed: '',
    thu: '',
    fri: '',
    sat: '',
    sun: ''
};
// BASE SCHEMAS
const baseRestaurant = {
    uid: '',
    photo: '',
    logo: '',
    description: '',
    status: enums/* RESTAURANT_STATUS.CLOSED */.AX.CLOSED,
    name: '',
    phone: '',
    addresses: [],
    costs: baseCosts,
    rating: 0,
    hours: baseHours,
    orders: []
};
const baseOrder = {
    uid: '',
    items: [],
    total: 0,
    client: '',
    restaurant: '',
    status: enums/* ORDER_STATUS.PENDING */.DF.PENDING,
    date: 0,
    info: ''
};
const baseClient = {
    name: '',
    phone: '',
    addresses: [],
    orders: []
};
const baseReview = {
    client: '',
    restaurant: '',
    rating: 0,
    review: '',
    date: 0
};
const baseMenu = {
    restaurant: '',
    categories: []
};

;// CONCATENATED MODULE: ./utils/misc.ts





const isProduction = "production" === 'production';
const baseUrl = isProduction ? 'http://localhost:3000' : 'http://localhost:3000';
const isClientSide = "undefined" !== 'undefined';
{
/* TODO change default restaurant photo */ }// const defaultRestaurantPhoto = '/images/default-restaurant.jpg';
// const defaultRestaurantLogo = '/images/restaurant-logo.webp';
const defaultRestaurantPhoto = '/images/default-restaurant-white.png';
const defaultItemPhoto = '/images/default-food-item.jpg';
const defaultRestaurantLogo = '/images/pizza-hut-logo.png';
// URLS
const URLS = {
    // WEBSITE
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    CART: '/cart',
    RESTAURANT: '/restaurant',
    ORDERS: '/orders',
    SETTINGS: '/settings',
    // SETTINGS_ACCOUNT: `${baseUrl}/settings/account`,
    // API
    API_REGISTER: '/api/auth/register',
    API_LOGIN: '/api/auth/login',
    API_LOGOUT: '/api/auth/logout',
    API_GET_USER: '/api/clients',
    API_PLACE_ORDER: '/api/orders',
    API_GET_ORDERS: '/api/orders',
    API_GET_RESTAURANTS: '/api/restaurants',
    API_GET_MENU: '/api/menus'
};
// MISC
// TODO update to correct domain
const domain = isProduction ? 'localhost' : 'localhost';
const siteName = 'Foodie';
const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const rePhone = /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/gim;
// FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyDh8jzT_aqjFSMXblgfUvaONVpo8H0GYv4",
    authDomain: "foodie-55977.firebaseapp.com",
    projectId: "foodie-55977",
    storageBucket: "foodie-55977.appspot.com",
    messagingSenderId: "155703867126",
    appId: "1:155703867126:web:ca5e81e97ac95dc9565ed7",
    measurementId: "G-F3MCGXRK3VG-F3MCGXRK3V"
};
// COOKIES
const defaultCookieOptions = {
    // TODO update to "isProduction"
    secure: false,
    httpOnly: true,
    sameSite: isProduction ? 'strict' : 'lax',
    path: '/',
    domain
};
// CORS
const cors = external_cors_default()({
    methods: [
        'GET',
        'HEAD'
    ]
});
// REDUX INIT STATES
const initAppState = {
    currency: CURRENCY.RON,
    loading: false,
    appLang: Langs.en,
    selectedRestaurant: null
};
const initAuthState = {
    loading: false,
    isLogged: false,
    token: undefined,
    user: baseClient
};
const initCartState = {
    ...baseOrder,
    loading: false
};


/***/ })

};
;