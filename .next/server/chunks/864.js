"use strict";
exports.id = 864;
exports.ids = [864];
exports.modules = {

/***/ 864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ verifyToken)
});

// EXTERNAL MODULE: ./firebase/declarations/enums.ts
var enums = __webpack_require__(167);
// EXTERNAL MODULE: ./firebase/initServerApp.ts
var initServerApp = __webpack_require__(3728);
;// CONCATENATED MODULE: ./controllers/api/validation/parseTokenString.ts

const parseTokenString = (tokenString)=>{
    const tokenSplit = tokenString.split(' ');
    return {
        pre: tokenSplit === null || tokenSplit === void 0 ? void 0 : tokenSplit[0],
        tokenString: tokenSplit === null || tokenSplit === void 0 ? void 0 : tokenSplit[1]
    };
};

;// CONCATENATED MODULE: ./controllers/api/validation/verifyToken.ts




const verifyToken = async (req)=>{
    try {
        var ref;
        const token = (ref = req.cookies) === null || ref === void 0 ? void 0 : ref[enums/* COOKIE_NAMES.TOKEN */.HR.TOKEN];
        if (!token) {
            // res.status(401).json({ message: MESSAGES.UNAUTHORIZED_NO_TOKEN });
            throw Error(enums/* MESSAGES.UNAUTHORIZED_NO_TOKEN */.X3.UNAUTHORIZED_NO_TOKEN);
        }
        const checkRevoked = true;
        const { pre , tokenString  } = parseTokenString(token);
        if (pre !== 'Bearer' || !tokenString) {
            // res.status(401).json({ message: MESSAGES.UNAUTHORIZED_TOKEN });
            throw Error(enums/* MESSAGES.UNAUTHORIZED_TOKEN */.X3.UNAUTHORIZED_TOKEN);
        }
        const { uid  } = await initServerApp/* auth.verifyIdToken */.I8.verifyIdToken(tokenString, checkRevoked);
        if (uid) req.body.tokenUid = uid;
    } catch (error) {
        throw error;
    }
};


/***/ })

};
;