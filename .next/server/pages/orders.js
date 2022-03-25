(() => {
var exports = {};
exports.id = 984;
exports.ids = [984];
exports.modules = {

/***/ 4611:
/***/ ((module) => {

// Exports
module.exports = {
	"order-card": "OrderCard_order-card__lexi_",
	"order-card-body-restaurant-name": "OrderCard_order-card-body-restaurant-name__iy9et",
	"order-card-body-order-number": "OrderCard_order-card-body-order-number__zWsVZ",
	"order-card-body-order-date": "OrderCard_order-card-body-order-date__veiHq",
	"order-card-body-items": "OrderCard_order-card-body-items__9Q2_p",
	"order-card-body-items-count": "OrderCard_order-card-body-items-count__JtgCC",
	"order-card-body-total": "OrderCard_order-card-body-total__E8qeV",
	"order-card-body-order-status": "OrderCard_order-card-body-order-status__ovyVb"
};


/***/ }),

/***/ 5196:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 5867:
/***/ ((module) => {

// Exports
module.exports = {
	"orders": "Orders_orders__vBR4c"
};


/***/ }),

/***/ 466:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 9786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



/***/ }),

/***/ 7692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ orders),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "firebase-admin"
var external_firebase_admin_ = __webpack_require__(2509);
// EXTERNAL MODULE: ./firebase/declarations/enums.ts
var enums = __webpack_require__(5710);
// EXTERNAL MODULE: ./styles/pages/OrdersPage.module.scss
var OrdersPage_module = __webpack_require__(466);
var OrdersPage_module_default = /*#__PURE__*/__webpack_require__.n(OrdersPage_module);
;// CONCATENATED MODULE: ./controllers/api/validation/parseTokenString.ts

const parseTokenString = (tokenString)=>{
    const tokenSplit = tokenString.split(' ');
    return {
        pre: tokenSplit === null || tokenSplit === void 0 ? void 0 : tokenSplit[0],
        tokenString: tokenSplit === null || tokenSplit === void 0 ? void 0 : tokenSplit[1]
    };
};

// EXTERNAL MODULE: ./controllers/getLang.ts + 2 modules
var getLang = __webpack_require__(2242);
// EXTERNAL MODULE: ./components/Headers/OrdersHeader/OrdersHeader.module.scss
var OrdersHeader_module = __webpack_require__(5196);
var OrdersHeader_module_default = /*#__PURE__*/__webpack_require__.n(OrdersHeader_module);
;// CONCATENATED MODULE: ./components/Headers/OrdersHeader/OrdersHeader.tsx




const OrdersHeader = ({ className  })=>{
    const lang = (0,getLang/* getLang */.V)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: [
            (OrdersHeader_module_default())["orders-header"],
            className
        ].join(' '),
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            style: {
                marginBottom: '1rem'
            },
            children: lang.myOrders
        })
    }));
};
/* harmony default export */ const OrdersHeader_OrdersHeader = (OrdersHeader);

;// CONCATENATED MODULE: ./controllers/text/firstToUpper.ts

const firstToUpper = (text)=>text.slice(0, 1).toUpperCase() + text.slice(1, text.length).toLowerCase()
;

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./components/Cards/OrderCard/OrderCard.module.scss
var OrderCard_module = __webpack_require__(4611);
var OrderCard_module_default = /*#__PURE__*/__webpack_require__.n(OrderCard_module);
;// CONCATENATED MODULE: ./components/Cards/OrderCard/OrderCard.tsx







const OrderCard = ({ order , index: index1 , className , ...rest })=>{
    const lang = (0,getLang/* getLang */.V)();
    const { app: { currency , restaurants  } ,  } = (0,external_react_redux_.useSelector)(({ app  })=>({
            app
        })
    );
    const { uid: uid1 , status , items , total , date , restaurant: restaurantUid  } = order;
    const orderDate = new Date(date);
    const totalItems = external_react_default().useMemo(()=>items.reduce((curr, acc)=>curr += acc.quantity
        , 0)
    , [
        items.length
    ]);
    const restaurantName = external_react_default().useMemo(()=>{
        var ref, ref1;
        return (ref = restaurants === null || restaurants === void 0 ? void 0 : restaurants.filter((location)=>location.uid === restaurantUid
        )) === null || ref === void 0 ? void 0 : (ref1 = ref[0]) === null || ref1 === void 0 ? void 0 : ref1.name;
    }, [
        restaurants === null || restaurants === void 0 ? void 0 : restaurants.length,
        restaurantUid
    ]);
    const isPending = status === enums/* ORDER_STATUS.PENDING */.DF.PENDING;
    const isAccepted = status === enums/* ORDER_STATUS.ACCEPTED */.DF.ACCEPTED;
    const isCompleted = status === enums/* ORDER_STATUS.COMPLETED */.DF.COMPLETED;
    const isCanceled = status === enums/* ORDER_STATUS.CANCELED */.DF.CANCELED;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: [
            (OrderCard_module_default())["order-card"],
            className
        ].join(' '),
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (OrderCard_module_default())["order-card-body"],
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (OrderCard_module_default())["order-card-body-restaurant-name"],
                    children: restaurantName
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: (OrderCard_module_default())["order-card-body-order-number"],
                    children: [
                        lang.orderNo,
                        uid1.slice(0, 5)
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    suppressHydrationWarning: true,
                    className: (OrderCard_module_default())["order-card-body-order-date"],
                    children: orderDate.toLocaleString(undefined, {
                        day: '2-digit',
                        month: 'short',
                        hour: '2-digit',
                        year: 'numeric',
                        minute: '2-digit',
                        hour12: false
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (OrderCard_module_default())["order-card-body-items"],
                    children: items.map(({ uid , name , description , quantity , price  }, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    style: {
                                        display: 'flex',
                                        gap: '.35rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "x",
                                                quantity
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: name
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: description
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        price * quantity,
                                        " ",
                                        currency
                                    ]
                                })
                            ]
                        }, uid + index)
                    )
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1rem'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: (OrderCard_module_default())["order-card-body-items-count"],
                                    children: [
                                        "x",
                                        totalItems,
                                        " ",
                                        lang.items
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: (OrderCard_module_default())["order-card-body-total"],
                                    children: [
                                        lang.total,
                                        ": ",
                                        total,
                                        " ",
                                        currency
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                color: isPending ? '#e0e400' : isAccepted ? '#a7e400' : isCompleted ? '#2ee400' : isCanceled ? '#e40000' : '#333'
                            },
                            className: (OrderCard_module_default())["order-card-body-order-status"],
                            children: firstToUpper(status)
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const OrderCard_OrderCard = (OrderCard);

// EXTERNAL MODULE: ./modules/Orders/Orders.module.scss
var Orders_module = __webpack_require__(5867);
var Orders_module_default = /*#__PURE__*/__webpack_require__.n(Orders_module);
;// CONCATENATED MODULE: ./modules/Orders/Orders.tsx




const Orders = ({ orders , className , ...rest })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: [
            (Orders_module_default()).orders,
            className
        ].join(' '),
        ...rest,
        children: orders.map((order, index)=>/*#__PURE__*/ jsx_runtime_.jsx(OrderCard_OrderCard, {
                order: order,
                index: index
            }, `order_key_${index}`)
        )
    }));
};
/* harmony default export */ const Orders_Orders = (Orders);

// EXTERNAL MODULE: ./firebase/initServerApp.ts
var initServerApp = __webpack_require__(9786);
;// CONCATENATED MODULE: ./controllers/api/get/getOrdersByUidServerSide.ts



const getOrdersByUidServerSide = async (uid)=>{
    try {
        const ordersCol = initServerApp/* firestore.collection */.RZ.collection(enums/* COLLECTIONS.ORDERS */.Ul.ORDERS);
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

;// CONCATENATED MODULE: ./pages/orders.tsx








// import { firestore } from '#firebase/initServerApp';

const OrdersPage = ({ orders  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: [
            'container',
            (OrdersPage_module_default())["orders-page"]
        ].join(' '),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(OrdersHeader_OrdersHeader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Orders_Orders, {
                orders: orders
            })
        ]
    }));
};
const getServerSideProps = async ({ req  })=>{
    try {
        var ref;
        const token = (ref = req.cookies) === null || ref === void 0 ? void 0 : ref[enums/* COOKIE_NAMES.TOKEN */.HR.TOKEN];
        if (!token) return {
            redirect: {
                destination: '/',
                statusCode: 301
            }
        };
        const checkRevoked = true;
        const { tokenString  } = parseTokenString(token);
        const { uid  } = await (0,external_firebase_admin_.auth)().verifyIdToken(tokenString, checkRevoked);
        const { orders  } = await getOrdersByUidServerSide(uid);
        // const ordersCol = firestore.collection(COLLECTIONS.ORDERS);
        // const ordersQuery = await ordersCol.where('client', '==', uid as string).get();
        // if (ordersQuery.empty) {
        // 	return {
        // 		notFound: true,
        // 	};
        // }
        // const orders = ordersQuery.docs.map(doc => doc.data() as OrderSchema).sort((a, b) => b.date - a.date);
        return {
            props: {
                orders
            }
        };
    } catch ({ code , message  }) {
        console.warn('get server side props fail:', code, message);
        return {
            props: {
                orders: []
            }
        };
    }
};
/* harmony default export */ const orders = (OrdersPage);


/***/ }),

/***/ 3582:
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ 2509:
/***/ ((module) => {

"use strict";
module.exports = require("firebase-admin");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [242,413], () => (__webpack_exec__(7692)));
module.exports = __webpack_exports__;

})();