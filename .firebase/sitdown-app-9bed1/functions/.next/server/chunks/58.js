"use strict";
exports.id = 58;
exports.ids = [58];
exports.modules = {

/***/ 58:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8037);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ButtonDelete_ButtonDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4263);
/* harmony import */ var _ButtonEdit_ButtonEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8843);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2406);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5057);
/* harmony import */ var _ProfileImage_ProfileImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4778);
/* harmony import */ var _TiptapRender_TiptapRender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7490);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const CardProject = ({ data, view, enableEdit, className })=>{
    const { id, title, body, teamMembers, user, createdAt } = data;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_Card__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: `${className}
      ${view === "full" && "w-full"} 
      min-w-[280px] relative`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `p-5 w-full flex flex-col ${view !== "full" && "h-[180px]"}`,
                children: [
                    view === "full" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-col-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[65px] h-[65px] relative mb-2.5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileImage_ProfileImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    image: user.image
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: `/projects/${id}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-title",
                                    children: title
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-caption-2",
                                children: [
                                    "Created ",
                                    (0,_util_helper__WEBPACK_IMPORTED_MODULE_8__/* .formatDate */ .p6)(createdAt)
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: `/projects/${id}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-title",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TiptapRender_TiptapRender__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        content: body,
                        className: "max-h-[90%] overflow-scroll"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "border-t border-t-[#E6E7E8] p-5 relative flex items-center text-body text-sm",
                children: [
                    view === "full" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "ml-2.5 pl-2.5 flex-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-[#707070] w-10 h-10 text-opacity-50 flex-col-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        name: "users",
                                        size: "lg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-xs",
                                        children: "Members"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "ml-2.5 flex-center",
                                children: teamMembers.map((member)=>typeof member !== "string" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-col-center ml-2.5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-[35px] h-[35px] relative",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileImage_ProfileImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    image: member.image
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mt-2"
                                            })
                                        ]
                                    }, member.id))
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-[#707070] text-opacity-50",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    name: "users",
                                    size: "lg"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-6 h-6 bg-primary text-center ml-2.5 rounded-full pt-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-white text-xs",
                                    children: teamMembers?.length
                                })
                            })
                        ]
                    }),
                    enableEdit && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute bottom-[20px] right-[30px] flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonEdit_ButtonEdit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                data: data,
                                slice: "projects"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonDelete_ButtonDelete__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                data: data,
                                slice: "projects"
                            })
                        ]
                    })
                ]
            })
        ]
    }, id);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardProject);


/***/ })

};
;