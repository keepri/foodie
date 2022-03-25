exports.id = 987;
exports.ids = [987];
exports.modules = {

/***/ 9883:
/***/ ((module) => {

// Exports
module.exports = {
	"modal": "Modal_modal__77o1K",
	"modal-content": "Modal_modal-content___6lVF",
	"modal-header": "Modal_modal-header__CUQlY",
	"title": "Modal_title____nhr",
	"modal-body": "Modal_modal-body__DSFB2"
};


/***/ }),

/***/ 8987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Modal_Modal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./utils/misc.ts + 3 modules
var misc = __webpack_require__(7413);
;// CONCATENATED MODULE: ./controllers/closeWithEsc.ts
/* eslint-disable react-hooks/rules-of-hooks */ 


/** add functionality to close by pressing escape key */ const closeWithEsc = (handleClose)=>{
    external_react_default().useEffect(()=>{
        document.onkeyup = misc/* isClientSide */.S_ ? (e)=>e.code === 'Escape' && (handleClose(), console.log(e.code))
         : null;
        return ()=>{
            document.onkeyup = null;
        };
    }, []);
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/Modal/Modal.module.scss
var Modal_module = __webpack_require__(9883);
var Modal_module_default = /*#__PURE__*/__webpack_require__.n(Modal_module);
;// CONCATENATED MODULE: ./components/Modal/Modal.tsx





const Modal = ({ children , className , title , titleDescription , body , setModal , onModalClose , ...rest })=>{
    const handleClose = external_react_default().useCallback(()=>setModal(false)
    , []);
    closeWithEsc(handleClose);
    external_react_default().useEffect(()=>{
        return ()=>{
            onModalClose && onModalClose();
        };
    }, [
        onModalClose
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        onMouseUp: ()=>handleClose()
        ,
        className: [
            (Modal_module_default()).modal,
            className
        ].join(' '),
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            onMouseUp: (e)=>(e.stopPropagation(), e.nativeEvent.stopImmediatePropagation())
            ,
            className: (Modal_module_default())["modal-content"],
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: (Modal_module_default())["modal-header"],
                    children: [
                        title && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Modal_module_default()).title,
                            children: [
                                titleDescription && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: titleDescription
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: title
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: '/images/icons/close.png',
                            width: 20,
                            height: 20,
                            objectFit: "contain",
                            alt: "close",
                            onMouseUp: ()=>handleClose()
                        })
                    ]
                }),
                (children || body) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: (Modal_module_default())["modal-body"],
                    children: [
                        body && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: body
                        }),
                        children
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const Modal_Modal = (Modal);


/***/ })

};
;