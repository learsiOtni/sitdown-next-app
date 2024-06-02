exports.id = 261;
exports.ids = [261];
exports.modules = {

/***/ 1367:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 8560:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1127))

/***/ }),

/***/ 1127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Roboto","arguments":[{"weight":"400","subsets":["latin"]}],"variableName":"roboto"}
var layout_tsx_import_Roboto_arguments_weight_400_subsets_latin_variableName_roboto_ = __webpack_require__(2791);
var layout_tsx_import_Roboto_arguments_weight_400_subsets_latin_variableName_roboto_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Roboto_arguments_weight_400_subsets_latin_variableName_roboto_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(3824);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/cookies-next/lib/index.js
var lib = __webpack_require__(6668);
// EXTERNAL MODULE: ./src/components/Card/Card.tsx
var Card = __webpack_require__(2406);
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx
var Icon = __webpack_require__(5057);
;// CONCATENATED MODULE: ./src/components/Layout/RightSideBar/RightSideBar.tsx



const RightSideBar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-[266px] h-screen absolute right-0 top-0 bg-white px-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-11 flex items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-5 h-7 text-primary",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                            name: "notification"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "ml-2.5 text-heading",
                        children: `"Today's Agenda"`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-9 border-b-[3px] border-[#4DA1FF] mb-5"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                className: "p-2.5 shadow-xl",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-caption",
                                children: "12.45"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-4 h-4 text-primary",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                                            name: "edit"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-4 h-4 text-primary ml-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                                            name: "delete"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mt-2.5 text-body",
                        children: "New user interface"
                    })
                ]
            }, 1)
        ]
    });
};
/* harmony default export */ const RightSideBar_RightSideBar = (RightSideBar);

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/lib/hooks.ts
var hooks = __webpack_require__(1487);
// EXTERNAL MODULE: ./src/lib/features/auth/authSlice.ts
var authSlice = __webpack_require__(3664);
// EXTERNAL MODULE: ./src/lib/features/updates/updatesSlice.ts
var updatesSlice = __webpack_require__(2291);
;// CONCATENATED MODULE: ./src/components/Layout/SideNav/links.ts
const links = [
    {
        id: 1,
        title: "dashboard",
        url: "/dashboard"
    },
    {
        id: 2,
        title: "updates",
        url: "/updates"
    },
    {
        id: 3,
        title: "projects",
        url: "/projects"
    },
    {
        id: 4,
        title: "tags",
        url: "/tags"
    },
    {
        id: 5,
        title: "users",
        url: "/users"
    }
];
/* harmony default export */ const SideNav_links = (links);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/assets/img/logo.png
var logo = __webpack_require__(5249);
// EXTERNAL MODULE: ./src/assets/img/small-logo.png
var small_logo = __webpack_require__(6491);
;// CONCATENATED MODULE: ./src/components/Logo/Logo.tsx





const Logo = ({ width, height, smallLogo })=>{
    let imageSrc = logo["default"];
    smallLogo && (imageSrc = small_logo["default"]);
    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        src: imageSrc,
        width: width,
        height: height,
        alt: "Sitdown app logo"
    });
};
/* harmony default export */ const Logo_Logo = (Logo);

// EXTERNAL MODULE: ./src/components/ProfileImage/ProfileImage.tsx
var ProfileImage = __webpack_require__(4778);
;// CONCATENATED MODULE: ./src/components/Layout/SideNav/SideNav.tsx










const SideNav = ()=>{
    const pathname = (0,navigation.usePathname)();
    const router = (0,navigation.useRouter)();
    const dispatch = (0,hooks/* useAppDispatch */.TL)();
    const status = (0,hooks/* useAppSelector */.CG)((state)=>state.updates.status);
    const user = (0,hooks/* useAppSelector */.CG)((state)=>state.auth.credentials.user);
    const handleLogout = ()=>{
        dispatch((0,authSlice/* logout */.kS)());
        router.push("/login");
    };
    const handleAddUpdate = ()=>{
        if (status !== "failed" && status !== "idle") dispatch((0,updatesSlice/* setStatus */.Tf)("idle"));
        dispatch((0,updatesSlice/* clearErrors */.b9)());
        dispatch((0,updatesSlice/* toggleModal */.$J)());
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "w-28 h-screen flex flex-col items-center fixed",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-11",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Logo_Logo, {
                    width: 29,
                    height: 50,
                    smallLogo: true
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-7 mt-20 cursor-pointer hover:text-lg hover:opacity-90",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                    name: "add",
                    background: true,
                    size: "2xl",
                    onClick: handleAddUpdate
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "w-5 mt-8",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: SideNav_links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `pt-7 transition 
                                ${pathname === link.url ? "text-primary" : "text-[#B6B6B6]"}
                                hover:text-primary hover:text-opacity-80`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: link.url,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                                    name: link.title
                                })
                            })
                        }, link.id))
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-9 h-9 mt-[190px] background-red relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-4 h-4 rounded-full bg-brand z-10 absolute left-6 top-[-5px]"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/profile",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `w-full h-full rounded-full border relative ${pathname === "/profile" && "border-brand"} hover:opacity-70 hover:border-brand`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ProfileImage/* default */.Z, {
                                image: user.image
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "hover:opacity-50",
                onClick: handleLogout,
                children: "Logout"
            })
        ]
    });
};
/* harmony default export */ const SideNav_SideNav = (SideNav);

// EXTERNAL MODULE: ./src/util/helper.ts
var helper = __webpack_require__(8037);
// EXTERNAL MODULE: ./src/components/Button/Button.tsx
var Button = __webpack_require__(1897);
// EXTERNAL MODULE: ./src/components/Form/Form.tsx + 6 modules
var Form = __webpack_require__(6001);
// EXTERNAL MODULE: ./src/components/Modal/Modal.tsx
var Modal = __webpack_require__(3453);
;// CONCATENATED MODULE: ./src/components/ModalUpdateForm/updateFormFile.ts
const UpdateFormFile = {
    title: {
        label: "Headline*",
        elementType: "input",
        config: {
            id: "title",
            type: "text",
            name: "title"
        },
        value: "",
        validation: {
            isRequired: true
        },
        valid: true
    },
    body: {
        label: "Description*",
        elementType: "editor",
        config: {
            id: "body",
            type: "text",
            name: "body"
        },
        value: "",
        validation: {},
        valid: true
    },
    projectId: {
        label: "Assign to a project",
        elementType: "projectMenu",
        config: {
            id: "projectId",
            type: "text",
            name: "projectId"
        },
        value: "",
        validation: {},
        valid: true
    },
    tags: {
        elementType: "input",
        label: "Tags*",
        subLabel: "(Separate tags using space)",
        config: {
            id: "tags",
            type: "text",
            name: "tags"
        },
        value: "",
        validation: {
        },
        valid: true
    }
};
/* harmony default export */ const updateFormFile = (UpdateFormFile);

;// CONCATENATED MODULE: ./src/components/ModalUpdateForm/ModalUpdateForm.tsx











function ModalUpdateForm() {
    const authCookie = (0,lib.getCookie)("authToken");
    const router = (0,navigation.useRouter)();
    const dispatch = (0,hooks/* useAppDispatch */.TL)();
    const errors = (0,hooks/* useAppSelector */.CG)((state)=>state.updates.errors);
    const isModalOpen = (0,hooks/* useAppSelector */.CG)((state)=>state.updates.isModalOpen);
    const status = (0,hooks/* useAppSelector */.CG)((state)=>state.updates.status);
    const user = (0,hooks/* useAppSelector */.CG)((state)=>state.auth.credentials.user);
    const handleSubmit = (formData)=>{
        let filteredTags = [];
        if (typeof formData.tags === "string") filteredTags = (0,helper/* validateTags */.ny)(formData.tags);
        const { id, firstname, lastname, image } = user;
        const newData = {
            body: {
                ...formData,
                tags: filteredTags
            },
            token: authCookie,
            userInfo: {
                id,
                firstname,
                lastname,
                image
            }
        };
        dispatch((0,updatesSlice/* postUpdate */.ER)(newData));
    };
    (0,react_.useEffect)(()=>{
        if (status === "postSucceeded") {
            dispatch((0,updatesSlice/* setStatus */.Tf)("idle"));
            dispatch((0,updatesSlice/* toggleModal */.$J)());
            router.refresh();
            router.push("/dashboard");
        }
    }, [
        status,
        dispatch,
        router
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(Modal/* default */.Z, {
        title: "Add new update",
        isOpen: isModalOpen,
        toggle: ()=>dispatch((0,updatesSlice/* toggleModal */.$J)()),
        children: status !== "postSucceeded" && /*#__PURE__*/ jsx_runtime_.jsx(Form/* default */.Z, {
            formFile: updateFormFile,
            className: "flex flex-col min-w-full",
            onSubmit: handleSubmit,
            errors: errors,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                type: "submit",
                className: "text-xl p-10 mb-7 place-self-end",
                children: "Add"
            })
        })
    });
}

// EXTERNAL MODULE: ./src/lib/features/projects/projectsSlice.ts
var projectsSlice = __webpack_require__(2949);
;// CONCATENATED MODULE: ./src/components/Layout/Layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









//import { useGetAuthenticatedUserQuery } from "@/lib/services/auth/authService";
const Layout = ({ children })=>{
    const dispatch = (0,hooks/* useAppDispatch */.TL)();
    const isAuth = (0,hooks/* useAppSelector */.CG)((state)=>state.auth.isAuth);
    const authUserId = (0,hooks/* useAppSelector */.CG)((state)=>state.auth.credentials.user.id);
    const updates = (0,hooks/* useAppSelector */.CG)((state)=>state.updates.updates);
    const rightSideBar = false;
    /*const {data, isFetching } = useGetAuthenticatedUserQuery('userDetails')
  useEffect( () => {
    //dispatch( getUserData())
    if (data) dispatch(setCredentials(data))
  }, [data, dispatch])*/ (0,react_.useEffect)(()=>{
        const authCookie = (0,lib.getCookie)("authToken");
        authCookie && dispatch((0,authSlice/* getAuthUser */.nX)(authCookie));
    }, [
        dispatch
    ]);
    (0,react_.useEffect)(()=>{
        if (isAuth && Object.keys(updates).length <= 0) {
            dispatch((0,projectsSlice/* fetchProjects */.bl)());
            dispatch((0,updatesSlice/* fetchUpdates */.f9)());
        }
    }, [
        isAuth,
        updates,
        dispatch
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: isAuth && authUserId ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ModalUpdateForm, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(SideNav_SideNav, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex ml-[110px] bg-[#F5F7FA] h-full min-h-screen",
                    children: children
                }),
                rightSideBar && /*#__PURE__*/ jsx_runtime_.jsx(RightSideBar_RightSideBar, {})
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: children
        })
    });
};
/* harmony default export */ const Layout_Layout = (Layout);

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var react_redux_lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(1388);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.cjs.production.min.js
var rtk_query_react_cjs_production_min = __webpack_require__(3298);
;// CONCATENATED MODULE: ./src/lib/services/auth/authService.ts


const authApi = (0,rtk_query_react_cjs_production_min.createApi)({
    reducerPath: "authApi",
    baseQuery: (0,rtk_query_react_cjs_production_min.fetchBaseQuery)({
        baseUrl: "https://us-central1-sitdown-834fc.cloudfunctions.net/api/",
        prepareHeaders: (headers, { getState })=>{
            const token = (0,lib.getCookie)("authToken");
            if (token) {
                // include token in req header
                headers.set("authorization", `Bearer ${token}`);
                return headers;
            }
        }
    }),
    endpoints: (builder)=>({
            getAuthenticatedUser: builder.query({
                query: ()=>({
                        url: "/user",
                        method: "GET"
                    })
            })
        })
});
const { useGetAuthenticatedUserQuery } = authApi;

;// CONCATENATED MODULE: ./src/lib/store.ts





const makeStore = ()=>{
    return (0,redux_toolkit_cjs_production_min.configureStore)({
        reducer: {
            auth: authSlice/* default */.ZP,
            updates: updatesSlice/* default */.ZP,
            projects: projectsSlice/* default */.ZP,
            [authApi.reducerPath]: authApi.reducer
        },
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(authApi.middleware)
    });
};

;// CONCATENATED MODULE: ./src/app/StoreProvider.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function StoreProvider({ children }) {
    const storeRef = (0,react_.useRef)();
    if (!storeRef.current) {
        // create the store instance the first time this renders
        storeRef.current = makeStore();
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(react_redux_lib.Provider, {
        store: storeRef.current,
        children: children
    });
}

;// CONCATENATED MODULE: ./src/app/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (layout_tsx_import_Roboto_arguments_weight_400_subsets_latin_variableName_roboto_default()).className,
            children: /*#__PURE__*/ jsx_runtime_.jsx(StoreProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Layout_Layout, {
                    children: children
                })
            })
        })
    });
}


/***/ }),

/***/ 1897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5057);
/* harmony import */ var _Icon_TriangleIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6389);



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

/***/ 2406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 6001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Form)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/components/InputField/InputField.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function InputField({ label, error, config, value, onChange }) {
    const [data, setData] = (0,react_.useState)(value);
    const handleInputChange = (e)=>{
        setData(e.target.value);
        onChange(e.target.name, e.target.value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        className: `p-2 ${label ? "mb-5" : "mb-3"} border rounded text-lg bg-[#FBFBFD] ${error && "border-error"} last:mb-0`,
        ...config,
        value: data,
        onChange: handleInputChange
    });
}

// EXTERNAL MODULE: ./src/lib/hooks.ts
var hooks = __webpack_require__(1487);
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx
var Icon = __webpack_require__(5057);
// EXTERNAL MODULE: ./src/components/Icon/TriangleIcon.tsx
var TriangleIcon = __webpack_require__(6389);
;// CONCATENATED MODULE: ./src/components/SelectProjectMenu/SelectProjectMenu.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function SelectProjectMenu({ onChange, error, value }) {
    const menuRef = (0,react_.useRef)(null);
    const [isMenuOpen, setIsMenuOpen] = (0,react_.useState)(false);
    const [selectedItem, setSelectedItem] = (0,react_.useState)();
    const [filteredProjects, setFilteredProjects] = (0,react_.useState)([]);
    const projects = (0,hooks/* useAppSelector */.CG)((state)=>state.projects.projects);
    const authUserId = (0,hooks/* useAppSelector */.CG)((state)=>state.auth.credentials.user.id);
    const status = (0,hooks/* useAppSelector */.CG)((state)=>state.projects.status);
    const toggleMenu = (0,react_.useCallback)(()=>{
        setIsMenuOpen(!isMenuOpen);
    }, [
        isMenuOpen
    ]);
    (0,react_.useEffect)(()=>{
        setSelectedItem(projects.find((project)=>project.id === value));
    }, [
        value,
        projects
    ]);
    (0,react_.useEffect)(()=>{
        // only show projects to users they belong to, meaning they are team members or author
        if (projects.length > 0 || status === "editSucceeded") {
            setFilteredProjects(projects.filter((project)=>authUserId === project?.user?.id || project?.teamMembers?.includes(authUserId)));
        }
    }, [
        projects,
        status,
        authUserId
    ]);
    (0,react_.useEffect)(()=>{
        const current = menuRef.current;
        current?.addEventListener("click", toggleMenu);
        return ()=>current?.removeEventListener("click", toggleMenu);
    }, [
        isMenuOpen,
        toggleMenu
    ]);
    const handleMenuSelect = (e, project)=>{
        const projectId = e.currentTarget.getAttribute("data-value");
        setSelectedItem(project);
        toggleMenu();
        onChange("projectId", projectId);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative mb-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `mb-1 p-2 border rounded text-lg bg-[#FBFBFD] flex-between cursor-pointer ${error && "border-error"}`,
                ref: menuRef,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-body h-7",
                        children: selectedItem?.title
                    }),
                    isMenuOpen ? /*#__PURE__*/ jsx_runtime_.jsx(TriangleIcon/* default */.Z, {
                        direction: "up",
                        color: "border-[#222222]",
                        size: "sm"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(TriangleIcon/* default */.Z, {
                        direction: "down",
                        color: "border-[#222222]",
                        size: "sm"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `bg-gray-100 absolute w-full z-10 border rounded ${isMenuOpen ? "block" : "hidden"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "text-body cursor-pointer max-h-[180px] overflow-scroll",
                    children: filteredProjects.length > 0 ? filteredProjects.map((project)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: `p-2 w-full flex-between hover:bg-body/10 ${selectedItem?.id === project.id && "text-black"}`,
                                type: "button",
                                onClick: (e)=>handleMenuSelect(e, project),
                                "data-value": project.id,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: project.title
                                    }),
                                    selectedItem?.id === project.id && /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                                        name: "check"
                                    })
                                ]
                            })
                        }, project.id)) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "p-2.5 text-caption-2",
                        children: "No Project found!"
                    }, "no-project")
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/lib/features/projects/projectsSlice.ts
var projectsSlice = __webpack_require__(2949);
// EXTERNAL MODULE: ./src/components/ProfileImage/ProfileImage.tsx
var ProfileImage = __webpack_require__(4778);
;// CONCATENATED MODULE: ./src/components/SelectTeamMenu/SelectTeamMenu.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function SelectTeamMenu({ onChange, value }) {
    const [chosenMembers, setChosenMembers] = (0,react_.useState)([]);
    const [members, setMembers] = (0,react_.useState)([]);
    const [show, setShow] = (0,react_.useState)(false);
    const dispatch = (0,hooks/* useAppDispatch */.TL)();
    const users = (0,hooks/* useAppSelector */.CG)((state)=>state.projects.teamMembers);
    const authUserId = (0,hooks/* useAppSelector */.CG)((state)=>state.auth.credentials.user.id);
    const toggleShow = ()=>{
        setShow(!show);
    };
    (0,react_.useEffect)(()=>{
        users.length <= 0 && dispatch((0,projectsSlice/* getUsers */.Rf)());
    }, [
        dispatch,
        users.length
    ]);
    (0,react_.useEffect)(()=>{
        const filteredUser = [];
        const defaultChosen = [];
        const chosenMembersId = [];
        value.length > 0 && value.forEach((user)=>{
            chosenMembersId.push(user.id);
        });
        users.forEach((user)=>{
            if (!chosenMembersId.includes(user.id)) filteredUser.push(user);
            else defaultChosen.push(user);
        });
        setMembers(filteredUser.filter((user)=>user.id !== authUserId));
        setChosenMembers(defaultChosen);
    }, [
        users,
        authUserId,
        value
    ]);
    const handleAddMember = (user)=>{
        const newMembers = chosenMembers.concat(user);
        setMembers(members.filter((member)=>member.id !== user.id));
        setChosenMembers(newMembers);
        onChange("teamMembers", newMembers);
    };
    const handleRemoveMember = (user)=>{
        const newMembers = chosenMembers.filter((member)=>member.id !== user.id);
        setMembers(members.concat(user));
        setChosenMembers(newMembers);
        onChange("teamMembers", newMembers);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col mb-3.5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                        name: "add",
                        size: "2x",
                        onClick: toggleShow,
                        iconContainerStyle: "cursor-pointer text-primary self-start mr-3 hover:opacity-70"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex gap-3 overflow-scroll",
                        children: chosenMembers.length > 0 && chosenMembers.map((chosenMember)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-[60px] flex-col-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "relative w-[50px] h-[50px] min-w-[50px] mb-1.5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(ProfileImage/* default */.Z, {
                                                image: chosenMember.image
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                                                name: "close",
                                                iconContainerStyle: "absolute text-error opacity-70 cursor-pointer top-0 right-0 hover:opacity-100",
                                                onClick: ()=>handleRemoveMember(chosenMember)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-xs text-body capitalize",
                                        children: chosenMember.firstname
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-xs text-body capitalize",
                                        children: chosenMember.lastname
                                    })
                                ]
                            }, chosenMember.id))
                    })
                ]
            }),
            show && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-[#F5F7FA] rounded-md mt-2.5 p-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between mb-2.5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-xs text-body",
                                children: "Please Choose a Member:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                                name: "close",
                                onClick: toggleShow,
                                iconContainerStyle: "text-body cursor-pointer hover:text-black"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex gap-3 overflow-scroll",
                        children: members.length > 0 ? members.map((member)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-[60px] mb-2.5 cursor-pointer hover:opacity-70",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    onClick: ()=>handleAddMember(member),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "relative w-[50px] h-[50px] min-w-[50px] mb-1.5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ProfileImage/* default */.Z, {
                                                image: member.image
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-xs text-body capitalize",
                                            children: member.firstname
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-xs text-body capitalize",
                                            children: member.lastname
                                        })
                                    ]
                                })
                            }, member.id)) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-body",
                            children: "No Members Found!"
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@tiptap/react/dist/index.js
var dist = __webpack_require__(7523);
// EXTERNAL MODULE: ./node_modules/@tiptap/starter-kit/dist/index.js + 22 modules
var starter_kit_dist = __webpack_require__(7000);
// EXTERNAL MODULE: ./src/components/Toolbar/Toolbar.module.css
var Toolbar_module = __webpack_require__(1927);
var Toolbar_module_default = /*#__PURE__*/__webpack_require__.n(Toolbar_module);
;// CONCATENATED MODULE: ./src/components/Toolbar/Toolbar.tsx



function Toolbar({ editor }) {
    if (!editor) return null;
    const handleHeadingChange = (e)=>{
        editor.chain().focus().toggleHeading({
            level: Number(e.target.value)
        }).run();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Toolbar_module_default()).toolbar,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                onChange: handleHeadingChange,
                className: (Toolbar_module_default()).select,
                value: 0,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        disabled: true,
                        value: 0,
                        children: "Heading:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: 1,
                        children: "H1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: 2,
                        children: "H2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: 3,
                        children: "H3"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: (Toolbar_module_default()).button,
                onClick: ()=>editor.chain().focus().toggleBold().run(),
                disabled: !editor.can().chain().focus().toggleBold().run(),
                "data-active": editor.isActive("bold") ? "is-active" : undefined,
                "aria-label": "bold",
                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: "B"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: (Toolbar_module_default()).button,
                onClick: ()=>editor.chain().focus().toggleItalic().run(),
                disabled: !editor.can().chain().focus().toggleItalic().run(),
                "data-active": editor.isActive("italic") ? "is-active" : undefined,
                "aria-label": "italic",
                children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                    children: "I"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: (Toolbar_module_default()).button,
                onClick: ()=>editor.chain().focus().toggleUnderline().run(),
                disabled: !editor.can().chain().focus().toggleUnderline().run(),
                "data-active": editor.isActive("underline") ? "is-active" : undefined,
                "aria-label": "italic",
                children: /*#__PURE__*/ jsx_runtime_.jsx("u", {
                    children: "U"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: (Toolbar_module_default()).button,
                onClick: ()=>editor.chain().focus().toggleStrike().run(),
                disabled: !editor.can().chain().focus().toggleStrike().run(),
                "data-active": editor.isActive("strike") ? "is-active" : undefined,
                "aria-label": "strikethrough",
                children: /*#__PURE__*/ jsx_runtime_.jsx("s", {
                    children: "S"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: (Toolbar_module_default()).button,
                onClick: ()=>editor.chain().focus().toggleBulletList().run(),
                "data-active": editor.isActive("bulletList") ? "is-active" : undefined,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                    name: "list"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: (Toolbar_module_default()).button,
                onClick: ()=>editor.chain().focus().toggleOrderedList().run(),
                "data-active": editor.isActive("orderedList") ? "is-active" : undefined,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                    name: "orList"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/Tiptap/Tiptap.module.css
var Tiptap_module = __webpack_require__(5794);
var Tiptap_module_default = /*#__PURE__*/__webpack_require__.n(Tiptap_module);
// EXTERNAL MODULE: ./node_modules/@tiptap/extension-underline/dist/index.js
var extension_underline_dist = __webpack_require__(2472);
;// CONCATENATED MODULE: ./src/components/Tiptap/Tiptap.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function Tiptap({ onChange, error, value }) {
    const editor = (0,dist/* useEditor */.jE)({
        editorProps: {
            attributes: {
                class: `${(Tiptap_module_default()).tiptapEditor} prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc`
            }
        },
        content: value,
        extensions: [
            starter_kit_dist/* default */.Z,
            extension_underline_dist/* default */.Z
        ]
    });
    const handleContentChange = (content)=>{
        onChange("body", content);
    };
    editor?.on("update", ({ editor })=>{
        // The content has changed.
        handleContentChange(editor?.getJSON());
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(Tiptap_module_default()).container} ${error && "border-error"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Toolbar, {
                editor: editor
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(dist/* EditorContent */.kg, {
                editor: editor
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Input/Input.tsx





function Input({ elementType, config, value, onChange, error, label, subLabel }) {
    let element = /*#__PURE__*/ jsx_runtime_.jsx(InputField, {
        config: config,
        value: value,
        onChange: onChange,
        error: error,
        label: label
    });
    if (elementType === "editor") element = /*#__PURE__*/ jsx_runtime_.jsx(Tiptap, {
        value: value,
        onChange: onChange,
        error: error
    });
    if (elementType === "projectMenu") element = /*#__PURE__*/ jsx_runtime_.jsx(SelectProjectMenu, {
        value: value,
        onChange: onChange,
        error: error
    });
    if (elementType === "teamMenu") element = /*#__PURE__*/ jsx_runtime_.jsx(SelectTeamMenu, {
        value: value,
        onChange: onChange,
        error: error
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            label && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "pb-1.5 text-caption-2",
                children: [
                    label,
                    subLabel && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "ml-[5px] text-xs text-body opacity-60",
                        children: subLabel
                    })
                ]
            }),
            error && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-xs text-error",
                children: error
            }),
            element
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Form/Form.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Form({ formFile, className, onSubmit, children, errors }) {
    const [form, setForm] = (0,react_.useState)(formFile);
    const formKeys = Object.keys(formFile);
    const handleSubmit = (e)=>{
        e.preventDefault();
        let formData = {};
        formKeys.forEach((formKey)=>{
            formData = {
                ...formData,
                [formKey]: form[formKey].value
            };
        });
        onSubmit(formData);
    };
    const handleInputChange = (inputName, inputValue)=>{
        setForm({
            ...form,
            [inputName]: {
                ...form[inputName],
                value: inputValue
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSubmit,
        className: className,
        children: [
            Object.keys(form).length > 0 && formKeys.map((formKey)=>/*#__PURE__*/ jsx_runtime_.jsx(Input, {
                    config: form[formKey].config,
                    value: form[formKey].value,
                    onChange: handleInputChange,
                    error: errors && errors[formKey] && errors[formKey],
                    label: form[formKey].label,
                    subLabel: form[formKey].subLabel,
                    elementType: form[formKey].elementType
                }, formKey)),
            children
        ]
    });
}


/***/ }),

/***/ 5057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2050);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8622);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2196);
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

/***/ 6389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 3453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2406);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5057);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Modal({ title, isOpen, toggle, children }) {
    const outsideModalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
        const handleOutsideModal = (e)=>{
            if (outsideModalRef && outsideModalRef.current === e.target) toggle();
        };
        const current = outsideModalRef.current;
        current?.addEventListener("click", handleOutsideModal);
        return ()=>current?.removeEventListener("click", handleOutsideModal);
    }, [
        isOpen,
        toggle
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${isOpen ? "block" : "hidden"} w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 py-10 overflow-hidden`,
        ref: outsideModalRef,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Card_Card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            className: "bg-red-500 w-[600px] my-0 mx-auto",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                    className: "py-4 px-5 bg-[#F4F8F9] flex-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-title",
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "hover:opacity-80",
                            onClick: toggle,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                name: "close",
                                iconContainerStyle: "w-5 h-5 bg-body opacity-50 rounded-full text-white cursor-pointer",
                                size: "xs"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "px-5 pt-5 max-h-[80vh] overflow-scroll",
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 4778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ProfileImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


function ProfileImage({ image }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: image,
            alt: "user profile",
            className: "rounded-full object-cover w-full h-full m-w-full"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: "/noavatar.png",
            fill: true,
            alt: "user profile image",
            className: "rounded-full"
        })
    });
}


/***/ }),

/***/ 3664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W$: () => (/* binding */ setProfileImage),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   b9: () => (/* binding */ clearErrors),
/* harmony export */   kS: () => (/* binding */ logout),
/* harmony export */   nX: () => (/* binding */ getAuthUser),
/* harmony export */   x4: () => (/* binding */ login)
/* harmony export */ });
/* unused harmony exports authSlice, setAuth, setCredentials */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6668);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_fetchWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5341);



const initialState = {
    isAuth: false,
    credentials: {
        token: "",
        user: {
            id: "",
            email: "",
            firstname: "",
            lastname: "",
            createdAt: "",
            image: ""
        }
    },
    status: "idle",
    errors: {}
};
const login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)("/login", async ({ userData, isSignup }, { rejectWithValue })=>{
    let url = `${"https://us-central1-sitdown-834fc.cloudfunctions.net/api/"}login`;
    if (isSignup) url = `${"https://us-central1-sitdown-834fc.cloudfunctions.net/api/"}signup`;
    const data = await _util_fetchWrapper__WEBPACK_IMPORTED_MODULE_1__/* .fetchWrapper */ .h.post(url, userData);
    // if there's no token, login is unsuccessful, and will return an object with list of errors
    if (!data.token) return rejectWithValue(data);
    //set localStorage, cookies expires in one hour since FB token's life is only one hour
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.setCookie)("authToken", data.token, {
        expires: new Date(Date.now() + 60 * 60 * 1000)
    });
    return data;
});
const getAuthUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)("/getAuthUser", async (token, { rejectWithValue })=>{
    const user = await _util_fetchWrapper__WEBPACK_IMPORTED_MODULE_1__/* .fetchWrapper */ .h.get(`${"https://us-central1-sitdown-834fc.cloudfunctions.net/api/"}user`, undefined, token);
    if (user.error) return rejectWithValue(user.error);
    return user;
});
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state)=>{
            state.isAuth = true;
        },
        setProfileImage: (state, action)=>{
            state.credentials.user.image = action.payload;
        },
        setCredentials: (state, action)=>{
            state.credentials.user = action.payload;
            state.isAuth = true;
        },
        clearErrors: (state)=>{
            state.errors = {};
        },
        logout: (state)=>{
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.deleteCookie)("authToken");
            // delete headers authorization?
            return initialState;
        }
    },
    extraReducers (builder) {
        builder.addCase(login.pending, (state, action)=>{
            state.errors = {};
            state.status = "loading";
        }).addCase(login.fulfilled, (state, action)=>{
            state.status = "succeeded";
            state.isAuth = true;
            state.credentials.token = action.payload.token;
        }).addCase(login.rejected, (state, action)=>{
            state.status = "failed";
            state.errors = action.payload;
        }).addCase(getAuthUser.pending, (state, action)=>{
            state.errors = {};
            state.status = "loading";
        }).addCase(getAuthUser.fulfilled, (state, action)=>{
            state.status = "succeeded";
            state.credentials.user = action.payload;
            state.isAuth = true;
        }).addCase(getAuthUser.rejected, (state, action)=>{
            state.status = "failed";
            state.errors = action.error.message;
        });
    }
});
const { setAuth, setCredentials, clearErrors, logout, setProfileImage } = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);


/***/ }),

/***/ 2949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NV: () => (/* binding */ editProject),
/* harmony export */   Rf: () => (/* binding */ getUsers),
/* harmony export */   Tf: () => (/* binding */ setStatus),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   b9: () => (/* binding */ clearErrors),
/* harmony export */   bl: () => (/* binding */ fetchProjects),
/* harmony export */   th: () => (/* binding */ deleteProject),
/* harmony export */   yq: () => (/* binding */ postProject)
/* harmony export */ });
/* unused harmony export projectsSlice */
/* harmony import */ var _util_fetchWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5341);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    projects: [],
    status: "idle",
    errors: {},
    teamMembers: []
};
const fetchProjects = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("/projects/fetchProjects", async (param, { rejectWithValue })=>{
    const projects = await _util_fetchWrapper__WEBPACK_IMPORTED_MODULE_0__/* .fetchWrapper */ .h.get(`${"https://us-central1-sitdown-834fc.cloudfunctions.net/api/"}projects`);
    if (projects.error) return rejectWithValue(projects);
    return projects;
});
const postProject = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("/projects/postProject", async ({ body, token, userInfo }, { rejectWithValue })=>{
    const project = await _util_fetchWrapper__WEBPACK_IMPORTED_MODULE_0__/* .fetchWrapper */ .h.post(`${"https://us-central1-sitdown-834fc.cloudfunctions.net/api/"}projects`, body, token);
    if (!project.id) return rejectWithValue(project);
    // structure new project
    const { userId, ...rest } = project;
    return {
        ...rest,
        user: userInfo
    };
});
const editProject = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("/projects/editProject", async ({ body, token, userInfo, id }, { rejectWithValue })=>{
    const project = await _util_fetchWrapper__WEBPACK_IMPORTED_MODULE_0__/* .fetchWrapper */ .h.post(`${"https://us-central1-sitdown-834fc.cloudfunctions.net/api/"}projects/${id}`, body, token);
    if (!project.id) return rejectWithValue(project);
    // structure edited project
    const { userId, ...rest } = project;
    return {
        ...rest,
        user: userInfo
    };
});
// For populating Select Team Members Menu, 
const getUsers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("/projects/getUsers", async (param, { rejectWithValue })=>{
    const users = await _util_fetchWrapper__WEBPACK_IMPORTED_MODULE_0__/* .fetchWrapper */ .h.get(`${"https://us-central1-sitdown-834fc.cloudfunctions.net/api/"}users`);
    if (users.error) return rejectWithValue(users);
    return users;
});
const deleteProject = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("/project/deleteProject", async ({ id, token }, { rejectWithValue })=>{
    const message = await _util_fetchWrapper__WEBPACK_IMPORTED_MODULE_0__/* .fetchWrapper */ .h.delete(`${"https://us-central1-sitdown-834fc.cloudfunctions.net/api/"}projects/${id}`, null, token);
    if (message.error) return rejectWithValue(message);
    return {
        id,
        message
    };
});
const projectsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "projects",
    initialState,
    reducers: {
        setStatus: (state, action)=>{
            state.status = action.payload;
        },
        clearErrors: (state)=>{
            state.errors = {};
        }
    },
    extraReducers (builder) {
        builder.addCase(fetchProjects.pending, (state)=>{
            state.status = "loading";
            state.errors = {};
        }).addCase(fetchProjects.fulfilled, (state, action)=>{
            state.status = "fetchSucceeded";
            state.projects = state.projects.concat(action.payload);
        }).addCase(fetchProjects.rejected, (state, action)=>{
            state.status = "failed";
            state.errors = action.error.message;
        }).addCase(postProject.pending, (state)=>{
            state.errors = {};
            state.status = "loading";
        }).addCase(postProject.fulfilled, (state, action)=>{
            state.status = "postSucceeded";
            state.projects.unshift(action.payload);
            state.errors = {};
        }).addCase(postProject.rejected, (state, action)=>{
            state.status = "failed";
            state.errors = action.payload;
        }).addCase(editProject.pending, (state, action)=>{
            state.status = "loading";
            state.errors = {};
        }).addCase(editProject.fulfilled, (state, action)=>{
            const index = state.projects.findIndex((project)=>project.id === action.payload.id);
            state.status = "editSucceeded";
            state.projects[index] = action.payload;
            state.errors = {};
        }).addCase(editProject.rejected, (state, action)=>{
            state.status = "failed";
            state.errors = action.payload;
        }).addCase(getUsers.pending, (state)=>{
            state.errors = {};
            state.status = "loading";
        }).addCase(getUsers.fulfilled, (state, action)=>{
            state.status = "fetchSucceeded";
            state.teamMembers = action.payload;
        }).addCase(getUsers.rejected, (state, action)=>{
            state.status = "failed";
            state.errors = action.payload;
        }).addCase(deleteProject.pending, (state, action)=>{
            state.status = "loading";
            state.errors = {};
        }).addCase(deleteProject.fulfilled, (state, action)=>{
            const indexToDelete = state.projects.findIndex((project)=>project.id === action.payload.id);
            state.projects.splice(indexToDelete, 1);
            state.status = "deleteSucceeded";
            state.errors = {};
        }).addCase(deleteProject.rejected, (state, action)=>{
            state.status = "failed";
            state.errors = action.payload;
        });
    }
});
const { setStatus, clearErrors } = projectsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectsSlice.reducer);


/***/ }),

/***/ 2291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $J: () => (/* binding */ toggleModal),
/* harmony export */   ER: () => (/* binding */ postUpdate),
/* harmony export */   Tf: () => (/* binding */ setStatus),
/* harmony export */   Vx: () => (/* binding */ setUpdates),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   b9: () => (/* binding */ clearErrors),
/* harmony export */   dw: () => (/* binding */ editUpdate),
/* harmony export */   ec: () => (/* binding */ deleteUpdate),
/* harmony export */   f9: () => (/* binding */ fetchUpdates)
/* harmony export */ });
/* unused harmony export updatesSlice */
/* harmony import */ var _util_fetchWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5341);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    updates: [],
    status: "idle",
    errors: {},
    isModalOpen: false,
    updateId: ""
};
const fetchUpdates = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("/updates/fetchUpdates", async (param, { rejectWithValue })=>{
    const updates = await _util_fetchWrapper__WEBPACK_IMPORTED_MODULE_0__/* .fetchWrapper */ .h.get(`${"https://us-central1-sitdown-834fc.cloudfunctions.net/api/"}updates`);
    if (updates.error) return rejectWithValue(updates);
    return updates;
});
const postUpdate = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("/updates/postUpdate", async ({ body, token, userInfo }, { rejectWithValue })=>{
    const update = await _util_fetchWrapper__WEBPACK_IMPORTED_MODULE_0__/* .fetchWrapper */ .h.post(`${"https://us-central1-sitdown-834fc.cloudfunctions.net/api/"}updates`, body, token);
    if (!update.id) return rejectWithValue(update);
    // structure new update
    const { userId, ...rest } = update;
    return {
        ...rest,
        user: userInfo
    };
});
const editUpdate = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("/updates/editUpdate", async ({ body, token, userInfo, id }, { rejectWithValue })=>{
    const update = await _util_fetchWrapper__WEBPACK_IMPORTED_MODULE_0__/* .fetchWrapper */ .h.post(`${"https://us-central1-sitdown-834fc.cloudfunctions.net/api/"}updates/${id}`, body, token);
    if (!update.id) return rejectWithValue(update);
    // structure edited update
    const { userId, ...rest } = update;
    return {
        ...rest,
        user: userInfo
    };
});
const deleteUpdate = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("/updates/deleteUpdate", async ({ id, token }, { rejectWithValue })=>{
    const message = await _util_fetchWrapper__WEBPACK_IMPORTED_MODULE_0__/* .fetchWrapper */ .h.delete(`${"https://us-central1-sitdown-834fc.cloudfunctions.net/api/"}updates/${id}`, null, token);
    if (message.error) return rejectWithValue(message);
    return {
        id,
        message
    };
});
const updatesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "updates",
    initialState,
    reducers: {
        setStatus: (state, action)=>{
            state.status = action.payload;
        },
        clearErrors: (state)=>{
            state.errors = {};
        },
        toggleModal: (state)=>{
            state.isModalOpen = !state.isModalOpen;
        },
        setUpdates: (state, action)=>{
            state.updates = action.payload;
        }
    },
    extraReducers (builder) {
        builder.addCase(fetchUpdates.pending, (state, action)=>{
            state.status = "loading";
            state.errors = {};
        }).addCase(fetchUpdates.fulfilled, (state, action)=>{
            state.status = "fetchSucceeded";
            state.updates = state.updates.concat(action.payload);
        }).addCase(fetchUpdates.rejected, (state, action)=>{
            state.status = "failed";
            state.errors = action.error.message;
        }).addCase(postUpdate.pending, (state, action)=>{
            state.status = "loading";
            state.errors = {};
        }).addCase(postUpdate.fulfilled, (state, action)=>{
            state.status = "postSucceeded";
            state.updates.unshift(action.payload);
            state.errors = {};
        }).addCase(postUpdate.rejected, (state, action)=>{
            state.status = "failed";
            state.errors = action.payload;
        }).addCase(editUpdate.pending, (state, action)=>{
            state.status = "loading";
            state.errors = {};
        }).addCase(editUpdate.fulfilled, (state, action)=>{
            const index = state.updates.findIndex((update)=>update.id === action.payload.id);
            state.status = "editSucceeded";
            state.updates[index] = action.payload;
            state.errors = {};
        }).addCase(editUpdate.rejected, (state, action)=>{
            state.status = "failed";
            state.errors = action.payload;
        }).addCase(deleteUpdate.pending, (state, action)=>{
            state.status = "loading";
            state.errors = {};
        }).addCase(deleteUpdate.fulfilled, (state, action)=>{
            const indexToDelete = state.updates.findIndex((update)=>update.id === action.payload.id);
            state.updates.splice(indexToDelete, 1);
            state.status = "deleteSucceeded";
            state.errors = {};
        }).addCase(deleteUpdate.rejected, (state, action)=>{
            state.status = "failed";
            state.errors = action.payload;
        });
    }
});
const { setStatus, clearErrors, toggleModal, setUpdates } = updatesSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updatesSlice.reducer);


/***/ }),

/***/ 1487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CG: () => (/* binding */ useAppSelector),
/* harmony export */   TL: () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* unused harmony export useAppStore */
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;
const useAppStore = (/* unused pure expression or super */ null && (useStore));


/***/ }),

/***/ 5341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ fetchWrapper)
/* harmony export */ });
const request = (method)=>{
    return async (url, body, token)=>{
        const options = {
            method
        };
        if (body) {
            // doesnt work if body is image, only works with form texts
            options.headers = {
                "Content-Type": "application/json"
            };
            options.body = JSON.stringify(body);
        }
        if (token) options.headers = {
            ...options.headers,
            "Authorization": `Bearer ${token}`
        };
        const response = await fetch(url, options);
        // if there's an error, API will return a JSON with errors in it, which can be use to display
        return await response.json();
    };
};
// fetchWrapper.post(URL, body, token)
const fetchWrapper = {
    get: request("GET"),
    post: request("POST"),
    put: request("PUT"),
    delete: request("DELETE")
};


/***/ }),

/***/ 8037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Yd: () => (/* binding */ formatDateTitle),
/* harmony export */   bT: () => (/* binding */ toHours),
/* harmony export */   jQ: () => (/* binding */ sortDates),
/* harmony export */   ny: () => (/* binding */ validateTags),
/* harmony export */   p6: () => (/* binding */ formatDate)
/* harmony export */ });
/* unused harmony export calculatePercentageChange */
const calculatePercentageChange = (currentValue, oldValue)=>{
    let difference = currentValue - oldValue;
    return Math.round(difference / oldValue * 100);
};
const formatDate = (prevDate)=>{
    const minutes = 60 * 1000;
    const hours = minutes * 60;
    const days = hours * 24;
    const months = days * 30; //28, 31
    const years = days * 365;
    const currentDate = new Date();
    const secondsPast = currentDate.getTime() - new Date(prevDate).getTime();
    let timeName, time;
    if (secondsPast < minutes) {
        time = 1000;
        timeName = "seconds";
    } else if (secondsPast < hours) {
        time = minutes;
        timeName = "minutes";
    } else if (secondsPast < days) {
        time = hours;
        timeName = "hours";
    } else if (secondsPast < months) {
        time = days;
        timeName = "days";
    } else if (secondsPast < years) {
        time = months;
        timeName = "months";
    } else {
        time = 1000;
        timeName = "seconds";
    }
    const value = Math.round(secondsPast / time);
    if (value === 1) timeName = timeName.slice(0, -1);
    return `${value} ${timeName} ago`;
};
const addZeroPrefix = (value)=>`0${value}`;
const toHours = (createdAt)=>{
    const newDate = new Date(createdAt);
    const hours = newDate.getUTCHours().toLocaleString();
    const minutes = newDate.getUTCMinutes().toLocaleString();
    const currentDate = new Date();
    const secondsPast = currentDate.getTime() - newDate.getTime();
    // if less than 6 hours ago
    if (secondsPast < 6 * 60 * 60 * 1000) return formatDate(createdAt);
    return `${hours.length === 1 ? addZeroPrefix(hours) : hours}:${minutes.length === 1 ? addZeroPrefix(minutes) : minutes}`;
};
const formatDateTitle = (createdAt)=>{
    const currentDate = new Date();
    const secondsPast = currentDate.getTime() - new Date(createdAt).getTime();
    // less than one day
    if (secondsPast < 24 * 60 * 60 * 1000) return "Today";
    else if (secondsPast > 24 * 60 * 60 * 1000 && secondsPast < 48 * 60 * 60 * 1000) return "Yesterday";
    // string ref = Mon May 20 2024
    const a = createdAt.split(" ");
    return `${a[0]}, ${a[2]} ${a[1]}`;
};
const validateTags = (formTags)=>{
    //replace any special characters with space, then replace any whitespaces with one space and split using that one space.
    const tags = formTags.replace(/[^a-zA-Z ]/g, " ").replace(/\s+/g, " ").split(" ");
    const uniqueTags = [];
    // remove duplicates and removes case-sensitive
    tags.forEach((tag)=>{
        if (!uniqueTags.includes(tag.toLowerCase())) uniqueTags.push(tag.toLowerCase());
    });
    return uniqueTags;
};
const sortDates = (datesArray)=>datesArray.sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());


/***/ }),

/***/ 5794:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Tiptap_container__Gzag5",
	"tiptapEditor": "Tiptap_tiptapEditor__WX4KH"
};


/***/ }),

/***/ 1927:
/***/ ((module) => {

// Exports
module.exports = {
	"toolbar": "Toolbar_toolbar__TOpIp",
	"button": "Toolbar_button__jYcQj",
	"select": "Toolbar_select__g_b1b"
};


/***/ }),

/***/ 4053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/izzyyo/Desktop/Projects/sitdown-next-app/src/app/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 5249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.3db8de2a.png","height":85,"width":318,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAQ0lEQVR4nGPkvX3hoOYbqTTJS6LCfzn//2X4x8DEwMDwCYj/AzEzo9OcD/NY/7If4eDmOPH3z38RkCAQ/wRiFiD+DgAeHxU53/1E3AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ 6491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/small-logo.68fdcc73.png","height":85,"width":58,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAlUlEQVR42mNgen+viOnD/b9MHx/8Z/p4/wnj18cCDMyPL38H4n8sjy7/Z310ueP///8MDKyXjv5gu3T0P+Plo78Ybu6SAgtyHN2dxHx05xexg/sXgQRAGEJsZ2D1nfT9uN+kH999J/2IAQt6Tf/p7DHj+38ofg0WdFrwdRcQ/4fi+ww2y77o2i778hqI3wPxK9ulX4IANSNmIQMKl4wAAAAASUVORK5CYII=","blurWidth":5,"blurHeight":8});

/***/ }),

/***/ 3824:
/***/ (() => {



/***/ })

};
;