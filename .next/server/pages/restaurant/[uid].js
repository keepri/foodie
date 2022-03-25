(() => {
var exports = {};
exports.id = 476;
exports.ids = [476];
exports.modules = {

/***/ 5325:
/***/ ((module) => {

// Exports
module.exports = {
	"item-card": "ItemCard_item-card__iKet2",
	"item-card-body": "ItemCard_item-card-body__8Ml1H",
	"item-card-photo": "ItemCard_item-card-photo__9fiz4",
	"item-card-body-name": "ItemCard_item-card-body-name__vQ2Pf",
	"item-card-body-description": "ItemCard_item-card-body-description__yIbYy",
	"item-card-body-price": "ItemCard_item-card-body-price__MMaXt",
	"item-card-body-bottom-container": "ItemCard_item-card-body-bottom-container__AZr_S",
	"item-card-in-cart": "ItemCard_item-card-in-cart__B__8w"
};


/***/ }),

/***/ 4030:
/***/ ((module) => {

// Exports
module.exports = {
	"restaurant-header": "RestaurantHeader_restaurant-header__ozY_S",
	"restaurant-header-address": "RestaurantHeader_restaurant-header-address__JXAFK",
	"restaurant-header-description": "RestaurantHeader_restaurant-header-description__dz_LX",
	"restaurant-header-info": "RestaurantHeader_restaurant-header-info__eeIQl",
	"restaurant-header-content": "RestaurantHeader_restaurant-header-content__8pjqk",
	"restaurant-header-closed": "RestaurantHeader_restaurant-header-closed__dUkCG",
	"restaurant-header-closed-text": "RestaurantHeader_restaurant-header-closed-text__sjbBb"
};


/***/ }),

/***/ 980:
/***/ ((module) => {

// Exports
module.exports = {
	"pill": "Pill_pill__lrz9o"
};


/***/ }),

/***/ 5010:
/***/ ((module) => {

// Exports
module.exports = {
	"menu-category": "Menu_menu-category__IvLHX",
	"menu-category-items": "Menu_menu-category-items__th3N_"
};


/***/ }),

/***/ 2544:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var _ItemCard_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5325);
/* harmony import */ var _ItemCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ItemCard_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7413);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5710);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9391);
/* harmony import */ var _firebase_client_functions_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7996);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_actions__WEBPACK_IMPORTED_MODULE_6__, _firebase_client_functions_get__WEBPACK_IMPORTED_MODULE_7__]);
([_redux_actions__WEBPACK_IMPORTED_MODULE_6__, _firebase_client_functions_get__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ItemCard = ({ className , item: item1 , index , onItemNotAv , ...rest })=>{
    const { app: { currency , selectedRestaurant  } , cart: { items , restaurant: restaurantUid  } ,  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(({ app , cart  })=>({
            app,
            cart
        })
    );
    const { addItemCart , resetCart , setRestaurantUidCart  } = (0,_redux_actions__WEBPACK_IMPORTED_MODULE_6__/* .useCartActions */ .gV)();
    const { uid , status , photo , name , description , price  } = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>({
            uid: item1.uid,
            status: item1.status,
            photo: item1.photo,
            name: item1.name,
            description: item1.description,
            price: item1.price
        })
    , [
        item1.uid,
        item1.status,
        item1.photo,
        item1.name,
        item1.description,
        item1.price
    ]);
    const restaurantIsOpen = (selectedRestaurant === null || selectedRestaurant === void 0 ? void 0 : selectedRestaurant.status) === _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_5__/* .RESTAURANT_STATUS.OPEN */ .AX.OPEN;
    const itemIsUnavailable = status === _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_5__/* .MENU_ITEM_STATUS.UNAVAILABLE */ .zO.UNAVAILABLE;
    const itemIsInCart = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>items.some((item)=>item.uid === uid
        )
    , [
        items,
        uid
    ]);
    const handleAddToCart = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(async (e)=>{
        e.stopPropagation();
        if (itemIsInCart || !restaurantIsOpen || itemIsUnavailable) {
            return;
        }
        var ref;
        const itemStatusDb = await (0,_firebase_client_functions_get__WEBPACK_IMPORTED_MODULE_7__/* .getMenuItemStatus */ .Z)((ref = selectedRestaurant === null || selectedRestaurant === void 0 ? void 0 : selectedRestaurant.uid) !== null && ref !== void 0 ? ref : '', item1.uid);
        if (!itemStatusDb) {
            item1.status = _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_5__/* .MENU_ITEM_STATUS.UNAVAILABLE */ .zO.UNAVAILABLE;
            onItemNotAv && onItemNotAv();
            return;
        }
        if ((selectedRestaurant === null || selectedRestaurant === void 0 ? void 0 : selectedRestaurant.uid) !== restaurantUid) {
            console.log('Tried adding item from another restaurant');
            var ref1;
            // TODO - handle adding item from another restaurant warning modal (clear);
            confirm('You have items inside your cart that are from another restaurant. Do you wish to reset the cart and add the new item?') && (resetCart(), setRestaurantUidCart((ref1 = selectedRestaurant === null || selectedRestaurant === void 0 ? void 0 : selectedRestaurant.uid) !== null && ref1 !== void 0 ? ref1 : ''), addItemCart(item1, 1));
            return;
        }
        addItemCart(item1, 1);
    }, [
        item1,
        itemIsInCart,
        itemIsUnavailable,
        restaurantIsOpen,
        restaurantUid,
        selectedRestaurant === null || selectedRestaurant === void 0 ? void 0 : selectedRestaurant.uid,
        onItemNotAv, 
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: [
            (_ItemCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["item-card"]),
            itemIsInCart && (_ItemCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["item-card-in-cart"]),
            className
        ].join(' '),
        onMouseUp: (e)=>handleAddToCart(e)
        ,
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ItemCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["item-card-photo"]),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    layout: "fill",
                    objectFit: "cover",
                    objectPosition: "center",
                    src: photo && photo !== '' ? photo : _utils_misc__WEBPACK_IMPORTED_MODULE_3__/* .defaultItemPhoto */ .IX,
                    alt: "menu-item-photo"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    borderColor: itemIsUnavailable ? 'rgba(255, 0, 0, .2)' : 'rgb(219, 219, 219)'
                },
                className: (_ItemCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["item-card-body"]),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                        className: (_ItemCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["item-card-body-name"]),
                        children: [
                            name,
                            itemIsInCart && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    ' ',
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        src: '/images/icons/checked.svg',
                                        alt: "added",
                                        width: 15,
                                        height: 15
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        style: {
                            maxWidth: '18rem'
                        },
                        className: (_ItemCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["item-card-body-description"]),
                        children: description
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: 'flex',
                            marginTop: 'auto',
                            gap: '1rem',
                            justifyContent: 'space-between'
                        },
                        className: (_ItemCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["item-card-body-bottom-container"]),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (_ItemCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["item-card-body-price"]),
                                style: {
                                    fontWeight: 'bold'
                                },
                                children: [
                                    price,
                                    " ",
                                    currency
                                ]
                            }),
                            !itemIsInCart && restaurantIsOpen && !itemIsUnavailable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                width: 15,
                                height: 15,
                                src: '/images/icons/plus.svg',
                                alt: "add",
                                onMouseUp: (e)=>handleAddToCart(e)
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ RestaurantHeader_RestaurantHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./controllers/getLang.ts + 2 modules
var getLang = __webpack_require__(2242);
// EXTERNAL MODULE: ./firebase/declarations/enums.ts
var enums = __webpack_require__(5710);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./components/Headers/RestaurantHeader/RestaurantHeader.module.scss
var RestaurantHeader_module = __webpack_require__(4030);
var RestaurantHeader_module_default = /*#__PURE__*/__webpack_require__.n(RestaurantHeader_module);
// EXTERNAL MODULE: ./components/Pill/Pill.module.scss
var Pill_module = __webpack_require__(980);
var Pill_module_default = /*#__PURE__*/__webpack_require__.n(Pill_module);
;// CONCATENATED MODULE: ./components/Pill/Pill.tsx



const Pill = ({ className , boldLabel , boldInfo , label , info , type , ...rest })=>{
    const horizontal = type === 'horizontal';
    label = label ? horizontal ? label + ': ' : label + ':' : undefined;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            flexDirection: horizontal ? 'row' : 'column'
        },
        className: [
            (Pill_module_default()).pill,
            className
        ].join(' '),
        ...rest,
        children: label ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                    children: boldLabel ? /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: label
                    }) : label
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                    children: boldInfo ? /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: info
                    }) : info
                })
            ]
        }) : boldInfo ? /*#__PURE__*/ jsx_runtime_.jsx("small", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                children: info
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx("small", {
            children: info
        })
    }));
};
/* harmony default export */ const Pill_Pill = (Pill);

;// CONCATENATED MODULE: ./components/Headers/RestaurantHeader/RestaurantHeader.tsx








const RestaurantHeader = ({ className , restaurant , ...rest })=>{
    const lang = (0,getLang/* getLang */.V)();
    const { app: { currency  } ,  } = (0,external_react_redux_.useSelector)(({ app  })=>({
            app
        })
    );
    const { status , name , addresses , costs , // hours,
    photo , logo , description ,  } = restaurant;
    const { county , city , street , number  } = addresses[0];
    const { packaging , delivery , minOrder  } = costs;
    const deliveryFee = delivery === 0 ? lang.free : delivery + ` ${currency}`;
    const restaurantIsOpen = status === enums/* RESTAURANT_STATUS.OPEN */.AX.OPEN;
    const restaurantIsClosed = status === enums/* RESTAURANT_STATUS.CLOSED */.AX.CLOSED;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: [
            (RestaurantHeader_module_default())["restaurant-header"],
            !restaurantIsOpen && (RestaurantHeader_module_default())["restaurant-header-closed"],
            className, 
        ].join(' '),
        ...rest,
        children: [
            !restaurantIsOpen && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (RestaurantHeader_module_default())["restaurant-header-closed-text"],
                children: restaurantIsClosed ? lang.closed : lang.unavailable
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                objectFit: "cover",
                objectPosition: "center",
                width: 1440,
                height: 400,
                src: photo,
                alt: "restaurant photo"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (RestaurantHeader_module_default())["restaurant-header-content"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        width: 60,
                        height: 60,
                        src: logo,
                        objectFit: "contain",
                        objectPosition: "center",
                        alt: "restaurant photo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: name
                    }),
                    description && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (RestaurantHeader_module_default())["restaurant-header-description"],
                        children: description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: (RestaurantHeader_module_default())["restaurant-header-address"],
                        children: [
                            county,
                            ", ",
                            city,
                            ",",
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    street,
                                    " ",
                                    number
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (RestaurantHeader_module_default())["restaurant-header-info"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Pill_Pill, {
                                boldInfo: true,
                                type: "horizontal",
                                label: lang.minOrder,
                                info: `${minOrder} ${currency}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Pill_Pill, {
                                boldInfo: true,
                                type: "horizontal",
                                label: lang.delivery,
                                info: deliveryFee
                            }),
                            packaging && packaging !== 0 && /*#__PURE__*/ jsx_runtime_.jsx(Pill_Pill, {
                                boldInfo: true,
                                type: "horizontal",
                                label: lang.packaging,
                                info: `${packaging} ${currency}`
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const RestaurantHeader_RestaurantHeader = (RestaurantHeader);


/***/ }),

/***/ 9875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ getMenuByUidServerSide)
/* harmony export */ });
/* harmony import */ var _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5710);
/* harmony import */ var _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9786);



const getMenuByUidServerSide = async (uid)=>{
    try {
        const menuDoc = await _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__/* .firestore.collection */ .RZ.collection(_firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.MENUS */ .Ul.MENUS).doc(uid).get();
        const menu = menuDoc.data();
        return {
            menu
        };
    } catch (error) {
        throw error;
    }
};


/***/ }),

/***/ 3236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ getRestaurantByUidServerSide)
/* harmony export */ });
/* harmony import */ var _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5710);
/* harmony import */ var _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9786);



const getRestaurantByUidServerSide = async (uid)=>{
    try {
        const restaurantDoc = await _firebase_initServerApp__WEBPACK_IMPORTED_MODULE_1__/* .firestore.collection */ .RZ.collection(_firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_0__/* .COLLECTIONS.RESTAURANTS */ .Ul.RESTAURANTS).doc(uid).get();
        const restaurant = restaurantDoc.data();
        return {
            restaurant
        };
    } catch (error) {
        throw error;
    }
};


/***/ }),

/***/ 7996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getMenuItemStatus)
/* harmony export */ });
/* unused harmony export firebaseGetDocClientSide */
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
/* harmony import */ var _firebase_initClientApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5710);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _firebase_initClientApp__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _firebase_initClientApp__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const firebaseGetDocClientSide = async (collectionName, docId)=>{
    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_initClientApp__WEBPACK_IMPORTED_MODULE_1__/* .firestoreRef */ .Q6, `${collectionName}/${docId}`);
    try {
        const doc1 = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(docRef);
        if (!doc1.exists()) return;
        return doc1.data();
    } catch (error) {
        console.warn('firebase function failed with:', error);
        throw error;
    }
};
// TODO WORK IN PROGRESS
const getMenuItemStatus = async (restaurantUid, menuItemUid)=>{
    if (!menuItemUid || !restaurantUid) return;
    try {
        const menu = await firebaseGetDocClientSide(_firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_2__/* .COLLECTIONS.MENUS */ .Ul.MENUS, `${restaurantUid}`);
        if (!menu) return false;
        const menuItem = menu.categories.reduce((item1, category)=>{
            const found = category.items.find((item)=>item.uid === menuItemUid
            );
            if (found) item1 = found;
            return item1;
        }, {});
        const menuItemIsAvailable = menuItem.status === _firebase_declarations_enums__WEBPACK_IMPORTED_MODULE_2__/* .MENU_ITEM_STATUS.AVAILABLE */ .zO.AVAILABLE;
        return menuItemIsAvailable;
    } catch (error) {
        console.warn('firestore get menu item status failed with:', error);
        return false;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4723:
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
/* harmony import */ var _Menu_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5010);
/* harmony import */ var _Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Cards_ItemCard_ItemCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2544);
/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8987);
/* harmony import */ var _controllers_getLang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2242);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Cards_ItemCard_ItemCard__WEBPACK_IMPORTED_MODULE_2__]);
_components_Cards_ItemCard_ItemCard__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Menu = ({ className , menu , ...rest })=>{
    const lang = (0,_controllers_getLang__WEBPACK_IMPORTED_MODULE_4__/* .getLang */ .V)();
    const { categories  } = menu;
    const [itemNotAv, setItemNotAv] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const handleItemNotAv = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(()=>{
        setItemNotAv(true);
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: [
            (_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().menu),
            className
        ].join(' '),
        ...rest,
        children: [
            categories.map(({ name , items  }, index1)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["menu-category"]),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            style: {
                                marginBottom: '2rem',
                                marginTop: '4rem'
                            },
                            children: name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["menu-category-items"]),
                            children: items.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cards_ItemCard_ItemCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    index: index,
                                    item: item,
                                    onItemNotAv: handleItemNotAv
                                }, `category_${name}_item_${index}`)
                            )
                        })
                    ]
                }, `category_${index1}`)
            ),
            itemNotAv && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: lang.itemNotAvTitle,
                body: lang.itemNotAvBody,
                setModal: setItemNotAv
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9391);
/* harmony import */ var _modules_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4723);
/* harmony import */ var _components_Headers_RestaurantHeader_RestaurantHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2339);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _controllers_api_get_getRestaurantByUidServerSide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3236);
/* harmony import */ var _controllers_api_get_getMenuByUidServerSide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9875);
/* harmony import */ var _controllers_api_get_getRestaurantsServerSide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2833);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_actions__WEBPACK_IMPORTED_MODULE_3__, _modules_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__]);
([_redux_actions__WEBPACK_IMPORTED_MODULE_3__, _modules_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const RestaurantPage = ({ restaurant , menu  })=>{
    const { isFallback  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { cart: { items , restaurant: cartRestaurantUid  } ,  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(({ cart  })=>({
            cart
        })
    );
    const { setRestaurantUidCart  } = (0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__/* .useCartActions */ .gV)();
    const { setSelectedRestaurantApp  } = (0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__/* .useAppActions */ .rO)();
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (!isFallback) {
            items.length === 0 && cartRestaurantUid !== restaurant.uid && setRestaurantUidCart(restaurant.uid);
            setSelectedRestaurantApp(restaurant);
        }
        return ()=>{
            setSelectedRestaurantApp(null);
        };
    }, [
        restaurant
    ]);
    if (isFallback) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: "container",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "TEMP - Loading... - TEMP"
            })
        })
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Headers_RestaurantHeader_RestaurantHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                restaurant: restaurant
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                menu: menu
            })
        ]
    }));
};
const getStaticPaths = async ({})=>{
    try {
        const { restaurants  } = await (0,_controllers_api_get_getRestaurantsServerSide__WEBPACK_IMPORTED_MODULE_9__/* .getRestaurantsServerSide */ .w)();
        const paths = restaurants.map((restaurant)=>({
                params: {
                    uid: restaurant.uid
                }
            })
        );
        return {
            paths,
            fallback: true
        };
    } catch ({ message  }) {
        console.error('getStaticPaths in restaurant page:', message);
        return {
            paths: [],
            fallback: true
        };
    }
};
const getStaticProps = async ({ params  })=>{
    const { uid  } = params;
    if (!uid) return {
        notFound: true
    };
    try {
        const { restaurant  } = await (0,_controllers_api_get_getRestaurantByUidServerSide__WEBPACK_IMPORTED_MODULE_7__/* .getRestaurantByUidServerSide */ .v)(uid);
        let { menu  } = await (0,_controllers_api_get_getMenuByUidServerSide__WEBPACK_IMPORTED_MODULE_8__/* .getMenuByUidServerSide */ .d)('EJQpn8wM19qiqNoqaQhM'); // was uid - TODO
        menu = {
            ...menu,
            categories: [
                {
                    ...menu.categories[0],
                    items: [
                        {
                            ...menu.categories[0].items[0],
                            uid: 'kaljsdhfadklsjfhdsa'
                        },
                        {
                            ...menu.categories[0].items[0],
                            uid: 'jksdalfhkjldshfdas'
                        },
                        {
                            ...menu.categories[0].items[0],
                            uid: 'kjlasdhfakjldsh'
                        },
                        {
                            ...menu.categories[0].items[0],
                            uid: 'lksdajfaldskfhjdsklafds'
                        }, 
                    ]
                },
                {
                    ...menu.categories[0],
                    items: [
                        {
                            ...menu.categories[0].items[0],
                            uid: 'jkalsdhfkaljsdhfkjsda'
                        },
                        {
                            ...menu.categories[0].items[0],
                            uid: 'jkalhfdkldshfdsalkjfds'
                        },
                        {
                            ...menu.categories[0].items[0],
                            uid: 'sdkjlfhdskjlfadsklj'
                        },
                        {
                            ...menu.categories[0].items[0],
                            uid: 'kaljsdhgfkjlasd'
                        }, 
                    ]
                }, 
            ]
        };
        return {
            props: {
                restaurant,
                menu
            },
            revalidate: 60 * 5
        };
    } catch ({ message  }) {
        console.error('getStaticProps in restaurant page:', message);
        return {
            notFound: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RestaurantPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 2509:
/***/ ((module) => {

"use strict";
module.exports = require("firebase-admin");

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

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [628,675,242,413,391,987,833], () => (__webpack_exec__(6238)));
module.exports = __webpack_exports__;

})();