"use strict";
exports.id = 382;
exports.ids = [382];
exports.modules = {

/***/ 4858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hd: () => (/* binding */ statistics),
/* harmony export */   rC: () => (/* binding */ users)
/* harmony export */ });
/* unused harmony exports statusUpdates, projects */
const statistics = [
    {
        id: 1,
        name: "updates",
        title: "Status Updates",
        currentValue: 50,
        previousValue: 45
    },
    {
        id: 2,
        name: "projects",
        title: "Projects",
        currentValue: 24,
        previousValue: 28
    },
    {
        id: 3,
        name: "tags",
        title: "Tags",
        currentValue: 156
    },
    {
        id: 4,
        name: "users",
        title: "Users",
        currentValue: 86
    }
];
const statusUpdates = [
    {
        id: 1,
        title: "Performance - GetUserDetails request is slow",
        body: "The Performance details takes too long to load which leaves the user with... empty field screen. There are some screen in the",
        user: {
            userId: 123,
            firstname: "Time Stones",
            lastname: "test"
        },
        createdAt: "2024-05-05T23:49:15.807Z",
        tags: [
            "Subscription",
            "Trial"
        ]
    },
    {
        id: 2,
        title: "IE - Logout screen not visible",
        body: "In Internet Explorer, when you click ‘logout’ you are taken to a completely blank screen. Depending on what’s causing this, the bug may be a big issue when it comes to hand-offs in and out of the app during payment process.",
        user: {
            userId: 123,
            firstname: "Jake",
            lastname: "Cuenca"
        },
        createdAt: "2024-04-05T23:49:15.807Z",
        tags: [
            "Bug",
            "Internet",
            "Network"
        ]
    },
    {
        id: 3,
        title: "Add and test new token endpoint to API",
        body: "Need to Add endpoint and retrieve and re-use JToken. Need to find alternative to change the app settings to disable cookie authentication. This would disable the possibility of manually testing on test. This needs to be check",
        user: {
            userId: 123,
            firstname: "Maddy",
            lastname: "Jane"
        },
        createdAt: "2024-05-05T22:49:15.807Z",
        tags: [
            "Test",
            "Token"
        ]
    },
    {
        id: 4,
        title: "Create user alerts for trial/subscription",
        body: "The user should get a notification when a user’s trial/subscription is due to expire within the app. This will be shown when a user next login. There is no current framework within the application itself so this will be build from scratch",
        user: {
            userId: 123,
            firstname: "Thomas",
            lastname: "Cook"
        },
        createdAt: "2024-05-05T21:49:15.807Z",
        tags: [
            "Subscription",
            "Trial"
        ]
    }
];
const projects = [
    {
        id: 1,
        title: "Project Twitter",
        body: "Nulla tincidunt ipsum eu lorem vulputate, id imperdiet nunc condimentum. Praesent ut leo ultricies justo facilisis iaculis. Nullam rutrum arcu vel lacus bibendum, eu vehicula orci tempor.",
        user: {
            userId: 123,
            name: "Time Stones"
        },
        createdAt: "",
        teamMembers: [
            "Jane Dayle",
            "John Doe"
        ],
        editable: true
    },
    {
        id: 2,
        title: "Firefox Stratum",
        body: "Nulla tincidunt ipsum eu lorem vulputate, id imperdiet nunc condimentum. Praesent ut leo ultricies justo facilisis iaculis. Nullam rutrum arcu vel lacus bibendum, eu vehicula orci tempor.",
        user: {
            userId: 123,
            name: "Time Stones"
        },
        createdAt: "",
        teamMembers: [
            "Jane Dayle",
            "John Doe"
        ],
        editable: false
    },
    {
        id: 3,
        title: "Doc Ox",
        body: "Nulla tincidunt ipsum eu lorem vulputate, id imperdiet nunc condimentum. Praesent ut leo ultricies justo facilisis iaculis. Nullam rutrum arcu vel lacus bibendum, eu vehicula orci tempor.",
        user: {
            userId: 123,
            name: "Time Stones"
        },
        createdAt: "",
        teamMembers: [
            "Jane Dayle",
            "John Doe"
        ],
        editable: true
    },
    {
        id: 4,
        title: "Ace the Fire",
        body: "Nulla tincidunt ipsum eu lorem vulputate, id imperdiet nunc condimentum. Praesent ut leo ultricies justo facilisis iaculis. Nullam rutrum arcu vel lacus bibendum, eu vehicula orci tempor.",
        user: {
            userId: 123,
            name: "Time Stones"
        },
        createdAt: "",
        teamMembers: [
            "Jane Dayle",
            "John Doe"
        ],
        editable: false
    }
];
const users = [
    {
        id: 1,
        name: "Isaac Newton",
        role: "Senior Project Leader",
        updates: 0,
        teams: 4,
        projects: 4
    },
    {
        id: 2,
        name: "Isaac Newton",
        role: "Senior Software Developer",
        updates: 10,
        teams: 2,
        projects: 3
    },
    {
        id: 3,
        name: "Leah Smith",
        role: "Junior Software Developer",
        updates: 50,
        teams: 1,
        projects: 4
    },
    {
        id: 4,
        name: "Firefist Ace",
        role: "HR Manager",
        updates: 20,
        teams: 0,
        projects: 0
    },
    {
        id: 5,
        name: "Jack Sparrow",
        role: "Project Manager",
        updates: 20,
        teams: 10,
        projects: 10
    },
    {
        id: 5,
        name: "Holly Mane",
        role: "Junior Software Developer",
        updates: 40,
        teams: 1,
        projects: 5
    }
];


/***/ }),

/***/ 3406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(229);
/* harmony import */ var _Icon_TriangleIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3432);



const Button = ({ className, type, icon, iconStyle, bgNone, dropdown, children, onClick })=>{
    let style = "";
    let defaultStyle = `whitespace-nowrap rounded py-2 text-white bg-primary shadow-md hover:opacity-70`;
    let bgNoneStyle = `whitespace-nowrap py-3 px-5 hover:bg-slate-100 `;
    if (className) {
        style = `${defaultStyle} ${className}`;
        bgNone && (style = `${bgNoneStyle} ${className}`);
    } else {
        bgNone && (style = bgNoneStyle);
    }
    icon && (style = `${style} flex px-5`);
    let dropdownEl;
    if (dropdown) dropdownEl = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "inline-block ml-2 ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon_TriangleIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            direction: "down",
            color: "border-b-[#FFFFFF]",
            size: "sm"
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: style || defaultStyle,
        onClick: onClick,
        type: type,
        children: [
            icon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        name: icon,
                        iconContainerStyle: iconStyle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "ml-2.5",
                        children: children
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: children
            }),
            dropdownEl
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 4143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Card = ({ className, children })=>{
    let defaultStyle = `border-[#E2E5E6] bg-white rounded shadow-md `;
    className && (defaultStyle = defaultStyle + className);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: defaultStyle,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5723);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6862);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5927);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);




const Icon = ({ name, iconContainerStyle, background, size, onClick })=>{
    let icon = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__/* .faCopy */ .kZ_;
    let containerStyle = `flex items-center justify-center ${iconContainerStyle}`;
    let iconStyle = "";
    name === "updates" && (iconStyle = "-scale-y-100 rotate-45");
    name === "projects" && (iconStyle = "-scale-y-100");
    name === "dashboard" && (icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faGlobe */ .g4A) && background && (containerStyle = containerStyle + " bg-yellow");
    name === "updates" && (icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faArrowsRotate */ .T80) && background && (containerStyle = containerStyle + " bg-yellow");
    name === "tags" && (icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faTag */ .LEN) && background && (containerStyle = containerStyle + " bg-purple");
    name === "users" && (icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faUserFriends */ .r$M) && background && (containerStyle = containerStyle + " bg-red");
    name === "projects" && (icon = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__/* .faCopy */ .kZ_) && background && (containerStyle = containerStyle + " bg-blue");
    name === "add" && (icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faPlusCircle */ .KtF) && background && (iconStyle = iconStyle + " text-brand");
    name === "edit" && (icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faPen */ .IwR) && (containerStyle = containerStyle + " border-b-4");
    name === "search" && (icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faSearch */ .wn1);
    name === "notification" && (icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faBell */ .qmU);
    name === "delete" && (icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faTrash */ .$aW);
    name === "user" && (icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faUser */ .ILF);
    name === "settings" && (icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faGear */ .gr5);
    name === "close" && (icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faTimes */ .NBC);
    name === "list" && (icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faList */ .Zrf);
    name === "orList" && (icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faListOl */ .nFo);
    name === "check" && (icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faCheck */ .LEp);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: containerStyle,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
            icon: icon,
            className: iconStyle,
            size: size,
            onClick: onClick
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 3432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Triangle = ({ direction, color, size })=>{
    // color must be border-b-color
    let triangleDown = `w-0 h-0 
        border-l-[7.5px] border-l-transparent
        border-t-[10px] ${color}
        border-r-[7.5px] border-r-transparent`;
    // color must be border-t-color
    let triangleUp = `w-0 h-0
        border-l-[7.5px] border-l-transparent
        border-b-[10px] ${color}
        border-r-[7.5px] border-r-transparent`;
    if (size === "sm") {
        triangleDown = `w-0 h-0 
            border-l-[5px] border-l-transparent
            border-t-[7.5px] ${color}
            border-r-[5px] border-r-transparent`;
        triangleUp = `w-0 h-0
            border-l-[5px] border-l-transparent
            border-b-[7.5px] ${color}
            border-r-[5px] border-r-transparent`;
    }
    let style;
    direction === "up" && (style = triangleUp);
    direction === "down" && (style = triangleDown);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: style
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Triangle);


/***/ })

};
;