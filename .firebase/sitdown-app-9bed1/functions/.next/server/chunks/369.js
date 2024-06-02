"use strict";
exports.id = 369;
exports.ids = [369];
exports.modules = {

/***/ 9757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardProjects)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1487);
/* harmony import */ var _CardProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function CardProjects({ className, filterData }) {
    const authUserId = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .CG)((state)=>state.auth.credentials.user.id);
    const projects = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .CG)((state)=>state.projects.projects);
    let filteredProjects = [];
    if (filterData === "myProjects") {
        projects.forEach((project)=>{
            if (project.user.id === authUserId) filteredProjects.push(project);
        });
    } else if (filterData === "otherProjects") {
        projects.forEach((project)=>{
            if (project.user.id !== authUserId) filteredProjects.push(project);
        });
    } else {
        filteredProjects = projects;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: filteredProjects.length > 0 ? filteredProjects.map((project)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardProject__WEBPACK_IMPORTED_MODULE_2__["default"], {
                data: project,
                className: className
            }, project.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "p-2.5 mt-2.5 text-caption-2",
            children: "No Projects yet! Please start adding projects!"
        })
    });
}


/***/ }),

/***/ 3310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/izzyyo/Desktop/Projects/sitdown-next-app/src/components/CardProjects/CardProjects.tsx`)

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