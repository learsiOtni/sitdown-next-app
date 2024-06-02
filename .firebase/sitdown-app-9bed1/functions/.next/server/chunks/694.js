"use strict";
exports.id = 694;
exports.ids = [694];
exports.modules = {

/***/ 1475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardUpdates)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1487);
/* harmony import */ var _CardUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8370);
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8037);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function CardUpdates({ data, className, view }) {
    let filteredUpdates = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .CG)((state)=>state.updates.updates); // Updates already in order
    if (data) filteredUpdates = (0,_util_helper__WEBPACK_IMPORTED_MODULE_3__/* .sortDates */ .jQ)(data);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: filteredUpdates.length > 0 ? filteredUpdates.map((update)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardUpdate__WEBPACK_IMPORTED_MODULE_2__["default"], {
                data: update,
                view: view,
                className: className
            }, update.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "p-2.5 mt-5 text-caption-2",
            children: "No Status Updates yet! Please start adding status updates!"
        })
    });
}


/***/ }),

/***/ 5715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/izzyyo/Desktop/Projects/sitdown-next-app/src/components/CardUpdates/CardUpdates.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;