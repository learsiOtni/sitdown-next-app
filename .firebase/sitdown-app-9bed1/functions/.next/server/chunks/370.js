"use strict";
exports.id = 370;
exports.ids = [370];
exports.modules = {

/***/ 8370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ButtonDelete_ButtonDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4263);
/* harmony import */ var _ButtonEdit_ButtonEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8843);
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2406);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5057);
/* harmony import */ var _ProfileImage_ProfileImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4778);
/* harmony import */ var _TiptapRender_TiptapRender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7490);
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8037);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const Title = ({ id, title })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/updates/${id}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
            className: "text-title",
            children: title
        })
    });
};
const tiptapClass = "h-16 max-h-16 overflow-scroll";
const FormattedDate = ({ date })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "text-caption-primary",
        children: (0,_util_helper__WEBPACK_IMPORTED_MODULE_8__/* .toHours */ .bT)(date)
    });
const Tags = ({ tags, updateId })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center mt-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-4 h-4 text-primary",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    name: "tags"
                })
            }),
            tags?.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-caption underline ml-2.5 ",
                    children: tag
                }, `${updateId}-${tag}`))
        ]
    });
const CardView = ({ data })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-between mb-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "min-w-[40px] w-[40px] h-[40px] relative mr-2.5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileImage_ProfileImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    image: data.user.image
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-caption-underline capitalize",
                                children: `${data.user.firstname} ${data.user.lastname}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormattedDate, {
                        date: data.createdAt
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                id: data.id,
                title: data.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TiptapRender_TiptapRender__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                content: data.body,
                className: tiptapClass
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tags, {
                tags: data.tags,
                updateId: data.id
            })
        ]
    });
const TableView = ({ data, fullView })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mr-5 min-w-[65px] w-[65px] h-[65px] relative",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileImage_ProfileImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    image: data.user.image
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "min-w-0 w-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                                id: data.id,
                                title: data.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormattedDate, {
                                date: data.createdAt
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TiptapRender_TiptapRender__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        content: data.body,
                        className: `${!fullView && tiptapClass}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tags, {
                        tags: data.tags,
                        updateId: data.id
                    }),
                    data.lastUpdated && fullView && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "mt-10 text-body text-xs",
                        children: [
                            "Last Updated: ",
                            (0,_util_helper__WEBPACK_IMPORTED_MODULE_8__/* .formatDate */ .p6)(data.lastUpdated)
                        ]
                    })
                ]
            })
        ]
    });
};
const DefaultView = ({ data })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mr-2.5 relative min-w-[35px] w-[35px] h-[35px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileImage_ProfileImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    image: data.user.image
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "min-w-0 w-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-caption-primary mt-2 mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "capitalize",
                                children: `${data.user?.firstname} ${data.user?.lastname} `
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-body",
                                children: `updated his status `
                            }),
                            (0,_util_helper__WEBPACK_IMPORTED_MODULE_8__/* .formatDate */ .p6)(data.createdAt)
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        id: data.id,
                        title: data.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TiptapRender_TiptapRender__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        content: data.body,
                        className: tiptapClass
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tags, {
                        tags: data.tags,
                        updateId: data.id
                    })
                ]
            })
        ]
    });
};
const CardUpdate = ({ data, view, enableEdit, className })=>{
    let content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DefaultView, {
        data: data
    });
    if (view === "table" || view === "full") content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TableView, {
        data: data,
        fullView: view === "full"
    });
    else if (view === "card") content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardView, {
        data: data
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Card_Card__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: `p-5 border border-[#E2E5E6] relative ${view !== "card" ? "flex w-[100%]" : "w-[32%]"}`,
        children: [
            content,
            enableEdit && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute bottom-[20px] right-[30px] flex-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonEdit_ButtonEdit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        data: data,
                        slice: "updates"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonDelete_ButtonDelete__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        data: data,
                        slice: "updates"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardUpdate);


/***/ })

};
;