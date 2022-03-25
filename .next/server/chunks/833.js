"use strict";
exports.id = 833;
exports.ids = [833];
exports.modules = {

/***/ 2833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ getRestaurantsServerSide)
/* harmony export */ });
/* harmony import */ var _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5710);
/* harmony import */ var _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9786);



const getRestaurantsServerSide = async ()=>{
    try {
        const restaurantsCol = await _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__/* .firestore.collection */ .RZ.collection(_firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.RESTAURANTS */ .Ul.RESTAURANTS).get();
        const restaurants = restaurantsCol.docs.map((doc)=>doc.data()
        );
        return {
            restaurants
        };
    } catch (error) {
        throw error;
    }
};


/***/ }),

/***/ 9786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RZ": () => (/* binding */ firestore)
/* harmony export */ });
/* unused harmony exports auth, storage */
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7413);
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2509);
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_1__);


if (!(firebase_admin__WEBPACK_IMPORTED_MODULE_1___default().apps.length)) {
    firebase_admin__WEBPACK_IMPORTED_MODULE_1___default().initializeApp({
        credential: firebase_admin__WEBPACK_IMPORTED_MODULE_1___default().credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            privateKey: process.env.FIREBASE_PRIVATE_KEY,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL
        }),
        ..._utils_misc__WEBPACK_IMPORTED_MODULE_0__/* .firebaseConfig */ .qe
    });
}
const firestore = firebase_admin__WEBPACK_IMPORTED_MODULE_1___default().firestore();
const auth = firebase_admin__WEBPACK_IMPORTED_MODULE_1___default().auth();
const storage = firebase_admin__WEBPACK_IMPORTED_MODULE_1___default().storage();



/***/ })

};
;