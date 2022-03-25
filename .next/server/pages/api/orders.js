"use strict";
(() => {
var exports = {};
exports.id = 722;
exports.ids = [722];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 2509:
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ 3691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ getOrdersByUidServerSide)
/* harmony export */ });
/* harmony import */ var _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3728);



const getOrdersByUidServerSide = async (uid)=>{
    try {
        const ordersCol = _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__/* .firestore.collection */ .RZ.collection(_firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.ORDERS */ .Ul.ORDERS);
        const ordersQuery = await ordersCol.where('client', '==', uid).get();
        if (ordersQuery.empty) return {
            orders: []
        };
        const orders = ordersQuery.docs.map((doc)=>doc.data()
        ).sort((a, b)=>b.date - a.date
        );
        return {
            orders
        };
    } catch (error) {
        throw error;
    }
};


/***/ }),

/***/ 9530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ orders)
});

// EXTERNAL MODULE: ./utils/declarations/enums/REST.ts
var REST = __webpack_require__(4159);
// EXTERNAL MODULE: ./firebase/declarations/enums.ts
var enums = __webpack_require__(167);
// EXTERNAL MODULE: ./firebase/initServerApp.ts
var initServerApp = __webpack_require__(3728);
// EXTERNAL MODULE: ./controllers/api/handleError.ts
var handleError = __webpack_require__(8695);
// EXTERNAL MODULE: ./controllers/api/middleware/useCors.ts + 1 modules
var useCors = __webpack_require__(1777);
// EXTERNAL MODULE: ./utils/baseForms.ts
var baseForms = __webpack_require__(6286);
// EXTERNAL MODULE: ./controllers/api/validation/objectContainsSameKeys.ts + 1 modules
var objectContainsSameKeys = __webpack_require__(9199);
// EXTERNAL MODULE: ./controllers/api/validation/verifyToken.ts + 1 modules
var verifyToken = __webpack_require__(864);
;// CONCATENATED MODULE: ./controllers/api/validation/routes/orderRouteValidation.ts






const orderRouteValidation = async (req)=>{
    // BYPASS FOR ROUTES THAT ARE NOT IMPLEMENTED
    if (req.method === REST/* REQUEST_METHODS.DELETE */.W.DELETE || req.method === REST/* REQUEST_METHODS.PUT */.W.PUT) return;
    // ROUTE SECURITY
    try {
        await (0,verifyToken/* verifyToken */.W)(req);
    } catch (error) {
        throw error;
    }
    // TEST MANDATORY FIELDS "PATCH" & CHECK FIELDS SENT TO BE WHAT WE ACCEPT IN THE SCHEMA
    if (req.method === REST/* REQUEST_METHODS.PATCH */.W.PATCH) {
        const { uid , data  } = req.body;
        if (!uid || !data) {
            // res.status(400).json({ message: MESSAGES.ORDERS_MANDATORY_FIELDS_UID_DATA });
            throw Error(enums/* MESSAGES.ORDERS_MANDATORY_FIELDS_UID_DATA */.X3.ORDERS_MANDATORY_FIELDS_UID_DATA);
        }
        const { isValid , errorFields  } = (0,objectContainsSameKeys/* objectContainsSameKeys */.G)(data, baseForms/* baseOrder */.eY);
        if (!isValid) {
            // res.status(400).json({ message: MESSAGES.ERROR, errorFields });
            throw Error(enums/* MESSAGES.ERROR */.X3.ERROR + errorFields);
        }
    }
    // TEST MANDATORY FIELDS "POST" & CHECK FIELDS SENT TO BE WHAT WE ACCEPT IN THE SCHEMA
    if (req.method === REST/* REQUEST_METHODS.POST */.W.POST) {
        const { data  } = req.body;
        if (!data) {
            // res.status(400).json({ message: MESSAGES.ORDERS_MANDATORY_FIELDS_DATA });
            throw Error(enums/* MESSAGES.ORDERS_MANDATORY_FIELDS_DATA */.X3.ORDERS_MANDATORY_FIELDS_DATA);
        }
        const { isValid , errorFields  } = (0,objectContainsSameKeys/* objectContainsSameKeys */.G)(data, baseForms/* baseOrder */.eY, [
            'info'
        ]);
        if (!isValid) {
            // res.status(400).send({ message: MESSAGES.ERROR, errorFields });
            throw Error(enums/* MESSAGES.ERROR */.X3.ERROR + errorFields);
        }
    }
};

// EXTERNAL MODULE: ./controllers/api/get/getOrdersByUidServerSide.ts
var getOrdersByUidServerSide = __webpack_require__(3691);
;// CONCATENATED MODULE: ./pages/api/orders/index.ts







/* harmony default export */ const orders = (async (req, res)=>{
    var ref;
    // INITIAL ROUTE VERIFICATIONS
    try {
        await (0,useCors/* useCors */.m)(req, res);
        await orderRouteValidation(req);
    } catch (error) {
        (0,handleError/* handleError */.S)(error, res);
        return;
    }
    switch((ref = req.method) === null || ref === void 0 ? void 0 : ref.toUpperCase()){
        // GET
        case REST/* REQUEST_METHODS.GET */.W.GET:
            {
                try {
                    const { tokenUid  } = req.body;
                    const { orders  } = await (0,getOrdersByUidServerSide/* getOrdersByUidServerSide */.d)(tokenUid);
                    // const ordersCol = firestore.collection(COLLECTIONS.ORDERS);
                    // const ordersQuery = await ordersCol.where('client', '==', tokenUid as string).get();
                    // if (ordersQuery.empty) return res.status(404).json({ message: MESSAGES.NOT_FOUND });
                    // const orders = ordersQuery.docs.map(doc => doc.data() as OrderSchema);
                    return res.status(200).json({
                        orders
                    });
                } catch (error) {
                    (0,handleError/* handleError */.S)(error, res);
                }
                break;
            }
        // POST
        case REST/* REQUEST_METHODS.POST */.W.POST:
            {
                try {
                    const { data  } = req.body;
                    if (!data) return res.status(400).json({
                        message: enums/* MESSAGES.ORDERS_MANDATORY_FIELDS_DATA */.X3.ORDERS_MANDATORY_FIELDS_DATA
                    });
                    const orderDoc = initServerApp/* firestore.collection */.RZ.collection(enums/* COLLECTIONS.ORDERS */.Ul.ORDERS).doc();
                    const orderUid = orderDoc.id;
                    data.uid = orderUid;
                    await orderDoc.set(data);
                    const { restaurant: restaurantUid , client: clientUid  } = data;
                    const restaurantDoc = initServerApp/* firestore.collection */.RZ.collection(enums/* COLLECTIONS.RESTAURANTS */.Ul.RESTAURANTS).doc(restaurantUid);
                    const clientDoc = initServerApp/* firestore.collection */.RZ.collection(enums/* COLLECTIONS.CLIENTS */.Ul.CLIENTS).doc(clientUid);
                    const restaurant = (await restaurantDoc.get()).data();
                    const client = (await clientDoc.get()).data();
                    await restaurantDoc.update({
                        orders: [
                            ...restaurant.orders,
                            orderUid
                        ]
                    });
                    await clientDoc.update({
                        orders: [
                            ...client.orders,
                            orderUid
                        ]
                    });
                    return res.status(200).json({
                        orderUid,
                        message: enums/* MESSAGES.SUCCESS */.X3.SUCCESS
                    });
                } catch (error) {
                    (0,handleError/* handleError */.S)(error, res);
                }
                break;
            }
        // PATCH
        case REST/* REQUEST_METHODS.PATCH */.W.PATCH:
            {
                try {
                    const { uid , data  } = req.body;
                    const orderDoc = initServerApp/* firestore.collection */.RZ.collection(enums/* COLLECTIONS.ORDERS */.Ul.ORDERS).doc(uid);
                    if (!(await orderDoc.get()).exists) return res.status(404).json({
                        message: enums/* MESSAGES.NOT_FOUND */.X3.NOT_FOUND
                    });
                    await orderDoc.update(data);
                    const order = (await orderDoc.get()).data();
                    return res.status(200).json({
                        order
                    });
                } catch (error) {
                    (0,handleError/* handleError */.S)(error, res);
                }
                break;
            }
        // PUT
        case REST/* REQUEST_METHODS.PUT */.W.PUT:
            {
                try {
                    const { uid , data  } = req.body;
                    const orderDoc = initServerApp/* firestore.collection */.RZ.collection(enums/* COLLECTIONS.ORDERS */.Ul.ORDERS).doc(uid);
                    if (!(await orderDoc.get()).exists) return res.status(404).json({
                        message: enums/* MESSAGES.NOT_FOUND */.X3.NOT_FOUND
                    });
                    await orderDoc.set(data);
                    const order = (await orderDoc.get()).data();
                    return res.status(200).json({
                        order
                    });
                } catch (error) {
                    (0,handleError/* handleError */.S)(error, res);
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [674,864,649], () => (__webpack_exec__(9530)));
module.exports = __webpack_exports__;

})();