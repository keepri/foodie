(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1328:
/***/ ((module) => {

// Exports
module.exports = {
	"double-card": "RestaurantCard_double-card__mHFwl",
	"double-card-content": "RestaurantCard_double-card-content__78s79",
	"double-card-photo": "RestaurantCard_double-card-photo__8GmgX",
	"double-card-content-logo": "RestaurantCard_double-card-content-logo__8lbbC",
	"double-card-content-info": "RestaurantCard_double-card-content-info__O7ykp",
	"restaurant-info": "RestaurantCard_restaurant-info__NjXJ1",
	"double-card-disabled-text": "RestaurantCard_double-card-disabled-text__ZbQhc",
	"double-card-disabled": "RestaurantCard_double-card-disabled__5aibC"
};


/***/ }),

/***/ 7456:
/***/ ((module) => {

// Exports
module.exports = {
	"rating-indicator": "RatingIndicator_rating-indicator__qBG9c",
	"rating-indicator-number": "RatingIndicator_rating-indicator-number__w736G"
};


/***/ }),

/***/ 2553:
/***/ ((module) => {

// Exports
module.exports = {
	"restaurants": "Restaurants_restaurants__PxiGO",
	"restaurants-content": "Restaurants_restaurants-content__DLCVt"
};


/***/ }),

/***/ 421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Restaurants_Restaurants)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/RatingIndicator/RatingIndicator.module.scss
var RatingIndicator_module = __webpack_require__(7456);
var RatingIndicator_module_default = /*#__PURE__*/__webpack_require__.n(RatingIndicator_module);
;// CONCATENATED MODULE: ./components/RatingIndicator/RatingIndicator.tsx




const RatingIndicator = ({ rating , type , compact , className , ...rest })=>{
    const noOfIndicators = new Array(5).fill('');
    const indicatorSize = type === 'small' ? 15 : 25;
    const indicatorSizeCompact = 12;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            gap: indicatorSize * 0.25
        },
        className: [
            (RatingIndicator_module_default())["rating-indicator"],
            className
        ].join(' '),
        ...rest,
        children: compact ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (RatingIndicator_module_default())["rating-indicator-number"],
                    children: rating
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: '/images/icons/star-filled.png',
                    width: indicatorSizeCompact,
                    height: indicatorSizeCompact,
                    objectFit: "contain",
                    objectPosition: "center",
                    alt: "star-filled"
                })
            ]
        }) : noOfIndicators.map((_, index)=>index < rating ? /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: '/images/icons/star-filled.png',
                width: indicatorSize,
                height: indicatorSize,
                objectFit: "contain",
                objectPosition: "center",
                alt: "star-filled"
            }) : /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: '/images/icons/star-empty.png',
                width: indicatorSize,
                height: indicatorSize,
                objectFit: "contain",
                objectPosition: "center",
                alt: "star-empty"
            })
        )
    }));
};
/* harmony default export */ const RatingIndicator_RatingIndicator = (RatingIndicator);

// EXTERNAL MODULE: ./firebase/declarations/enums.ts
var enums = __webpack_require__(5710);
// EXTERNAL MODULE: ./utils/misc.ts + 3 modules
var misc = __webpack_require__(7413);
// EXTERNAL MODULE: ./components/Cards/RestaurantCard/RestaurantCard.module.scss
var RestaurantCard_module = __webpack_require__(1328);
var RestaurantCard_module_default = /*#__PURE__*/__webpack_require__.n(RestaurantCard_module);
// EXTERNAL MODULE: ./controllers/getLang.ts + 2 modules
var getLang = __webpack_require__(2242);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Cards/RestaurantCard/RestaurantCard.tsx









const RestaurantCard = ({ className , restaurant , ...rest })=>{
    const lang = (0,getLang/* getLang */.V)();
    const { push  } = (0,router_.useRouter)();
    const { uid , status , name , costs , rating , photo , logo  } = restaurant;
    const { minOrder , delivery  } = costs;
    const { current: logoSize  } = external_react_default().useRef(60);
    const unavailable = status === enums/* RESTAURANT_STATUS.CLOSED */.AX.CLOSED || status === enums/* RESTAURANT_STATUS.UNAVAILABLE */.AX.UNAVAILABLE;
    // const photoWidth = 310;
    const handleNav = external_react_default().useCallback(()=>{
        push(`${misc/* URLS.RESTAURANT */.ns.RESTAURANT}/${uid}`);
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onMouseUp: handleNav,
        className: [
            (RestaurantCard_module_default())["double-card"],
            unavailable && (RestaurantCard_module_default())["double-card-disabled"],
            className
        ].join(' '),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (RestaurantCard_module_default())["double-card-photo"],
                children: [
                    status === enums/* RESTAURANT_STATUS.CLOSED */.AX.CLOSED && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (RestaurantCard_module_default())["double-card-disabled-text"],
                        children: lang.closed
                    }),
                    status === enums/* RESTAURANT_STATUS.UNAVAILABLE */.AX.UNAVAILABLE && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (RestaurantCard_module_default())["double-card-disabled-text"],
                        children: lang.unavailable
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        width: 400,
                        height: 180,
                        objectFit: "cover",
                        objectPosition: "center",
                        src: photo && photo !== '' ? photo : misc/* defaultRestaurantPhoto */.Un,
                        alt: "restaurant-photo"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    borderColor: unavailable ? 'rgba(255, 0, 0, .2)' : 'rgb(219, 219, 219)'
                },
                className: (RestaurantCard_module_default())["double-card-content"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            width: logoSize,
                            height: logoSize
                        },
                        className: (RestaurantCard_module_default())["double-card-content-logo"],
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: logo && logo !== '' ? logo : misc/* defaultRestaurantLogo */.DE,
                            alt: "restaurant logo",
                            width: logoSize,
                            height: logoSize,
                            objectFit: "contain"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (RestaurantCard_module_default())["double-card-content-info"],
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                children: [
                                    name,
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(RatingIndicator_RatingIndicator, {
                                        compact: true,
                                        type: "small",
                                        rating: rating
                                    })
                                ]
                            }),
                            minOrder !== undefined && minOrder !== 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: (RestaurantCard_module_default())["restaurant-info"],
                                children: [
                                    lang.minOrder,
                                    ": ",
                                    minOrder,
                                    " RON"
                                ]
                            }),
                            delivery !== undefined && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: (RestaurantCard_module_default())["restaurant-info"],
                                children: [
                                    lang.delivery,
                                    ": ",
                                    delivery === 0 ? lang.free : `${delivery} RON`
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const RestaurantCard_RestaurantCard = (RestaurantCard);

// EXTERNAL MODULE: ./modules/Restaurants/Restaurants.module.scss
var Restaurants_module = __webpack_require__(2553);
var Restaurants_module_default = /*#__PURE__*/__webpack_require__.n(Restaurants_module);
;// CONCATENATED MODULE: ./modules/Restaurants/Restaurants.tsx




const Restaurants = ({ className , restaurants , ...rest })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: [
            (Restaurants_module_default()).restaurants,
            className
        ].join(' '),
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Restaurants"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Restaurants_module_default())["restaurants-content"],
                children: restaurants.map((restaurant, index)=>/*#__PURE__*/ jsx_runtime_.jsx(RestaurantCard_RestaurantCard, {
                        restaurant: restaurant
                    }, restaurant.uid + index)
                )
            })
        ]
    }));
};
/* harmony default export */ const Restaurants_Restaurants = (Restaurants);


/***/ }),

/***/ 5075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9391);
/* harmony import */ var _modules_Restaurants_Restaurants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(421);
/* harmony import */ var _controllers_api_get_getRestaurantsServerSide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2833);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_actions__WEBPACK_IMPORTED_MODULE_2__]);
_redux_actions__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Index = ({ restaurants  })=>{
    const { setRestaurantsApp , loadRestaurants  } = (0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__/* .useAppActions */ .rO)();
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        restaurants && restaurants.length === 0 ? loadRestaurants() : setRestaurantsApp(restaurants);
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: "container",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_Restaurants_Restaurants__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            restaurants: restaurants
        })
    }));
};
const getStaticProps = async ({})=>{
    try {
        const { restaurants  } = await (0,_controllers_api_get_getRestaurantsServerSide__WEBPACK_IMPORTED_MODULE_4__/* .getRestaurantsServerSide */ .w)();
        return {
            props: {
                restaurants
            },
            revalidate: 1440
        };
    } catch (error) {
        console.log('Get static props failed with:', error);
        return {
            notFound: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [628,675,242,413,391,833], () => (__webpack_exec__(5075)));
module.exports = __webpack_exports__;

})();