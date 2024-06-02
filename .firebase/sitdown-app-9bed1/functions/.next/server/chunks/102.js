"use strict";
exports.id = 102;
exports.ids = [102];
exports.modules = {

/***/ 3097:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("/Users/izzyyo/Desktop/Projects/sitdown-next-app/node_modules/next/dist/client/link.js");
 //# sourceMappingURL=link.js.map


/***/ }),

/***/ 5124:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(3097);


/***/ }),

/***/ 7856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Container = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex items-center justify-center h-screen",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 3719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Logo_Logo)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/img/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.3db8de2a.png","height":85,"width":318,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAQ0lEQVR4nGPkvX3hoOYbqTTJS6LCfzn//2X4x8DEwMDwCYj/AzEzo9OcD/NY/7If4eDmOPH3z38RkCAQ/wRiFiD+DgAeHxU53/1E3AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/assets/img/small-logo.png
/* harmony default export */ const small_logo = ({"src":"/_next/static/media/small-logo.68fdcc73.png","height":85,"width":58,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAlUlEQVR42mNgen+viOnD/b9MHx/8Z/p4/wnj18cCDMyPL38H4n8sjy7/Z310ueP///8MDKyXjv5gu3T0P+Plo78Ybu6SAgtyHN2dxHx05xexg/sXgQRAGEJsZ2D1nfT9uN+kH999J/2IAQt6Tf/p7DHj+38ofg0WdFrwdRcQ/4fi+ww2y77o2i778hqI3wPxK9ulX4IANSNmIQMKl4wAAAAASUVORK5CYII=","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/Logo/Logo.tsx





const Logo = ({ width, height, smallLogo })=>{
    let imageSrc = logo;
    smallLogo && (imageSrc = small_logo);
    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        src: imageSrc,
        width: width,
        height: height,
        alt: "Sitdown app logo"
    });
};
/* harmony default export */ const Logo_Logo = (Logo);


/***/ })

};
;