exports.id = 873;
exports.ids = [873];
exports.modules = {

/***/ 4263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ButtonDelete)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6668);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1487);
/* harmony import */ var _lib_features_updates_updatesSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2291);
/* harmony import */ var _lib_features_projects_projectsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2949);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5057);
/* __next_internal_client_entry_do_not_use__ default auto */ 






function ButtonDelete({ data, slice }) {
    const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authToken");
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const dispatch = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .TL)();
    const authUserId = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .CG)((state)=>state.auth.credentials.user.id);
    const handleDelete = ()=>{
        if (slice === "updates") dispatch((0,_lib_features_updates_updatesSlice__WEBPACK_IMPORTED_MODULE_4__/* .deleteUpdate */ .ec)({
            id: data.id,
            token
        }));
        if (slice === "projects") dispatch((0,_lib_features_projects_projectsSlice__WEBPACK_IMPORTED_MODULE_5__/* .deleteProject */ .th)({
            id: data.id,
            token
        }));
        router.replace("/dashboard");
    };
    if (authUserId === data?.user?.id) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "ml-5 text-error cursor-pointer opacity-70 hover:opacity-90",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            name: "delete",
            onClick: handleDelete
        })
    });
}


/***/ }),

/***/ 8843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ButtonEdit)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/lib/hooks.ts
var hooks = __webpack_require__(1487);
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx
var Icon = __webpack_require__(5057);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./node_modules/cookies-next/lib/index.js
var lib = __webpack_require__(6668);
// EXTERNAL MODULE: ./src/lib/features/updates/updatesSlice.ts
var updatesSlice = __webpack_require__(2291);
// EXTERNAL MODULE: ./src/lib/features/projects/projectsSlice.ts
var projectsSlice = __webpack_require__(2949);
// EXTERNAL MODULE: ./src/util/helper.ts
var helper = __webpack_require__(8037);
// EXTERNAL MODULE: ./src/components/Button/Button.tsx
var Button = __webpack_require__(1897);
// EXTERNAL MODULE: ./src/components/Form/Form.tsx + 6 modules
var Form = __webpack_require__(6001);
// EXTERNAL MODULE: ./src/components/Modal/Modal.tsx
var Modal = __webpack_require__(3453);
;// CONCATENATED MODULE: ./src/components/ModalEditForm/editUpdateFormFile.ts
const EditUpdateFormFile = {
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
/* harmony default export */ const editUpdateFormFile = (EditUpdateFormFile);

;// CONCATENATED MODULE: ./src/components/ModalEditForm/editProjectFormFile.ts
const EditProjectFormFile = {
    title: {
        elementType: "input",
        label: "Project name*",
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
        elementType: "editor",
        label: "Description*",
        config: {
            id: "body",
            type: "text",
            name: "body"
        },
        value: "",
        validation: {},
        valid: true
    },
    teamMembers: {
        elementType: "teamMenu",
        label: "Team members*",
        config: {
            id: "teamMembers",
            type: "text",
            name: "teamMembers"
        },
        value: "",
        validation: {
        },
        valid: true
    }
};
/* harmony default export */ const editProjectFormFile = (EditProjectFormFile);

;// CONCATENATED MODULE: ./src/components/ModalEditForm/ModalEditForm.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 












function ModalEditForm({ show, toggleModal, data, slice }) {
    const [file, setFile] = (0,react_.useState)({});
    const authCookie = (0,lib.getCookie)("authToken");
    const router = (0,navigation.useRouter)();
    const params = (0,navigation.useParams)();
    const dispatch = (0,hooks/* useAppDispatch */.TL)();
    const errors = (0,hooks/* useAppSelector */.CG)((state)=>state.updates.errors);
    const updatesStatus = (0,hooks/* useAppSelector */.CG)((state)=>state.updates.status);
    const projectsStatus = (0,hooks/* useAppSelector */.CG)((state)=>state.projects.status);
    const user = (0,hooks/* useAppSelector */.CG)((state)=>state.auth.credentials.user);
    const handleSubmit = (formData)=>{
        if (formData.tags && typeof formData.tags === "string") formData = {
            ...formData,
            tags: (0,helper/* validateTags */.ny)(formData.tags)
        };
        if (formData.teamMembers) {
            const teamMembersId = [];
            formData.teamMembers.forEach((member)=>teamMembersId.push(member.id));
            formData = {
                ...formData,
                teamMembers: teamMembersId
            };
        }
        const { id, firstname, lastname, image } = user;
        const newData = {
            body: {
                ...formData
            },
            token: authCookie,
            userInfo: {
                id,
                firstname,
                lastname,
                image
            },
            id: params.id
        };
        if (slice === "projects") dispatch((0,projectsSlice/* editProject */.NV)(newData));
        if (slice === "updates") dispatch((0,updatesSlice/* editUpdate */.dw)(newData));
    };
    (0,react_.useEffect)(()=>{
        let file;
        if (slice === "projects") file = {
            ...editProjectFormFile
        };
        if (slice === "updates") file = {
            ...editUpdateFormFile
        };
        const formKeys = Object.keys(file);
        data && formKeys.forEach((formKey)=>{
            if (formKey === "projectId" && slice === "updates") {
                file[formKey].value = data?.project?.id; //{id: data.project.id, title: data.project.title}
            } else if (formKey === "tags") {
                let tagsString = "";
                data.tags.forEach((tag, index)=>{
                    if (index === 0) tagsString = tag;
                    else tagsString = tagsString + " " + tag;
                });
                file[formKey].value = tagsString;
            } else {
                file[formKey].value = data[formKey];
            }
        });
        setFile(file);
    }, [
        slice,
        data
    ]);
    (0,react_.useEffect)(()=>{
        if (updatesStatus === "editSucceeded" || projectsStatus === "editSucceeded") {
            if (slice === "updates") dispatch((0,updatesSlice/* setStatus */.Tf)("idle"));
            if (slice === "projects") dispatch((0,projectsSlice/* setStatus */.Tf)("idle"));
            toggleModal();
            router.refresh();
            router.push("/dashboard");
        }
    }, [
        updatesStatus,
        projectsStatus,
        dispatch,
        router,
        toggleModal,
        slice
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(Modal/* default */.Z, {
        title: "Edit update",
        isOpen: show,
        toggle: toggleModal,
        children: Object.keys(file).length > 0 && show && /*#__PURE__*/ jsx_runtime_.jsx(Form/* default */.Z, {
            formFile: file,
            className: "flex flex-col min-w-full",
            onSubmit: handleSubmit,
            errors: errors,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                type: "submit",
                className: "text-xl p-10 mb-7 place-self-end",
                children: "Edit"
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/ButtonEdit/ButtonEdit.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function ButtonEdit({ data, slice }) {
    const authUserId = (0,hooks/* useAppSelector */.CG)((state)=>state.auth.credentials.user.id);
    const [show, setShow] = (0,react_.useState)(false);
    const toggleModal = ()=>{
        setShow(!show);
    };
    const handleEdit = ()=>{
        setShow(true);
    };
    if (authUserId === data?.user?.id) return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ModalEditForm, {
                show: show,
                toggleModal: toggleModal,
                data: data,
                slice: slice
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-black cursor-pointer opacity-70 hover:opacity-90",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                    name: "edit",
                    onClick: handleEdit
                })
            })
        ]
    });
}


/***/ }),

/***/ 7490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TiptapRender)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tiptap_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7523);
/* harmony import */ var _tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7000);
/* harmony import */ var _TiptapRender_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7354);
/* harmony import */ var _TiptapRender_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TiptapRender_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tiptap_extension_underline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2472);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function TiptapRender({ content, className }) {
    const editor = (0,_tiptap_react__WEBPACK_IMPORTED_MODULE_3__/* .useEditor */ .jE)({
        editorProps: {
            attributes: {
                class: `${(_TiptapRender_module_css__WEBPACK_IMPORTED_MODULE_4___default().tiptapEditor)} prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc`
            }
        },
        editable: false,
        content: content,
        extensions: [
            _tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            _tiptap_extension_underline__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
        ]
    });
    if (!editor) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `pt-2.5 ${className}`,
        children: !content?.type ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "text-body",
            children: content
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tiptap_react__WEBPACK_IMPORTED_MODULE_3__/* .EditorContent */ .kg, {
            editor: editor
        })
    });
}


/***/ }),

/***/ 7354:
/***/ ((module) => {

// Exports
module.exports = {
	"tiptapEditor": "TiptapRender_tiptapEditor__zS_UV"
};


/***/ })

};
;