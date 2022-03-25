"use strict";
exports.id = 242;
exports.ids = [242];
exports.modules = {

/***/ 2242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ getLang)
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./utils/languages/files/english.ts
const english = {
    // FIELDS
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm password',
    phone: 'Phone number',
    name: 'Name',
    total: 'Total',
    placeOrder: 'Place order',
    minOrder: 'Min. order',
    delivery: 'Delivery',
    packaging: 'Packaging',
    closed: 'Closed',
    unavailable: 'Unavailable',
    address: 'Address',
    // BUTTONS
    signIn: 'Sign in',
    signUp: 'Sign up',
    signInWithGoogle: 'Sign in with Google',
    signUpWithGoogle: 'Sign up with Google',
    register: 'Register',
    submit: 'Submit',
    showPass: 'Show password',
    forgotPass: 'Forgot password',
    clear: 'Clear',
    account: 'Account',
    // ALERTS
    alertEmail: 'Invalid email address',
    alertName: '',
    alertPasswordInvalid: 'Password must have 6 or more characters',
    alertPassswordNoMatch: "Passwords don't match",
    alertPasswordWrong: 'Wrong password',
    alertNoAccount: 'Account does not exist',
    alertPhone: 'Incorrect phone number',
    // TOOLTIPS
    ordersTooltip: 'Orders',
    cartTooltip: 'Cart',
    signOutTooltip: 'Sign out',
    signInTooltip: 'Sign in',
    accountTooltip: 'Account',
    settingsTooltip: 'Settings',
    // MODALS
    accountCreateSuccessTitle: 'Congratulations! Welcome to the party',
    accountCreateSuccessBody: 'An email has been sent to the email address you have provided. Please follow the link to activate your account. Thank you!',
    noItemsInCartTitle: 'No items in cart',
    noItemsInCartBody: 'Please add items to the cart in order to place an order.',
    orderPlaceSuccessTitle: 'Hooray! Your order has been placed.',
    orderPlaceSuccessBody: 'Enjoy the food.',
    itemNotAvTitle: 'Item no longer available :(',
    itemNotAvBody: 'We are sorry! The restaurant made the item unavailable.',
    // TEXT
    welcomeBack: 'Welcome back!',
    welcomeBackAdditional: 'We have missed you...',
    createAnAccount: 'Create an account',
    createAnAccountAdditional: 'And order from the best restaurants near you',
    noItemsInCart: 'No items in cart!...',
    restaurants: 'Restaurants',
    myOrders: 'My orders',
    moreInfo: 'More info...',
    orderNo: 'Order #',
    items: 'items',
    free: 'free',
    callUs: 'Call us',
    menu: 'Menu',
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: 'Already have an account?',
    signUpNow: 'Sign up now',
    or: 'or'
};

;// CONCATENATED MODULE: ./utils/languages/index.ts


class Lang {
    constructor(lang){
        var ref;
        this.en = english;
        if (!((ref = this) === null || ref === void 0 ? void 0 : ref[lang])) {
            this.lang = this.en;
            return;
        }
        this.lang = this[lang];
    }
}

;// CONCATENATED MODULE: ./controllers/getLang.ts



const getLang = ()=>{
    const appLang1 = (0,external_react_redux_.useSelector)(({ app: { appLang  }  })=>appLang
    );
    const { lang  } = new Lang(appLang1);
    return lang;
};


/***/ })

};
;